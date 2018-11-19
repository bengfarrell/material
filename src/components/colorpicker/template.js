import Slider from '../slider/slider.js';
import CoordinatePicker from '../coordinatepicker/coordinatepicker.js';
import Color from './color.js';

import SpectrumCore from '../../spectrum/spectrum-core.js';
import SpectrumLight from '../../spectrum/spectrum-light.js';
import SpectrumTextField from '../../spectrum/components/textfield/index.js';

export default {
    render() {
        return `${this.designSystem()}
                ${this.css()}
                ${this.html()}`;
    },

    html() {
        return `<div id="container" class="spectrum spectrum--light spectrum--medium">  
                    <div class="row">
                        <div id="slider-container">
                            <mm-slider map="hue" id="hue-slider" value="50"></mm-slider>
                            <mm-slider map="transparency" id="transparency-slider" value="0"></mm-slider>
                        </div>
                        
                        <mm-coord-picker x="50" y="50" map="satbright" id="saturation-brightness"></mm-coord-picker>
                    </div>
   
                    <div class="row">
                        
                        <div id="text-inputs">
                            <div class="spectrum-DecoratedTextfield is-decorated">
                              <label for="textInputR" class="spectrum-FieldLabel">Red</label>
                              <input id="textInputR" map="textInputR" type="number" value="0" max="255" min="0" class="spectrum-Textfield spectrum-DecoratedTextfield-field" aria-invalid="false">
                            </div>
                            
                            <div class="spectrum-DecoratedTextfield is-decorated">
                              <label for="textInputG" class="spectrum-FieldLabel">Green</label>
                              <input id="textInputG" map="textInputG" type="number" value="0" max="255" min="0" class="spectrum-Textfield spectrum-DecoratedTextfield-field" aria-invalid="false">
                            </div>
                            
                            <div class="spectrum-DecoratedTextfield is-decorated">
                              <label for="textInputB" class="spectrum-FieldLabel">Blue</label>
                              <input id="textInputB" map="textInputB" type="number" value="0" max="255" min="0" class="spectrum-Textfield spectrum-DecoratedTextfield-field" aria-invalid="false">
                            </div>
                            
                            <div class="spectrum-DecoratedTextfield is-decorated">
                              <label for="textInputA" class="spectrum-FieldLabel">Alpha</label>
                              <input id="textInputA" map="textInputA" type="number" value="0" max="255" min="0" class="spectrum-Textfield spectrum-DecoratedTextfield-field" aria-invalid="false">
                            </div>
                            
                            <div class="spectrum-DecoratedTextfield is-decorated">
                              <label for="textInputHex" class="spectrum-FieldLabel">Hex</label>
                              <input id="textInputHex" map="textInputHex" type="text" class="spectrum-Textfield spectrum-DecoratedTextfield-field" aria-invalid="false">
                            </div>
                        </div>
                        
 
                    </div>

                  
                </div>`
    },

    css() {
        return `<style>
                    :host {
                        width: 100%;
                    }
                    
                    #container {
                        padding: 10px;
                    }
                    
                    #text-inputs {
                        display: flex;
                        width: 100%;
                        justify-content: center;
                    }
                    
                    .row {
                        display: flex;
                    }
           
                    #slider-container {
                        flex: 1;
                        padding-right: 10px;
                    }
                   
                    input.spectrum-Textfield {
                        width: 72px;
                    }
                    
                     input#textInputHex.spectrum-Textfield {
                        width: 85px;
                     }
                
                    #hue-slider, #transparency-slider {
                        width: 100%;
                        height: 40px;
                        margin-bottom: 5px;
                        border-radius: 10px;
                    }
                    
                    #saturation-brightness {
                        width: 90px;
                        height: 90px;
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
        return `<style>
                    ${SpectrumCore.css()}
                    ${SpectrumLight.css()}
                    ${SpectrumTextField.css()}
                </style>`;
    }
}
