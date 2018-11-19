import MapDOM from '../../../node_modules/attrocity/src/mapdom.js';
import Reflect from '../../../node_modules/attrocity/src/simplereflect.js';
import Template from './template.js';

export default class MaterialColorPicker extends HTMLElement {
    static get observedAttributes() {
        return ['isOpen', 'specular', 'diffuse', 'highlight'];
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();
        this.dom = MapDOM.map(this.shadowRoot);
    }
}

if (!customElements.get('mm-mat-colorpicker')) {
    customElements.define('mm-mat-colorpicker', Reflect.attach(MaterialColorPicker));
}
