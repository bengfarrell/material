import MapDOM from '../../../node_modules/attrocity/src/mapdom.js';
import Reflect from '../../../node_modules/attrocity/src/simplereflect.js';
import AttributeChangeObserver from '../../../node_modules/attrocity/src/attributechangeobserver.js';
import ObservableElement from '../../../node_modules/attrocity/src/observables/element.js';
import Convert from '../../../node_modules/attrocity/src/convert.js';
import DotPath from '../../../node_modules/attrocity/src/dotpath.js';
import Template from './template.js';
import States from './states.js';

/**
 * approach is heavily borrowed/stolen from https://cssgradient.io/
 */
export default class ColorPicker extends HTMLElement {
    static get observedAttributes() {
        return ['hex', 'alpha'];
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();
        this.dom = MapDOM.map(this.shadowRoot);

        const mmo = new AttributeChangeObserver( (o, detail) => { this.onColorChange(States.handle(o, detail).color) });
        mmo.observe(this.shadowRoot, States.attributes, { dom: this.dom });
    }

    onColorChange(o) {
        this.hex = o.hex;
        this.alpha = o.transparency;
    }
}

if (!customElements.get('mm-color-picker')) {
    customElements.define('mm-color-picker', Reflect.attach(ColorPicker));
}
