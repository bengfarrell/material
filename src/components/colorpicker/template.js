import Slider from '../slider/slider.js';
import CoordinatePicker from '../coordinatepicker/coordinatepicker.js';

export default {
    render() {
        return `${this.designSystem()}
                ${this.css()}
                ${this.html()}`;
    },

    html() {
        return `
                <div id="left-container">
                    <mm-slider wire="change" map="hue" id="hue-slider" value="50"></mm-slider>
                    <mm-slider wire="change" map="transparency" id="transparency-slider"></mm-slider>
                </div>
                <div class="spacer"></div>
                <mm-coord-picker wire="change" map="satbright" id="saturation-brightness"></mm-coord-picker>
                <div class="spacer"></div>
                <div id="text-inputs">
                    <label><span>R:</span><input map="rInputValue" type="number" value="0"></label>
                    <label><span>G:</span><input map="gInputValue" type="number" value="0"></label>
                    <label><span>B:</span><input map="bInputValue" type="number" value="0"></label>
                    <label><span>A:</span><input map="aInputValue" type="number" value="0"></label>
                </div>`
    },

    css() {
        return `<style>
                    :host {
                        display: flex;
                        width: 100%;
                    }
                    
                    .spacer {
                        width: 15px;
                    }
                    
                    #text-inputs {
                        width: 75px;
                    }
                    
                    #text-inputs label:not(:last-child) {
                        display: block;
                        padding-bottom: 4px;
                    }
                    
                    #text-inputs label span {
                        width: 25px;
                        display: inline-block;
                    }
                    
                    #text-inputs input {
                        display: inline-block;
                        width: 35px;
                    }
                    
                    #left-container {
                        flex: 1;
                    }
    
                    #hue-slider, #transparency-slider {
                        width: 100%;
                        height: 40px;
                        border-radius: 10px;
                    }
                    
                    #saturation-brightness {
                        width: 85px;
                        height: 85px;
                        border-radius: 10px;
                    }
                    
                    #hue-slider {
                        background: linear-gradient(to right, red 0%, #ff0 17%, lime 33%, cyan 50%, blue 66%, #f0f 83%, red 100%);
                    }
                    
                    #transparency-slider {
                        background-image: linear-gradient(45deg, #ccc 25%, transparent 25%),linear-gradient(-45deg, #ccc 25%, transparent 25%),linear-gradient(45deg, transparent 75%, #ccc 75%),linear-gradient(-45deg, transparent 75%, #ccc 75%);
                        background-size: 16px 16px;
                        background-position: 0 0, 0 8px, 8px -8px, -8px 0px;
                    }
                </style>`;
    },

    designSystem() {
        return ``;
    }
}
