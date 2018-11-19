import Button from '../../style/button/button.js';
import SpectrumCore from '../../spectrum/spectrum-core.js';
import SpectrumLight from '../../spectrum/spectrum-light.js';
import SpectrumButton from '../../spectrum/components/button/index.js';

export default {
    render() {
        return `${this.designSystem()}
                ${this.css()}
                ${this.html()}`;
    },

    html() {
        return `<button id="sphere" wire="click" class="button spectrum-ActionButton">Sphere</button>
                <button id="cube" wire="click" class="button spectrum-Button">Cube</button>
                <button id="geodesic" wire="click" class="button spectrum-Button">Geodesic</button>`
    },

    css() {
        return ``;
    },

    designSystem() {
        return `<style>
                    ${SpectrumCore.css()}
                    ${SpectrumLight.css()}
                    ${SpectrumButton.css()}
                </style>`;
    }
}
