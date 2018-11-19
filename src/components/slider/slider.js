import MapDOM from '../../../node_modules/attrocity/src/mapdom.js';
import Reflect from '../../../node_modules/attrocity/src/reflect.js';
import Template from './template.js';

export default class Slider extends HTMLElement {
    static get observedAttributes() {
        return ['value', 'isDragging', 'backgroundColor'];
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();
        this.dom = MapDOM.map(this.shadowRoot);
        this.binding = Reflect.createBindings(this);
        this.binding.addCallback((name, value) => this.refreshSlider(value), 'value');
        this.binding.addCallback((name, value) => this.setColor(value), 'backgroundColor');
        MapDOM.wireElements(document, 'mousemove, mouseup', e => this.eventHandler(e));
        MapDOM.wireElements(this, 'mousedown, mouseup', e => this.eventHandler(e));
    }

    setColor(color) {
        this.dom.overlay.style.background = `linear-gradient(to right, ${color} 0%, ${color}00 100%)`;
    }

    refreshSlider(value) {
         this.dom.thumb.style.left = value/100 * this.offsetWidth + 'px';
    }

    updateX(x) {
        let hPos = x - this.dom.thumb.offsetWidth/2;
        if (hPos > this.offsetWidth) {
            hPos = this.offsetWidth;
        }
        if (hPos < 0) {
            hPos = 0;
        }
        this.value = (hPos / this.offsetWidth) * 100;

        const ce = new CustomEvent('change', { detail: { target: this, value: this.value }});
        this.dispatchEvent(ce);
    }

    eventHandler(e) {
        const bounds = this.getBoundingClientRect();
        const x = e.clientX - bounds.left;

        switch (e.type) {
            case 'mousedown':
                this.isDragging = true;
                this.updateX(x);
                this.refreshSlider(this.value);
                break;

            case 'mouseup':
                this.isDragging = false;
                break;

            case 'mousemove':
                if (this.isDragging) {
                    this.updateX(x);
                    this.refreshSlider(this.value);
                }
                break;
        }
    }
}

if (!customElements.get('mm-slider')) {
    customElements.define('mm-slider', Reflect.attach(Slider));
}
