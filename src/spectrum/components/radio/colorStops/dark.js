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
.spectrum-Radio .spectrum-Radio-input:checked + .spectrum-Radio-button {
    border-color: rgb(55, 142, 240);
  }
.spectrum-Radio-label {
  color: rgb(205, 205, 205);
}
.spectrum-Radio-button {
  background-color: rgb(47, 47, 47);
  border-color: rgb(123, 123, 123);
}
/* topdoc
{{ radio/radio.yml }}
*/
.spectrum-Radio:hover .spectrum-Radio-button {
      border-color: rgb(157, 157, 157);
      box-shadow: none;
    }
.spectrum-Radio:hover .spectrum-Radio-input:checked + .spectrum-Radio-button {
      border-color: rgb(75, 156, 245);

    }
.spectrum-Radio:hover .spectrum-Radio-label {
      color: rgb(255, 255, 255);
    }
.spectrum-Radio:active .spectrum-Radio-button {
      border-color: rgb(205, 205, 205);
    }
.spectrum-Radio:active .spectrum-Radio-input:checked + .spectrum-Radio-button {
      border-color: rgb(90, 169, 250);

    }
.spectrum-Radio:active .spectrum-Radio-label {
      color: rgb(255, 255, 255);
    }
.spectrum-Radio--quiet .spectrum-Radio-input:checked + .spectrum-Radio-button {
    border-color: rgb(157, 157, 157);
  }
.spectrum-Radio--quiet:hover .spectrum-Radio-input:checked + .spectrum-Radio-button {
      border-color: rgb(205, 205, 205);
    }
.spectrum-Radio--quiet:active .spectrum-Radio-input:checked + .spectrum-Radio-button {
      border-color: rgb(255, 255, 255);
    }
.spectrum-Radio.is-invalid:hover .spectrum-Radio-input + .spectrum-Radio-button, .spectrum-Radio--quiet.is-invalid:hover .spectrum-Radio-input + .spectrum-Radio-button {
      border-color: rgb(247, 109, 116);
    }
.spectrum-Radio.is-invalid:hover .spectrum-Radio-label, .spectrum-Radio--quiet.is-invalid:hover .spectrum-Radio-label {
      color: rgb(247, 109, 116);
    }
.spectrum-Radio.is-invalid:active .spectrum-Radio-input + .spectrum-Radio-button, .spectrum-Radio--quiet.is-invalid:active .spectrum-Radio-input + .spectrum-Radio-button {
      border-color: rgb(255, 123, 130);
    }
.spectrum-Radio.is-invalid:active .spectrum-Radio-label, .spectrum-Radio--quiet.is-invalid:active .spectrum-Radio-label {
      color: rgb(255, 123, 130);
    }
.spectrum-Radio.is-invalid .spectrum-Radio-button, .spectrum-Radio.is-invalid .spectrum-Radio-input:checked + .spectrum-Radio-button, .spectrum-Radio--quiet.is-invalid .spectrum-Radio-button, .spectrum-Radio--quiet.is-invalid .spectrum-Radio-input:checked + .spectrum-Radio-button {
      border-color: rgb(236, 91, 98);
    }
.spectrum-Radio.is-invalid .spectrum-Radio-label, .spectrum-Radio--quiet.is-invalid .spectrum-Radio-label {
      color: rgb(236, 91, 98);
    }
.spectrum-Radio-input:disabled + .spectrum-Radio-button {
    border-color: rgb(77, 77, 77) !important;
  }
.spectrum-Radio-input:disabled ~ .spectrum-Radio-label {
    color: rgb(92, 92, 92) !important;
  }
/* Focus Overrides all */
.spectrum-Radio .spectrum-Radio-input.focus-ring + .spectrum-Radio-button, .spectrum-Radio:hover .spectrum-Radio-input.focus-ring + .spectrum-Radio-button, .spectrum-Radio--quiet .spectrum-Radio-input.focus-ring + .spectrum-Radio-button, .spectrum-Radio--quiet:hover .spectrum-Radio-input.focus-ring + .spectrum-Radio-button {
      border-color: rgb(38, 128, 235);
      box-shadow: 0 0 0 1px rgb(38, 128, 235);
    }
.spectrum-Radio .spectrum-Radio-input.focus-ring ~ .spectrum-Radio-label, .spectrum-Radio:hover .spectrum-Radio-input.focus-ring ~ .spectrum-Radio-label, .spectrum-Radio--quiet .spectrum-Radio-input.focus-ring ~ .spectrum-Radio-label, .spectrum-Radio--quiet:hover .spectrum-Radio-input.focus-ring ~ .spectrum-Radio-label {
      color: rgb(75, 156, 245);
    }
.spectrum-Radio.is-invalid .spectrum-Radio-input:checked.focus-ring + .spectrum-Radio-button, .spectrum-Radio--quiet.is-invalid .spectrum-Radio-input:checked.focus-ring + .spectrum-Radio-button {
      border-color: rgb(38, 128, 235);
      box-shadow: 0 0 0 1px rgb(38, 128, 235);
    }`;
    }
}