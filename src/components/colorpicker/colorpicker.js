import MapDOM from '../../../node_modules/attrocity/src/mapdom.js';
import Reflect from '../../../node_modules/attrocity/src/reflect.js';
import Template from './template.js';

import Model from '../../utils/model.js';

/**
 * approach is heavily borrowed/stolen from https://cssgradient.io/
 * and http://www.easyrgb.com/en/math.php#text1
 */
export default class ColorPicker extends HTMLElement {
    static get observedAttributes() {
        return ['r', 'g', 'b', 'a'];
    }

    constructor() {
        super();
        this._hsv = { h: 0, s: 0, v: 0 };
        this._rgb = { r: 0, g: 0, b: 0 };

        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();
        this.dom = MapDOM.map(this.shadowRoot);
        MapDOM.wire(this.shadowRoot, e => this.eventHandler(e));
        this.binding = Reflect.createBindings(this).sync(Model.data);

        this.dom.satbright.color = this.HSVtoRGB(this._hsv.h, 1, 1);

    }

    set rgb(val) {
        this.r = val.r;
        this.g = val.g;
        this.b = val.b;
        this._rgb = val;
        this.dom.satbright.color = this.HSVtoRGB(this._hsv.h, 1, 1);
        this.dom.transparency.color = this.HSVtoRGB(this._hsv.h, 1, 1);

        this.dom.rInputValue.value = parseInt(this.r);
        this.dom.gInputValue.value = parseInt(this.g);
        this.dom.bInputValue.value = parseInt(this.b);
    }

    eventHandler(e) {
        switch (e.detail.target) {
            case this.dom.transparency:
                this.a = 1 - e.detail.value /100;
                this.dom.aInputValue.value = parseInt(this.a * 100);
                break;

            case this.dom.hue:
                this._hsv.h = e.detail.value /100;
                this.rgb = this.HSVtoRGB(this._hsv.h, this._hsv.s, 1-this._hsv.v);
                break;

            case this.dom.satbright:
                this._hsv.s = e.detail.x / 100;
                this._hsv.v = e.detail.y / 100;
                this.rgb = this.HSVtoRGB(this._hsv.h, this._hsv.s, 1-this._hsv.v);
                break;
        }

    }

    /* accepts parameters
     * h  Object = {h:x, s:y, v:z}
     * OR
     * h, s, v
    */
    HSVtoRGB(H, S, V) {
        let R,G,B, var_h, var_i, var_1, var_2, var_3, var_r, var_g, var_b;
        if ( S === 0 ) {
            R = V * 255;
            G = V * 255;
            B = V * 255;
        } else {
            var_h = H * 6;
            if ( var_h === 6 ) { var_h = 0; }      //H must be < 1
            var_i = parseInt( var_h );            //Or ... var_i = floor( var_h )
            var_1 = V * ( 1 - S );
            var_2 = V * ( 1 - S * ( var_h - var_i ) );
            var_3 = V * ( 1 - S * ( 1 - ( var_h - var_i ) ) );

            if      ( var_i === 0 ) { var_r = V     ; var_g = var_3 ; var_b = var_1 }
            else if ( var_i === 1 ) { var_r = var_2 ; var_g = V     ; var_b = var_1 }
            else if ( var_i === 2 ) { var_r = var_1 ; var_g = V     ; var_b = var_3 }
            else if ( var_i === 3 ) { var_r = var_1 ; var_g = var_2 ; var_b = V     }
            else if ( var_i === 4 ) { var_r = var_3 ; var_g = var_1 ; var_b = V     }
            else                   { var_r = V     ; var_g = var_1 ; var_b = var_2 }

            R = var_r * 255;
            G = var_g * 255;
            B = var_b * 255;
        }
        return { r: R, g: G, b: B };
    }
}

if (!customElements.get('mm-color-picker')) {
    customElements.define('mm-color-picker', Reflect.attach(ColorPicker));
}
