import MapDOM from '../../../node_modules/attrocity/src/mapdom.js';
import Reflect from '../../../node_modules/attrocity/src/reflect.js';
import Template from './template.js';

export default class BottomTray extends HTMLElement {
    static get observedAttributes() {
        return ['isOpen'];
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();
        this.dom = MapDOM.map(this.shadowRoot);
        this.binding = Reflect.createBindings(this);
    }


    eventHandler(e) {
    }
}

if (!customElements.get('mm-bottom-tray')) {
    customElements.define('mm-bottom-tray', Reflect.attach(BottomTray));
}
