import MapDOM from '../../../node_modules/attrocity/src/mapdom.js';
import Reflect from '../../../node_modules/attrocity/src/reflect.js';
import Template from './template.js';

export default class Navbar extends HTMLElement {
    static get observedAttributes() {
        return ['selected'];
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render(this.getAttribute('items').split(','));
        this.dom = MapDOM.map(this.shadowRoot);
        MapDOM.wire(this.shadowRoot, e => this.onSelectTab(e));
        this.binding = Reflect.createBindings(this);
    }

    onSelectTab(e) {
        console.log(e.currentTarget)
    }
}

if (!customElements.get('mm-navbar')) {
    customElements.define('mm-navbar', Reflect.attach(Navbar));
}
