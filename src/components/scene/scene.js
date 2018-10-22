import MapDOM from '../../../node_modules/attrocity/src/mapdom.js';
import Reflect from '../../../node_modules/attrocity/src/reflect.js';
import Template from './template.js';
import Model from "../../utils/model.js";

export default class Scene extends HTMLElement {
    static get observedAttributes() {
        return ['selectedObject', 'r', 'g', 'b', 'a'];
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();
        this.binding = Reflect.createBindings(this).sync(Model.data);
        this.binding.addCallback((name, value) => this.switchMesh(value), 'selectedObject');
        this.binding.addCallback((name, value, details) => this.updateColor(name, value), ['r', 'g', 'b', 'a']);

        this.dom = MapDOM.map(this.shadowRoot);
        this.initScene();
        this.selectedObject = 'sphere';
    }

    render() {
        const delta = this.engine.getDeltaTime();
        this.scene.render();
    }

    initScene() {
        this.engine = new BABYLON.Engine(this.dom.scene, true);
        this.engine.enableOfflineSupport = false;
        this.scene = new BABYLON.Scene(this.engine);
        this.scene.useRightHandedSystem = true;
        this.scene.clearColor = new BABYLON.Color3(0.894, 0.894, 0.894);

        const camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 4, BABYLON.Vector3.Zero(), this.scene);
        const light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), this.scene);
        const light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), this.scene);
        camera.attachControl(this.dom.scene, true);

        this.engine.runRenderLoop( () => this.render() );
        window.addEventListener('resize', () => this.onResize());
    }

    updateColor() {
        const material = new BABYLON.StandardMaterial('material', this.scene);
        material.diffuseColor = new BABYLON.Color3(this.r / 255, this.g / 255, this.b / 255);
        material.alpha = this.a;
        this.currentMesh.material = material;
    }

    switchMesh(mesh) {
        if (this.currentMesh) {
            this.currentMesh.dispose();
        }
        switch (mesh) {
            case 'sphere':
                this.currentMesh = BABYLON.MeshBuilder.CreateSphere("sphere", {}, this.scene);
                break;

            case 'cube':
                this.currentMesh = BABYLON.MeshBuilder.CreateBox("cube", {}, this.scene);
                break;

            case 'geodesic':
                this.currentMesh = BABYLON.MeshBuilder.CreateSphere("sphere", { segments: 2 }, this.scene);
                break;
        }
        this.updateColor();
    }

    onResize() {
        this.engine.resize();
    }
}

if (!customElements.get('mm-scene')) {
    customElements.define('mm-scene', Reflect.attach(Scene));
}
