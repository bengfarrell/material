import ColorPicker from '../colorpicker/colorpicker.js';
import Navbar from '../navbar/navbar.js';

export default {
    render() {
        return `${this.designSystem()}
                ${this.css()}
                ${this.html()}`;
    },

    html() {
        return `<mm-navbar items="Diffuse, Specular, Highlight"></mm-navbar>
                <mm-color-picker></mm-color-picker>`;
    },

    css() {
        return `<style>
                    :host {
                        background-color: white;
                        display: inline-block;
                        position: absolute;
                        bottom: 0;
                        left: 15px;
                        right: 15px;
                        padding: 20px;
                    }
                </style>`;
    },

    designSystem() {
        return ``;
    }
}
