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
.spectrum--light .spectrum-Radio .spectrum-Radio-input:checked + .spectrum-Radio-button {
    border-color: rgb(20, 115, 230);
  }
.spectrum--light .spectrum-Radio-label {
  color: rgb(75, 75, 75);
}
.spectrum--light .spectrum-Radio-button {
  background-color: rgb(250, 250, 250);
  border-color: rgb(142, 142, 142);
}
/* topdoc
{{ radio/radio.yml }}
*/
.spectrum--light .spectrum-Radio:hover .spectrum-Radio-button {
      border-color: rgb(110, 110, 110);
      box-shadow: none;
    }
.spectrum--light .spectrum-Radio:hover .spectrum-Radio-input:checked + .spectrum-Radio-button {
      border-color: rgb(13, 102, 208);

    }
.spectrum--light .spectrum-Radio:hover .spectrum-Radio-label {
      color: rgb(44, 44, 44);
    }
.spectrum--light .spectrum-Radio:active .spectrum-Radio-button {
      border-color: rgb(75, 75, 75);
    }
.spectrum--light .spectrum-Radio:active .spectrum-Radio-input:checked + .spectrum-Radio-button {
      border-color: rgb(9, 90, 186);

    }
.spectrum--light .spectrum-Radio:active .spectrum-Radio-label {
      color: rgb(44, 44, 44);
    }
.spectrum--light .spectrum-Radio--quiet .spectrum-Radio-input:checked + .spectrum-Radio-button {
    border-color: rgb(110, 110, 110);
  }
.spectrum--light .spectrum-Radio--quiet:hover .spectrum-Radio-input:checked + .spectrum-Radio-button {
      border-color: rgb(75, 75, 75);
    }
.spectrum--light .spectrum-Radio--quiet:active .spectrum-Radio-input:checked + .spectrum-Radio-button {
      border-color: rgb(44, 44, 44);
    }
.spectrum--light .spectrum-Radio.is-invalid:hover .spectrum-Radio-input + .spectrum-Radio-button, .spectrum--light .spectrum-Radio--quiet.is-invalid:hover .spectrum-Radio-input + .spectrum-Radio-button {
      border-color: rgb(201, 37, 45);
    }
.spectrum--light .spectrum-Radio.is-invalid:hover .spectrum-Radio-label, .spectrum--light .spectrum-Radio--quiet.is-invalid:hover .spectrum-Radio-label {
      color: rgb(201, 37, 45);
    }
.spectrum--light .spectrum-Radio.is-invalid:active .spectrum-Radio-input + .spectrum-Radio-button, .spectrum--light .spectrum-Radio--quiet.is-invalid:active .spectrum-Radio-input + .spectrum-Radio-button {
      border-color: rgb(187, 18, 26);
    }
.spectrum--light .spectrum-Radio.is-invalid:active .spectrum-Radio-label, .spectrum--light .spectrum-Radio--quiet.is-invalid:active .spectrum-Radio-label {
      color: rgb(187, 18, 26);
    }
.spectrum--light .spectrum-Radio.is-invalid .spectrum-Radio-button, .spectrum--light .spectrum-Radio.is-invalid .spectrum-Radio-input:checked + .spectrum-Radio-button, .spectrum--light .spectrum-Radio--quiet.is-invalid .spectrum-Radio-button, .spectrum--light .spectrum-Radio--quiet.is-invalid .spectrum-Radio-input:checked + .spectrum-Radio-button {
      border-color: rgb(215, 55, 63);
    }
.spectrum--light .spectrum-Radio.is-invalid .spectrum-Radio-label, .spectrum--light .spectrum-Radio--quiet.is-invalid .spectrum-Radio-label {
      color: rgb(215, 55, 63);
    }
.spectrum--light .spectrum-Radio-input:disabled + .spectrum-Radio-button {
    border-color: rgb(202, 202, 202) !important;
  }
.spectrum--light .spectrum-Radio-input:disabled ~ .spectrum-Radio-label {
    color: rgb(179, 179, 179) !important;
  }
/* Focus Overrides all */
.spectrum--light .spectrum-Radio .spectrum-Radio-input.focus-ring + .spectrum-Radio-button, .spectrum--light .spectrum-Radio:hover .spectrum-Radio-input.focus-ring + .spectrum-Radio-button, .spectrum--light .spectrum-Radio--quiet .spectrum-Radio-input.focus-ring + .spectrum-Radio-button, .spectrum--light .spectrum-Radio--quiet:hover .spectrum-Radio-input.focus-ring + .spectrum-Radio-button {
      border-color: rgb(38, 128, 235);
      box-shadow: 0 0 0 1px rgb(38, 128, 235);
    }
.spectrum--light .spectrum-Radio .spectrum-Radio-input.focus-ring ~ .spectrum-Radio-label, .spectrum--light .spectrum-Radio:hover .spectrum-Radio-input.focus-ring ~ .spectrum-Radio-label, .spectrum--light .spectrum-Radio--quiet .spectrum-Radio-input.focus-ring ~ .spectrum-Radio-label, .spectrum--light .spectrum-Radio--quiet:hover .spectrum-Radio-input.focus-ring ~ .spectrum-Radio-label {
      color: rgb(13, 102, 208);
    }
.spectrum--light .spectrum-Radio.is-invalid .spectrum-Radio-input:checked.focus-ring + .spectrum-Radio-button, .spectrum--light .spectrum-Radio--quiet.is-invalid .spectrum-Radio-input:checked.focus-ring + .spectrum-Radio-button {
      border-color: rgb(38, 128, 235);
      box-shadow: 0 0 0 1px rgb(38, 128, 235);
    }`;
    }
}