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
.spectrum-InputGroup:hover .spectrum-InputGroup-field:not(:disabled):not(.is-invalid):not(:focus),
      .spectrum-InputGroup:hover .spectrum-InputGroup-field:not(:disabled):not(.is-invalid):not(:focus) ~ .spectrum-FieldButton {
        border-color: rgb(202, 202, 202);
      }
.spectrum-InputGroup-field:focus ~ .spectrum-FieldButton {
    border-color: rgb(38, 128, 235);
  }
.spectrum-InputGroup-field:focus.is-invalid ~ .spectrum-FieldButton, .spectrum-InputGroup-field:focus:invalid ~ .spectrum-FieldButton {
      border-color: rgb(215, 55, 63);
    }
/* Only add the 2px ring for keyboard focus */
.spectrum-InputGroup-field.focus-ring ~ .spectrum-FieldButton {
    box-shadow: 0 0 0 1px rgb(38, 128, 235);
  }
.spectrum-InputGroup-field.focus-ring.is-invalid ~ .spectrum-FieldButton, .spectrum-InputGroup-field.focus-ring:invalid ~ .spectrum-FieldButton {
      box-shadow: 0 0 0 1px rgb(215, 55, 63);
    }
.spectrum-InputGroup--quiet .spectrum-FieldButton,
    .spectrum-InputGroup--quiet .spectrum-FieldButton:hover,
    .spectrum-InputGroup--quiet .spectrum-FieldButton:focus,
    .spectrum-InputGroup--quiet .spectrum-FieldButton:active,
    .spectrum-InputGroup--quiet .spectrum-FieldButton.is-selected,
    .spectrum-InputGroup--quiet .spectrum-FieldButton:invalid,
    .spectrum-InputGroup--quiet .spectrum-FieldButton.is-invalid,
    .spectrum-InputGroup--quiet .spectrum-FieldButton:disabled,
    .spectrum-InputGroup--quiet .spectrum-FieldButton:disabled:hover {
      border-color: rgb(225, 225, 225);
    }
.spectrum-InputGroup--quiet:hover .spectrum-InputGroup-field:not(:disabled):not(.is-invalid):not(:focus),
      .spectrum-InputGroup--quiet:hover .spectrum-InputGroup-field:not(:disabled):not(.is-invalid):not(:focus) ~ .spectrum-FieldButton {
        border-color: rgb(202, 202, 202);
      }
.spectrum-InputGroup--quiet .spectrum-InputGroup-field.is-invalid,
      .spectrum-InputGroup--quiet .spectrum-InputGroup-field.is-invalid ~ .spectrum-FieldButton,
      .spectrum-InputGroup--quiet .spectrum-InputGroup-field:invalid,
      .spectrum-InputGroup--quiet .spectrum-InputGroup-field:invalid ~ .spectrum-FieldButton {
        border-color: rgb(215, 55, 63);
      }
/* Always add the 2px ring for keyboard focus for quiet inputgroups */
.spectrum-InputGroup--quiet .spectrum-InputGroup-field:focus ~ .spectrum-FieldButton {
        box-shadow: 0 1px 0 rgb(38, 128, 235);
        border-color: rgb(38, 128, 235);
      }
.spectrum-InputGroup--quiet .spectrum-InputGroup-field:focus.is-invalid ~ .spectrum-FieldButton, .spectrum-InputGroup--quiet .spectrum-InputGroup-field:focus:invalid ~ .spectrum-FieldButton {
          box-shadow: 0 1px 0 rgb(215, 55, 63);
          border-color: rgb(215, 55, 63);
        }`;
    }
}