import Navbar from "../../style/navbar/navbar.js";

export default {
    render(items) {
        return `${this.designSystem()}
                ${this.css()}
                ${this.html(items)}`;
    },

    html(items) {
        return `<div class="navbar">${this.renderMenuItems(items)}</div>`;
    },

    renderMenuItems(items) {
        let html = ``;
        for (let c = 0; c < items.length; c++) {
            html += `<span class="navbar-item"><div class="color-swatch"></div> ${items[c].trim()}</span>`;
        }
        return html;
    },

    css() {
        return `<style>
                    :host {
                        display: flex;
                        width: 100%;
                    }
                    
                    .navbar-item {
                        vertical-align: middle;
                    }
                    
                    .color-swatch {
                        width: 25px;
                        height: 25px;
                        border-radius: 25px;
                        background-color: aquamarine;
                        display: inline-block;
                        vertical-align: middle;
                        border-style: solid;
                        border-width: 1px;
                        border-color: rgb(235,235,235);
                    }
                    
                    .header-item {
                        width: 100px;
                    }
                </style>`;
    },

    designSystem() {
        return `<style>
                    ${Navbar.css()}
                </style>`;
    }
}
