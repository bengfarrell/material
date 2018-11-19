import Color from "./color.js";

export default {
    get attributes() {
        return {
            hue: 'value',
            transparency: 'value',
            satbright: [ 'x', 'y' ],
            textInputR: 'value',
            textInputB: 'value',
            textInputG: 'value',
            textInputA: 'value',
            textInputHex: 'value',
        }
    },

    isfromUIEntry(mapping) {
        return !mapping || ['hue', 'transparency', 'satbright', 'initial'].indexOf(mapping) !== -1;
    },

    isfromTextEntry(mapping) {
        return ['textInputR', 'textInputG', 'textInputB', 'textInputA'].indexOf(mapping) !== -1;
    },

    isfromHexEntry(mapping) {
        return ['textInputR', 'textInputHex'].indexOf(mapping) !== -1;
    },

    handle(model, detail) {
        if (this.isfromUIEntry(detail.targetMapping)) {
            return this.handleUIState(model, detail);
        }

        if (this.isfromTextEntry(detail.targetMapping)) {
            return this.handleTextEntryState(model, detail);
        }

        if (this.isfromHexEntry(detail.targetMapping)) {
            return this.handleHexEntryState(model, detail);
        }
        return model;
    },

    handleUIState(model, detail) {
        if (detail.value) {
            model[detail.targetMapping][detail.attributeName] = detail.value;
        }

        //recalc & update
        const color = {
            hue: model.hue.value / 100,
            transparency: 100 - parseInt(model.transparency.value),
            saturation: model.satbright.x / 100,
            brightness: model.satbright.y / 100
        };

        detail.dom.satbright.backgroundColor = Color.RGBtoHex(Color.HSVtoRGB(color.hue, 1, 1));
        detail.dom.transparency.backgroundColor = Color.RGBtoHex(Color.HSVtoRGB(color.hue, 1, 1));

        color.rgb = Color.HSVtoRGB(color.hue, color.saturation, color.brightness);
        color.hex = Color.RGBtoHex(color.rgb);
        model.color = color;

        detail.dom.textInputHex.value = color.hex;
        detail.dom.textInputR.value = color.rgb.r;
        detail.dom.textInputG.value = color.rgb.g;
        detail.dom.textInputB.value = color.rgb.b;
        detail.dom.textInputA.value = color.transparency;
        return model;
    },

    handleTextEntryState(model, detail) {
        const color = {
            rgb: {
                r: detail.dom.textInputR.value,
                g: detail.dom.textInputG.value,
                b: detail.dom.textInputB.value,
            }
        };

        const hsv = Color.RGBtoHSV(color.rgb.r, color.rgb.g, color.rgb.b);
        detail.dom.hue.value = hsv.h * 100;
        detail.dom.satbright.x = hsv.s * 100;
        detail.dom.satbright.y = hsv.v * 100;

        return model;

    },

    handleHexEntryState(model, detail) {
        const hex = detail.dom.textInputHex.value;
        const color = {
            rgb: Color.hexToRGB(hex)
        };
        console.log(color)

        detail.dom.textInputR.value = color.rgb.r;
        detail.dom.textInputG.value = color.rgb.g;
        detail.dom.textInputB.value = color.rgb.b;

        const hsv = Color.RGBtoHSV(color.rgb.r, color.rgb.g, color.rgb.b);
        detail.dom.hue.value = hsv.h * 100;
        detail.dom.satbright.x = hsv.s * 100;
        detail.dom.satbright.y = hsv.v * 100;

        return model;

    }


}
