import MapDOM from '../../../node_modules/attrocity/src/mapdom.js';
import Binding from '../../../node_modules/attrocity/src/bind.js';
import Template from './template.js';


export default class App extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();
    }
}

if (!customElements.get('mm-app')) {
    customElements.define('mm-app', App);
}
