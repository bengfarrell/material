import MapDOM from '../../../node_modules/attrocity/src/mapdom.js';
import Reflect from '../../../node_modules/attrocity/src/reflect.js';
import Template from './template.js';

export default class CoordinatePicker extends HTMLElement {
    static get observedAttributes() {
        return ['x', 'y', 'isDragging'];
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();
        this.dom = MapDOM.map(this.shadowRoot);
        this.binding = Reflect.createBindings(this);
        this.binding.addCallback((name, value) => this.refreshCoordinates(name, value));
        MapDOM.wireElements(document, 'mousemove, mouseup', e => this.eventHandler(e));
        MapDOM.wireElements(this, 'mousedown, mouseup', e => this.eventHandler(e));
    }

    set color(rgb) {
        this.style.backgroundColor = `rgb(${rgb.r},${rgb.g},${rgb.b})`;
    }

    eventHandler(e) {
        const bounds = this.getBoundingClientRect();
        const coords = {
            x: e.clientX - bounds.left,
            y: e.clientY - bounds.top
        };
        switch (e.type) {
            case 'mousedown':
                this.isDragging = true;
                this.updateXY(coords.x, coords.y);
                this.refreshCoordinates('xy');
                break;

            case 'mouseup':
                this.isDragging = false;
                break;

            case 'mousemove':
                if (this.isDragging) {
                    this.updateXY(coords.x, coords.y);
                    this.refreshCoordinates('xy');
                }
                break;
        }
    }

    updateXY(x, y) {
        let hPos = x - this.dom.thumb.offsetWidth/2;
        let vPos = y - this.dom.thumb.offsetHeight/2;
        if (hPos > this.offsetWidth) {
            hPos = this.offsetWidth;
        }
        if (hPos < 0) {
            hPos = 0;
        }
        if (vPos > this.offsetHeight) {
            vPos = this.offsetHeight;
        }
        if (vPos < 0) {
            vPos = 0;
        }
        this.x = (hPos / this.offsetWidth) * 100;
        this.y = (vPos / this.offsetHeight) * 100;

        const ce = new CustomEvent('change', { detail: { target: this, x: this.x, y: this.y }});
        this.dispatchEvent(ce);
    }

    refreshCoordinates(name, value) {
        if (name === 'x' || name === 'y' || name === 'xy') {
            this.dom.thumb.style.left = this.x/100 * this.offsetWidth + 'px';
            this.dom.thumb.style.top = this.y/100 * this.offsetHeight + 'px';
        }
    }
}

if (!customElements.get('mm-coord-picker')) {
    customElements.define('mm-coord-picker', Reflect.attach(CoordinatePicker));
}
