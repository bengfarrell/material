export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
.spectrum--large .spectrum-ToggleSwitch {
  height: 40px;
  line-height: 40px;
}
/* generated from dna-version: 5.3.0 */
.spectrum--large .spectrum-ToggleSwitch-input:checked + .spectrum-ToggleSwitch-switch::after {
      transform: translateX(18px);
    }
.spectrum--large .spectrum-ToggleSwitch-label {
  margin: 0 13px;
  font-size: 17px;
  transition: color 160ms ease-in-out;
}
.spectrum--large .spectrum-ToggleSwitch-switch {

  height: 18px;
  width: 36px;
}
.spectrum--large .spectrum-ToggleSwitch-switch::before {
    transition: background 130ms ease-in-out, border 130ms ease-in-out;

    height: 18px;

    border-radius: 9px;
  }
.spectrum--large .spectrum-ToggleSwitch-switch::after {
    transition: background 130ms ease-in-out, border 130ms ease-in-out, transform 130ms ease-in-out, box-shadow 130ms ease-in-out;

    width: 18px;
    height: 18px;

    border-width: 2px;
    border-radius: 9px;
  }`;
    }
}