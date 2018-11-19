import SpectrumCore from '../../spectrum/spectrum-core.js';
import SpectrumLight from '../../spectrum/spectrum-light.js';
import SpectrumTabs from '../../spectrum/components/tabs/index.js';

export default {
    render(items) {
        return `${this.designSystem()}
                ${this.css()}
                ${this.html(items)}`;
    },

    html(items) {
        return `<div class="spectrum spectrum--light spectrum--medium">
                    <div class="spectrum-Tabs spectrum-Tabs--horizontal">
                      ${this.renderMenuItems(items)}
                      <div class="spectrum-Tabs-selectionIndicator" style="width: 27px; left: 0px;"></div>
                    </div>
                </div>`;
    },

    renderMenuItems(items) {
        let html = ``;
        for (let c = 0; c < items.length; c++) {
            html += `<div wire="click" map="${items[c].trim()}" class="spectrum-Tabs-item" tabindex="0">
                        <label class="spectrum-Tabs-itemLabel"><div class="color-swatch"></div>${items[c].trim()}</label>
                      </div>`
        }
        return html;
    },

    css() {
        return `<style>
                    :host {
                        display: flex;
                        width: 100%;
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
                    ${SpectrumCore.css()}
                    ${SpectrumLight.css()}
                    ${SpectrumTabs.css()}
                </style>`;
    }
}
