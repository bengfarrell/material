export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
/* generated from dna-version: 5.3.0 */
.spectrum-Checkbox {
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-align: center;
      align-items: center;

  position: relative;

  height: 32px;
  max-width: 100%;

  margin-right: 16px;

  vertical-align: top;
}
.spectrum-Checkbox-input {
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

  /* Hit area */
  position: absolute;
  top: 0;
  left: -8px;
  width: calc(100% + 16px);;
  height: 100%;

  opacity: .0001;
  z-index: 1;

  cursor: pointer;
}
.spectrum-Checkbox-input:disabled {
    cursor: default;
  }
.spectrum-Checkbox-input:checked + .spectrum-Checkbox-box {
    border-width: 7px;
  }
.spectrum-Checkbox-input:checked + .spectrum-Checkbox-box .spectrum-Checkbox-checkmark {
      transform: scale(1);
      opacity: 1;
    }
.spectrum-Checkbox.is-indeterminate .spectrum-Checkbox-box,
  .spectrum-Checkbox.is-indeterminate .spectrum-Checkbox-input:checked + .spectrum-Checkbox-box {
    border-width: 7px;
  }
.spectrum-Checkbox.is-indeterminate .spectrum-Checkbox-box .spectrum-Checkbox-checkmark, .spectrum-Checkbox.is-indeterminate .spectrum-Checkbox-input:checked + .spectrum-Checkbox-box .spectrum-Checkbox-checkmark {
      display: none;
    }
.spectrum-Checkbox.is-indeterminate .spectrum-Checkbox-box .spectrum-Checkbox-partialCheckmark, .spectrum-Checkbox.is-indeterminate .spectrum-Checkbox-input:checked + .spectrum-Checkbox-box .spectrum-Checkbox-partialCheckmark {
      display: block;

      transform: scale(1);
      opacity: 1;
    }
.spectrum-Checkbox-label {
  margin-left: 10px;
  font-size: 14px;
  font-weight: 400;
  transition: color 130ms ease-in-out;

  white-space: nowrap;

  overflow: hidden;
  text-overflow: ellipsis;
}
.spectrum-Checkbox-box {
  position: relative;
  box-sizing: border-box;
  width: 14px;
  height: 14px;

  -ms-flex-positive: 0;

      flex-grow: 0;
  -ms-flex-negative: 0;
      flex-shrink: 0;

  border-radius: 2px;
  border-width: 2px;
  border-style: solid;

  transition: border 130ms ease-in-out, box-shadow 130ms ease-in-out;
}
.spectrum-Checkbox-checkmark,
.spectrum-Checkbox-partialCheckmark {
  position: absolute;
  top: 50%;
  left: 50%;

  margin-top: -5px;
  margin-left: -5px;

  opacity: 0;
  transform: scale(0);

  transition: opacity 130ms ease-in-out, transform 130ms ease-in-out;
}
.spectrum-Checkbox-partialCheckmark {
  display: none;
}`;
    }
}