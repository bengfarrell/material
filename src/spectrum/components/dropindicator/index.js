export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
/* generated from dna-version: 5.3.0 */
/* topdoc
{{ dropindicator/dropindicator.yml }}
*/
.spectrum-DropIndicator {
  position: relative;
}
.spectrum-DropIndicator:before,
  .spectrum-DropIndicator:after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid;
    box-sizing: border-box;
  }
.spectrum-DropIndicator--horizontal {
  height: 2px;
  margin: 0 12px;
}
.spectrum-DropIndicator--horizontal:before,
  .spectrum-DropIndicator--horizontal:after {
    top: -5px;
  }
.spectrum-DropIndicator--horizontal:before {
    left: -12px;
  }
.spectrum-DropIndicator--horizontal:after {
    right: -12px;
  }
.spectrum-DropIndicator--vertical {
  width: 2px;
  margin: 12px 0;
}
.spectrum-DropIndicator--vertical:before,
  .spectrum-DropIndicator--vertical:after {
    left: -5px;
  }
.spectrum-DropIndicator--vertical:before {
    top: -12px;
  }
.spectrum-DropIndicator--vertical:after {
    bottom: -12px;
  }`;
    }
}