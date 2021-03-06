export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
.spectrum--large .spectrum-Radio {

  height: 40px;

  margin-right: 20px;
}
/* generated from dna-version: 5.3.0 */
.spectrum--large .spectrum-Radio-input {
  left: -10px;
  width: calc(100% + 20px);
}
.spectrum--large .spectrum-Radio-input:checked + .spectrum-Radio-button {
    border-width: 7px;
  }
.spectrum--large .spectrum-Radio-label {
  margin-left: 13px;
  font-size: 17px;

  transition: color 130ms ease-in-out;
}
.spectrum--large .spectrum-Radio-button {
  width: 18px;
  height: 18px;

  border-radius: 9px;
  border-width: 2px;

  transition: border 130ms ease-in-out, box-shadow 130ms ease-in-out;
}
.spectrum--large .spectrum-Radio--labelBelow {
  height: auto;
}
.spectrum--large .spectrum-Radio--labelBelow .spectrum-Radio-label {
    margin: 4px 0 0 0;
  }`;
    }
}