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
.spectrum-Dropdown .spectrum-Dropdown-trigger:hover .spectrum-Dropdown-icon {
      color: rgb(226, 226, 226);
    }
.spectrum-Dropdown .spectrum-Dropdown-trigger.is-selected .is-placeholder {
        color: rgb(226, 226, 226);
      }
.spectrum-Dropdown.is-invalid .spectrum-Icon:not(.spectrum-Dropdown-icon):not(.spectrum-Menu-checkmark) {
      color: rgb(236, 91, 98);
    }
.spectrum-Dropdown.is-invalid.is-disabled .spectrum-Icon,
      .spectrum-Dropdown.is-invalid.is-disabled .spectrum-Icon:not(.spectrum-Dropdown-icon):not(.spectrum-Menu-checkmark) {
        color: rgb(60, 60, 60);
      }
.spectrum-Dropdown.is-disabled .spectrum-Dropdown-icon, .spectrum-Dropdown.is-disabled .spectrum-Dropdown-trigger:hover .spectrum-Dropdown-icon {
        color: rgb(60, 60, 60);
      }
.spectrum-Dropdown.is-disabled .spectrum-Dropdown-label.is-placeholder {
        color: rgb(73, 73, 73);
      }
.spectrum-Dropdown-icon {
  color: rgb(135, 135, 135);
}
.spectrum-Dropdown-label.is-placeholder {
    color: rgb(105, 105, 105);
  }
.spectrum-Dropdown-label.is-placeholder:hover {
      color: rgb(226, 226, 226);
    }
.spectrum-Dropdown-label.is-placeholder:active {
      color: rgb(226, 226, 226);
    }
.spectrum-Dropdown-trigger.focus-ring .spectrum-Dropdown-label.is-placeholder {
    color: rgb(226, 226, 226);
  }
.spectrum-Dropdown-trigger.focus-ring .spectrum-Dropdown-icon {
    color: rgb(226, 226, 226)
  }`;
    }
}