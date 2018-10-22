import MapDOM from '../../../node_modules/attrocity/src/mapdom.js';
import Reflect from '../../../node_modules/attrocity/src/reflect.js';
import Template from './template.js';

import Model from '../../utils/model.js';

export default class ObjectMenu extends HTMLElement {
    static get observedAttributes() {
        return ['selectedObject'];
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();
        this.binding = Reflect.createBindings(this).sync(Model.data);
        MapDOM.wire(this.shadowRoot, e => this.eventHandler(e));

    }

    eventHandler(e) {
        this.selectedObject = e.currentTarget.id;
    }
}

if (!customElements.get('mm-object-menu')) {
    customElements.define('mm-object-menu', Reflect.attach(ObjectMenu));
}
