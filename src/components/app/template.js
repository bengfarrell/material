import ObjectMenu from '../objectmenu/objectmenu.js';
import BottomTray from '../bottomtray/bottomtray.js';
import Scene from '../scene/scene.js';

export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    html() {
        return `<mm-scene></mm-scene>
                <mm-bottom-tray></mm-bottom-tray>
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
