import ObjectMenu from '../objectmenu/objectmenu.js';
import MaterialColorPicker from '../materialcolorpicker/materialcolorpicker.js';
import Scene from '../scene/scene.js';

export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    html() {
        return `<mm-scene></mm-scene>
                <mm-mat-colorpicker diffuse="#ff0000" specular="#ff0000" highlight="#ff0000"></mm-mat-colorpicker>
                <div id="controls">
                  <mm-object-menu></mm-object-menu>
                </div>`
    },

    css() {
        return `<style>
                    :host {
                        display: inline-block;
                    }
                    
                    mm-scene, #controls {
                        position: absolute;
                        width: 100%;
                    }
                </style>`;
    }
}
