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
.spectrum--darkest .spectrum-Radio .spectrum-Radio-input:checked + .spectrum-Radio-button {
    border-color: rgb(38, 128, 235);
  }
.spectrum--darkest .spectrum-Radio-label {
  color: rgb(180, 180, 180);
}
.spectrum--darkest .spectrum-Radio-button {
  background-color: rgb(26, 26, 26);
  border-color: rgb(105, 105, 105);
}
/* topdoc
{{ radio/radio.yml }}
*/
.spectrum--darkest .spectrum-Radio:hover .spectrum-Radio-button {
      border-color: rgb(135, 135, 135);
      box-shadow: none;
    }
.spectrum--darkest .spectrum-Radio:hover .spectrum-Radio-input:checked + .spectrum-Radio-button {
      border-color: rgb(55, 142, 240);

    }
.spectrum--darkest .spectrum-Radio:hover .spectrum-Radio-label {
      color: rgb(226, 226, 226);
    }
.spectrum--darkest .spectrum-Radio:active .spectrum-Radio-button {
      border-color: rgb(180, 180, 180);
    }
.spectrum--darkest .spectrum-Radio:active .spectrum-Radio-input:checked + .spectrum-Radio-button {
      border-color: rgb(75, 156, 245);

    }
.spectrum--darkest .spectrum-Radio:active .spectrum-Radio-label {
      color: rgb(226, 226, 226);
    }
.spectrum--darkest .spectrum-Radio--quiet .spectrum-Radio-input:checked + .spectrum-Radio-button {
    border-color: rgb(135, 135, 135);
  }
.spectrum--darkest .spectrum-Radio--quiet:hover .spectrum-Radio-input:checked + .spectrum-Radio-button {
      border-color: rgb(180, 180, 180);
    }
.spectrum--darkest .spectrum-Radio--quiet:active .spectrum-Radio-input:checked + .spectrum-Radio-button {
      border-color: rgb(226, 226, 226);
    }
.spectrum--darkest .spectrum-Radio.is-invalid:hover .spectrum-Radio-input + .spectrum-Radio-button, .spectrum--darkest .spectrum-Radio--quiet.is-invalid:hover .spectrum-Radio-input + .spectrum-Radio-button {
      border-color: rgb(236, 91, 98);
    }
.spectrum--darkest .spectrum-Radio.is-invalid:hover .spectrum-Radio-label, .spectrum--darkest .spectrum-Radio--quiet.is-invalid:hover .spectrum-Radio-label {
      color: rgb(236, 91, 98);
    }
.spectrum--darkest .spectrum-Radio.is-invalid:active .spectrum-Radio-input + .spectrum-Radio-button, .spectrum--darkest .spectrum-Radio--quiet.is-invalid:active .spectrum-Radio-input + .spectrum-Radio-button {
      border-color: rgb(247, 109, 116);
    }
.spectrum--darkest .spectrum-Radio.is-invalid:active .spectrum-Radio-label, .spectrum--darkest .spectrum-Radio--quiet.is-invalid:active .spectrum-Radio-label {
      color: rgb(247, 109, 116);
    }
.spectrum--darkest .spectrum-Radio.is-invalid .spectrum-Radio-button, .spectrum--darkest .spectrum-Radio.is-invalid .spectrum-Radio-input:checked + .spectrum-Radio-button, .spectrum--darkest .spectrum-Radio--quiet.is-invalid .spectrum-Radio-button, .spectrum--darkest .spectrum-Radio--quiet.is-invalid .spectrum-Radio-input:checked + .spectrum-Radio-button {
      border-color: rgb(227, 72, 80);
    }
.spectrum--darkest .spectrum-Radio.is-invalid .spectrum-Radio-label, .spectrum--darkest .spectrum-Radio--quiet.is-invalid .spectrum-Radio-label {
      color: rgb(227, 72, 80);
    }
.spectrum--darkest .spectrum-Radio-input:disabled + .spectrum-Radio-button {
    border-color: rgb(60, 60, 60) !important;
  }
.spectrum--darkest .spectrum-Radio-input:disabled ~ .spectrum-Radio-label {
    color: rgb(73, 73, 73) !important;
  }
/* Focus Overrides all */
.spectrum--darkest .spectrum-Radio .spectrum-Radio-input.focus-ring + .spectrum-Radio-button, .spectrum--darkest .spectrum-Radio:hover .spectrum-Radio-input.focus-ring + .spectrum-Radio-button, .spectrum--darkest .spectrum-Radio--quiet .spectrum-Radio-input.focus-ring + .spectrum-Radio-button, .spectrum--darkest .spectrum-Radio--quiet:hover .spectrum-Radio-input.focus-ring + .spectrum-Radio-button {
      border-color: rgb(20, 115, 230);
      box-shadow: 0 0 0 1px rgb(20, 115, 230);
    }
.spectrum--darkest .spectrum-Radio .spectrum-Radio-input.focus-ring ~ .spectrum-Radio-label, .spectrum--darkest .spectrum-Radio:hover .spectrum-Radio-input.focus-ring ~ .spectrum-Radio-label, .spectrum--darkest .spectrum-Radio--quiet .spectrum-Radio-input.focus-ring ~ .spectrum-Radio-label, .spectrum--darkest .spectrum-Radio--quiet:hover .spectrum-Radio-input.focus-ring ~ .spectrum-Radio-label {
      color: rgb(55, 142, 240);
    }
.spectrum--darkest .spectrum-Radio.is-invalid .spectrum-Radio-input:checked.focus-ring + .spectrum-Radio-button, .spectrum--darkest .spectrum-Radio--quiet.is-invalid .spectrum-Radio-input:checked.focus-ring + .spectrum-Radio-button {
      border-color: rgb(20, 115, 230);
      box-shadow: 0 0 0 1px rgb(20, 115, 230);
    }`;
    }
}