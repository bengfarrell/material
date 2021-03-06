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
  color: rgb(205, 205, 205);
}
.spectrum-Checkbox-checkmark,
.spectrum-Checkbox-partialCheckmark {
  color: rgb(47, 47, 47);
}
.spectrum-Checkbox-box {
  border-color: rgb(123, 123, 123);
  background-color: rgb(47, 47, 47);
}
/* Indetermiate is basically a checked state, so handle colors for checked state here */
.spectrum-Checkbox.is-indeterminate .spectrum-Checkbox-box,
.spectrum-Checkbox-input:checked + .spectrum-Checkbox-box {
  border-color: rgb(55, 142, 240);
}
.spectrum-Checkbox:hover.is-indeterminate .spectrum-Checkbox-box,
  .spectrum-Checkbox:hover .spectrum-Checkbox-input:checked + .spectrum-Checkbox-box {
    border-color: rgb(75, 156, 245);

  }
.spectrum-Checkbox:active.is-indeterminate .spectrum-Checkbox-box,
  .spectrum-Checkbox:active .spectrum-Checkbox-input:checked + .spectrum-Checkbox-box {
    border-color: rgb(90, 169, 250);

  }
/* topdoc
{{ checkbox/checkbox.yml }}
*/
.spectrum-Checkbox {
  border-color: rgb(123, 123, 123);
}
.spectrum-Checkbox:hover .spectrum-Checkbox-box {
      border-color: rgb(157, 157, 157);

      box-shadow: none;
    }
.spectrum-Checkbox:hover .spectrum-Checkbox-label {
      color: rgb(255, 255, 255);
    }
.spectrum-Checkbox:active .spectrum-Checkbox-box {
      border-color: rgb(205, 205, 205);

    }
.spectrum-Checkbox:active .spectrum-Checkbox-label {
      color: rgb(255, 255, 255);
    }
.spectrum-Checkbox-input:disabled + .spectrum-Checkbox-box {
    /* Use important to override hover states */
    border-color: rgb(77, 77, 77) !important;

    background-color: rgb(47, 47, 47);
  }
.spectrum-Checkbox-input:disabled ~ .spectrum-Checkbox-label {
    color: rgb(92, 92, 92);
  }
/* Focus */
.spectrum-Checkbox-input.focus-ring + .spectrum-Checkbox-box {
    /* Since the specificity of .focus-ring is less than :hover, we need important */
    border-color: rgb(38, 128, 235) !important;

    box-shadow: 0 0 0 1px rgb(38, 128, 235) !important;
  }
.spectrum-Checkbox-input.focus-ring ~ .spectrum-Checkbox-label {
    color: rgb(75, 156, 245) !important;
  }
/* topdoc
{{ checkbox/checkbox-quiet.yml }}
*/
.spectrum-Checkbox--quiet.is-indeterminate .spectrum-Checkbox-box,
  .spectrum-Checkbox--quiet .spectrum-Checkbox-input:checked + .spectrum-Checkbox-box {
  border-color: rgb(157, 157, 157);
}
.spectrum-Checkbox--quiet:hover.is-indeterminate .spectrum-Checkbox-box,
  .spectrum-Checkbox--quiet:hover .spectrum-Checkbox-input:checked + .spectrum-Checkbox-box {
    border-color: rgb(205, 205, 205);
  }
.spectrum-Checkbox--quiet:active.is-indeterminate .spectrum-Checkbox-box,
  .spectrum-Checkbox--quiet:active .spectrum-Checkbox-input:checked + .spectrum-Checkbox-box {
    border-color: rgb(255, 255, 255);
  }
/* Extra-specific selectors added here to handle checked state */
.spectrum-Checkbox.is-invalid .spectrum-Checkbox-input:checked + .spectrum-Checkbox-box,
  .spectrum-Checkbox.is-invalid .spectrum-Checkbox-box {
    border-color: rgb(236, 91, 98);
  }
.spectrum-Checkbox.is-invalid .spectrum-Checkbox-label {
    color: rgb(247, 109, 116);
  }
.spectrum-Checkbox.is-invalid:hover .spectrum-Checkbox-input:checked + .spectrum-Checkbox-box,
    .spectrum-Checkbox.is-invalid:hover .spectrum-Checkbox-box {
      border-color: rgb(247, 109, 116);
    }
.spectrum-Checkbox.is-invalid:hover .spectrum-Checkbox-label {
      color: rgb(255, 123, 130);
    }
.spectrum-Checkbox.is-invalid:active .spectrum-Checkbox-input:checked + .spectrum-Checkbox-box,
    .spectrum-Checkbox.is-invalid:active .spectrum-Checkbox-box {
      border-color: rgb(255, 123, 130);
    }
.spectrum-Checkbox.is-invalid:active .spectrum-Checkbox-label {
      color: rgb(255, 123, 130);
    }`;
    }
}