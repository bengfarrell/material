export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
/* generated from dna-version: 5.3.0 */
/* topdoc
{{ toggle/toggle-onoffdefault.yml }}
*/
.spectrum-ToggleSwitch {
  display: inline-block;
  position: relative;
  font-size: 0;
  height: 32px;
  line-height: 32px;
}
.spectrum-ToggleSwitch-input {
  /* Change the font styles in all browsers for input. */
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;

  /* Remove the margin for input in Firefox and Safari. */
  margin: 0;

  /* Show the overflow for input in Edge. */
  overflow: visible;

  /* Add the correct box sizing for [type="checkbox"] in IE 10-. */
  box-sizing: border-box;

  /* Remove the padding for [type="checkbox"] in IE 10-. */
  padding: 0;

  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: .0001;
  z-index: 1;

  cursor: pointer;
}
.spectrum-ToggleSwitch-input:checked + .spectrum-ToggleSwitch-switch::after {
      transform: translateX(12px);
    }
.spectrum-ToggleSwitch-input:disabled,
  .spectrum-ToggleSwitch-input[disabled] {
    cursor: default;
  }
.spectrum-ToggleSwitch-label {
  margin: 0 10px;
  font-size: 14px;
  vertical-align: middle;
  transition: color 160ms ease-in-out;
}
.spectrum-ToggleSwitch-switch {
  display: inline-block;
  /* positions the pseudo elements relative to this one */
  position: relative;

  height: 14px;
  width: 26px;

  vertical-align: middle;
}
.spectrum-ToggleSwitch-switch::before,
  .spectrum-ToggleSwitch-switch::after {
    display: block;
    position: absolute;
    content: "";
    box-sizing: border-box;
  }
/* ::before is used for the track of the switch */
.spectrum-ToggleSwitch-switch::before {
    transition: background 130ms ease-in-out, border 130ms ease-in-out;

    height: 14px;

    left: 0;
    right: 0;

    border-radius: 7px;
  }
/* ::after is used for the handle of the switch */
.spectrum-ToggleSwitch-switch::after {
    transition: background 130ms ease-in-out, border 130ms ease-in-out, transform 130ms ease-in-out, box-shadow 130ms ease-in-out;

    width: 14px;
    height: 14px;

    top: 0;
    left: 0;

    border-width: 2px;
    border-radius: 7px;
    border-style: solid;
  }
/* topdoc
{{ toggle/toggle-abdefault.yml }}
*/`;
    }
}