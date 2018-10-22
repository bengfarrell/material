import Button from '../../style/button/button.js';

export default {
    render() {
        return `${this.designSystem()}
                ${this.css()}
                ${this.html()}`;
    },

    html() {
        return `<button id="sphere" wire="click" class="button">Sphere</button>
                <button id="cube" wire="click" class="button">Cube</button>
                <button id="geodesic" wire="click" class="button">Geodesic</button>`
    },

    css() {
        return ``;
    },

    designSystem() {
        return `<style>${Button.css()}</style>`;
    }
}
