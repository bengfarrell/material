export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
/* generated from dna-version: 5.3.0 */
/* Temporary skin variables that need to be moved into origins */
:root {
  /* Icon Button*/

  /* Button */

  /* Shell */

  /* haha remove this */

  /* Custom selection color for placeholders using global blue-500 at 30% opacity. Should be updated in Spectrum-DNA */
}
.spectrum-Checkbox-label {
  color: rgb(180, 180, 180);
}
.spectrum-Checkbox-checkmark,
.spectrum-Checkbox-partialCheckmark {
  color: rgb(26, 26, 26);
}
.spectrum-Checkbox-box {
  border-color: rgb(105, 105, 105);
  background-color: rgb(26, 26, 26);
}
/* Indetermiate is basically a checked state, so handle colors for checked state here */
.spectrum-Checkbox.is-indeterminate .spectrum-Checkbox-box,
.spectrum-Checkbox-input:checked + .spectrum-Checkbox-box {
  border-color: rgb(38, 128, 235);
}
.spectrum-Checkbox:hover.is-indeterminate .spectrum-Checkbox-box,
  .spectrum-Checkbox:hover .spectrum-Checkbox-input:checked + .spectrum-Checkbox-box {
    border-color: rgb(55, 142, 240);

  }
.spectrum-Checkbox:active.is-indeterminate .spectrum-Checkbox-box,
  .spectrum-Checkbox:active .spectrum-Checkbox-input:checked + .spectrum-Checkbox-box {
    border-color: rgb(75, 156, 245);

  }
/* topdoc
{{ checkbox/checkbox.yml }}
*/
.spectrum-Checkbox {
  border-color: rgb(105, 105, 105);
}
.spectrum-Checkbox:hover .spectrum-Checkbox-box {
      border-color: rgb(135, 135, 135);

      box-shadow: none;
    }
.spectrum-Checkbox:hover .spectrum-Checkbox-label {
      color: rgb(226, 226, 226);
    }
.spectrum-Checkbox:active .spectrum-Checkbox-box {
      border-color: rgb(180, 180, 180);

    }
.spectrum-Checkbox:active .spectrum-Checkbox-label {
      color: rgb(226, 226, 226);
    }
.spectrum-Checkbox-input:disabled + .spectrum-Checkbox-box {
    /* Use important to override hover states */
    border-color: rgb(60, 60, 60) !important;

    background-color: rgb(26, 26, 26);
  }
.spectrum-Checkbox-input:disabled ~ .spectrum-Checkbox-label {
    color: rgb(73, 73, 73);
  }
/* Focus */
.spectrum-Checkbox-input.focus-ring + .spectrum-Checkbox-box {
    /* Since the specificity of .focus-ring is less than :hover, we need important */
    border-color: rgb(20, 115, 230) !important;

    box-shadow: 0 0 0 1px rgb(20, 115, 230) !important;
  }
.spectrum-Checkbox-input.focus-ring ~ .spectrum-Checkbox-label {
    color: rgb(55, 142, 240) !important;
  }
/* topdoc
{{ checkbox/checkbox-quiet.yml }}
*/
.spectrum-Checkbox--quiet.is-indeterminate .spectrum-Checkbox-box,
  .spectrum-Checkbox--quiet .spectrum-Checkbox-input:checked + .spectrum-Checkbox-box {
  border-color: rgb(135, 135, 135);
}
.spectrum-Checkbox--quiet:hover.is-indeterminate .spectrum-Checkbox-box,
  .spectrum-Checkbox--quiet:hover .spectrum-Checkbox-input:checked + .spectrum-Checkbox-box {
    border-color: rgb(180, 180, 180);
  }
.spectrum-Checkbox--quiet:active.is-indeterminate .spectrum-Checkbox-box,
  .spectrum-Checkbox--quiet:active .spectrum-Checkbox-input:checked + .spectrum-Checkbox-box {
    border-color: rgb(226, 226, 226);
  }
/* Extra-specific selectors added here to handle checked state */
.spectrum-Checkbox.is-invalid .spectrum-Checkbox-input:checked + .spectrum-Checkbox-box,
  .spectrum-Checkbox.is-invalid .spectrum-Checkbox-box {
    border-color: rgb(227, 72, 80);
  }
.spectrum-Checkbox.is-invalid .spectrum-Checkbox-label {
    color: rgb(236, 91, 98);
  }
.spectrum-Checkbox.is-invalid:hover .spectrum-Checkbox-input:checked + .spectrum-Checkbox-box,
    .spectrum-Checkbox.is-invalid:hover .spectrum-Checkbox-box {
      border-color: rgb(236, 91, 98);
    }
.spectrum-Checkbox.is-invalid:hover .spectrum-Checkbox-label {
      color: rgb(247, 109, 116);
    }
.spectrum-Checkbox.is-invalid:active .spectrum-Checkbox-input:checked + .spectrum-Checkbox-box,
    .spectrum-Checkbox.is-invalid:active .spectrum-Checkbox-box {
      border-color: rgb(247, 109, 116);
    }
.spectrum-Checkbox.is-invalid:active .spectrum-Checkbox-label {
      color: rgb(247, 109, 116);
    }`;
    }
}