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
        border-color: rgb(60, 60, 60);
      }
.spectrum-InputGroup-field:focus ~ .spectrum-FieldButton {
    border-color: rgb(20, 115, 230);
  }
.spectrum-InputGroup-field:focus.is-invalid ~ .spectrum-FieldButton, .spectrum-InputGroup-field:focus:invalid ~ .spectrum-FieldButton {
      border-color: rgb(227, 72, 80);
    }
/* Only add the 2px ring for keyboard focus */
.spectrum-InputGroup-field.focus-ring ~ .spectrum-FieldButton {
    box-shadow: 0 0 0 1px rgb(20, 115, 230);
  }
.spectrum-InputGroup-field.focus-ring.is-invalid ~ .spectrum-FieldButton, .spectrum-InputGroup-field.focus-ring:invalid ~ .spectrum-FieldButton {
      box-shadow: 0 0 0 1px rgb(227, 72, 80);
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
      border-color: rgb(45, 45, 45);
    }
.spectrum-InputGroup--quiet:hover .spectrum-InputGroup-field:not(:disabled):not(.is-invalid):not(:focus),
      .spectrum-InputGroup--quiet:hover .spectrum-InputGroup-field:not(:disabled):not(.is-invalid):not(:focus) ~ .spectrum-FieldButton {
        border-color: rgb(60, 60, 60);
      }
.spectrum-InputGroup--quiet .spectrum-InputGroup-field.is-invalid,
      .spectrum-InputGroup--quiet .spectrum-InputGroup-field.is-invalid ~ .spectrum-FieldButton,
      .spectrum-InputGroup--quiet .spectrum-InputGroup-field:invalid,
      .spectrum-InputGroup--quiet .spectrum-InputGroup-field:invalid ~ .spectrum-FieldButton {
        border-color: rgb(227, 72, 80);
      }
/* Always add the 2px ring for keyboard focus for quiet inputgroups */
.spectrum-InputGroup--quiet .spectrum-InputGroup-field:focus ~ .spectrum-FieldButton {
        box-shadow: 0 1px 0 rgb(20, 115, 230);
        border-color: rgb(20, 115, 230);
      }
.spectrum-InputGroup--quiet .spectrum-InputGroup-field:focus.is-invalid ~ .spectrum-FieldButton, .spectrum-InputGroup--quiet .spectrum-InputGroup-field:focus:invalid ~ .spectrum-FieldButton {
          box-shadow: 0 1px 0 rgb(227, 72, 80);
          border-color: rgb(227, 72, 80);
        }`;
    }
}