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
/* Default */
/* :before is used for the track of the switch */
.spectrum-ToggleSwitch-switch::before {
    background-color: rgb(45, 45, 45);
  }
/* :after is used for the handle of the switch */
.spectrum-ToggleSwitch-switch::after {
    background-color: rgb(26, 26, 26);
    border-color: rgb(105, 105, 105);
  }
.spectrum-ToggleSwitch-input ~ .spectrum-ToggleSwitch-label {
  color: rgb(180, 180, 180);
}
/* Selected */
.spectrum-ToggleSwitch-input:checked + .spectrum-ToggleSwitch-switch::before {
      background-color: rgb(38, 128, 235);
    }
.spectrum-ToggleSwitch-input:checked + .spectrum-ToggleSwitch-switch::after {
      border-color: rgb(38, 128, 235);
    }
/* Hover */
.spectrum-ToggleSwitch:hover .spectrum-ToggleSwitch-input + .spectrum-ToggleSwitch-switch::after {
        border-color: rgb(135, 135, 135);
        box-shadow: none;
      }
.spectrum-ToggleSwitch:hover .spectrum-ToggleSwitch-input ~ .spectrum-ToggleSwitch-label {
      color: rgb(226, 226, 226);
    }
/* Selected Hover */
.spectrum-ToggleSwitch:hover .spectrum-ToggleSwitch-input:checked:enabled + .spectrum-ToggleSwitch-switch::before {
        background-color: rgb(55, 142, 240);
      }
.spectrum-ToggleSwitch:hover .spectrum-ToggleSwitch-input:checked:enabled + .spectrum-ToggleSwitch-switch::after {
        border-color: rgb(55, 142, 240);
      }
/* Down */
.spectrum-ToggleSwitch:active .spectrum-ToggleSwitch-input + .spectrum-ToggleSwitch-switch::after {
        border-color: rgb(180, 180, 180);
      }
.spectrum-ToggleSwitch:active .spectrum-ToggleSwitch-input ~ .spectrum-ToggleSwitch-label {
      color: rgb(226, 226, 226);
    }
/* Selected Down */
.spectrum-ToggleSwitch:active .spectrum-ToggleSwitch-input:checked:enabled + .spectrum-ToggleSwitch-switch::before {
        background-color: rgb(75, 156, 245);
      }
.spectrum-ToggleSwitch:active .spectrum-ToggleSwitch-input:checked:enabled + .spectrum-ToggleSwitch-switch::after {
        border-color: rgb(75, 156, 245);
      }
/* Disabled */
.spectrum-ToggleSwitch .spectrum-ToggleSwitch-input:disabled + .spectrum-ToggleSwitch-switch::before {
      background-color: rgb(45, 45, 45);
    }
.spectrum-ToggleSwitch .spectrum-ToggleSwitch-input:disabled + .spectrum-ToggleSwitch-switch::after {
      border-color: rgb(60, 60, 60);
    }
.spectrum-ToggleSwitch .spectrum-ToggleSwitch-input:disabled ~ .spectrum-ToggleSwitch-label {
    color: rgb(73, 73, 73);
  }
/* Selected Disabled */
.spectrum-ToggleSwitch .spectrum-ToggleSwitch-input:disabled:checked + .spectrum-ToggleSwitch-switch::before {
        background-color: rgb(60, 60, 60);
      }
.spectrum-ToggleSwitch .spectrum-ToggleSwitch-input:disabled:checked + .spectrum-ToggleSwitch-switch::after {
        border-color: rgb(60, 60, 60);
      }
.spectrum-ToggleSwitch .spectrum-ToggleSwitch-input:disabled:checked ~ .spectrum-ToggleSwitch-label {
      color: rgb(73, 73, 73);
    }
/* topdoc
{{ toggle/toggle-onoffquiet.yml }}
*/
/* Quiet */
/* Quiet Selected */
.spectrum-ToggleSwitch--quiet .spectrum-ToggleSwitch-input:checked + .spectrum-ToggleSwitch-switch::before {
      background-color: rgb(135, 135, 135);
    }
.spectrum-ToggleSwitch--quiet .spectrum-ToggleSwitch-input:checked + .spectrum-ToggleSwitch-switch::after {
      border-color: rgb(135, 135, 135);
    }
/* Quiet Selected Hover */
.spectrum-ToggleSwitch--quiet:hover .spectrum-ToggleSwitch-input:checked:enabled + .spectrum-ToggleSwitch-switch::before {
      background-color: rgb(180, 180, 180);
    }
.spectrum-ToggleSwitch--quiet:hover .spectrum-ToggleSwitch-input:checked:enabled + .spectrum-ToggleSwitch-switch::after {
      border-color: rgb(180, 180, 180);
    }
/* Quiet Selected Down */
.spectrum-ToggleSwitch.spectrum-ToggleSwitch--quiet:active .spectrum-ToggleSwitch-input:checked:enabled + .spectrum-ToggleSwitch-switch::before {
      background-color: rgb(226, 226, 226);
    }
.spectrum-ToggleSwitch.spectrum-ToggleSwitch--quiet:active .spectrum-ToggleSwitch-input:checked:enabled + .spectrum-ToggleSwitch-switch::after {
      border-color: rgb(226, 226, 226);
    }
/* Key Focus */
.spectrum-ToggleSwitch .spectrum-ToggleSwitch-input.focus-ring + .spectrum-ToggleSwitch-switch::after, .spectrum-ToggleSwitch:hover .spectrum-ToggleSwitch-input.focus-ring + .spectrum-ToggleSwitch-switch::after, .spectrum-ToggleSwitch--quiet .spectrum-ToggleSwitch-input.focus-ring + .spectrum-ToggleSwitch-switch::after, .spectrum-ToggleSwitch--quiet:hover .spectrum-ToggleSwitch-input.focus-ring + .spectrum-ToggleSwitch-switch::after {
        border-color: rgb(20, 115, 230);
        box-shadow: 0 0 0 1px rgb(20, 115, 230);
      }
.spectrum-ToggleSwitch .spectrum-ToggleSwitch-input.focus-ring ~ .spectrum-ToggleSwitch-label, .spectrum-ToggleSwitch:hover .spectrum-ToggleSwitch-input.focus-ring ~ .spectrum-ToggleSwitch-label, .spectrum-ToggleSwitch--quiet .spectrum-ToggleSwitch-input.focus-ring ~ .spectrum-ToggleSwitch-label, .spectrum-ToggleSwitch--quiet:hover .spectrum-ToggleSwitch-input.focus-ring ~ .spectrum-ToggleSwitch-label {
      color: rgb(55, 142, 240);
    }
/* Selected Key Focus */
.spectrum-ToggleSwitch .spectrum-ToggleSwitch-input.focus-ring:checked + .spectrum-ToggleSwitch-switch::before, .spectrum-ToggleSwitch:hover .spectrum-ToggleSwitch-input.focus-ring:checked + .spectrum-ToggleSwitch-switch::before, .spectrum-ToggleSwitch--quiet .spectrum-ToggleSwitch-input.focus-ring:checked + .spectrum-ToggleSwitch-switch::before, .spectrum-ToggleSwitch--quiet:hover .spectrum-ToggleSwitch-input.focus-ring:checked + .spectrum-ToggleSwitch-switch::before {
          background-color: rgb(20, 115, 230);
        }
.spectrum-ToggleSwitch .spectrum-ToggleSwitch-input.focus-ring:checked + .spectrum-ToggleSwitch-switch::after, .spectrum-ToggleSwitch:hover .spectrum-ToggleSwitch-input.focus-ring:checked + .spectrum-ToggleSwitch-switch::after, .spectrum-ToggleSwitch--quiet .spectrum-ToggleSwitch-input.focus-ring:checked + .spectrum-ToggleSwitch-switch::after, .spectrum-ToggleSwitch--quiet:hover .spectrum-ToggleSwitch-input.focus-ring:checked + .spectrum-ToggleSwitch-switch::after {
          border-color: rgb(20, 115, 230);
          box-shadow: 0 0 0 1px rgb(20, 115, 230);
        }
.spectrum-ToggleSwitch .spectrum-ToggleSwitch-input.focus-ring:checked ~ .spectrum-ToggleSwitch-label, .spectrum-ToggleSwitch:hover .spectrum-ToggleSwitch-input.focus-ring:checked ~ .spectrum-ToggleSwitch-label, .spectrum-ToggleSwitch--quiet .spectrum-ToggleSwitch-input.focus-ring:checked ~ .spectrum-ToggleSwitch-label, .spectrum-ToggleSwitch--quiet:hover .spectrum-ToggleSwitch-input.focus-ring:checked ~ .spectrum-ToggleSwitch-label {
        color: rgb(55, 142, 240);
      }
.spectrum-ToggleSwitch--ab .spectrum-ToggleSwitch-input:checked + .spectrum-ToggleSwitch-switch::before {
          background-color: rgb(45, 45, 45);
        }
.spectrum-ToggleSwitch--ab .spectrum-ToggleSwitch-input:checked + .spectrum-ToggleSwitch-switch::after {
        /* Don't be blue */
        border-color: rgb(105, 105, 105);
      }
.spectrum-ToggleSwitch--ab .spectrum-ToggleSwitch-input.focus-ring:checked + .spectrum-ToggleSwitch-switch::before {
          background-color: rgb(45, 45, 45);
        }
.spectrum-ToggleSwitch--ab .spectrum-ToggleSwitch-input.focus-ring:checked + .spectrum-ToggleSwitch-switch::after {
          border-color: rgb(20, 115, 230);
        }
.spectrum-ToggleSwitch--ab .spectrum-ToggleSwitch-input:disabled:checked + .spectrum-ToggleSwitch-switch::before {
          background-color: rgb(45, 45, 45);
        }
.spectrum-ToggleSwitch--ab .spectrum-ToggleSwitch-input:disabled + .spectrum-ToggleSwitch-switch::before {
          background-color: rgb(45, 45, 45);
        }
.spectrum-ToggleSwitch--ab .spectrum-ToggleSwitch-input:disabled + .spectrum-ToggleSwitch-switch::after {
          border-color: rgb(60, 60, 60);
        }
.spectrum-ToggleSwitch--ab:hover .spectrum-ToggleSwitch-input:checked:enabled + .spectrum-ToggleSwitch-switch::before {
          background-color: rgb(45, 45, 45);
        }
.spectrum-ToggleSwitch--ab:hover .spectrum-ToggleSwitch-input:checked:enabled + .spectrum-ToggleSwitch-switch::after {
          border-color: rgb(135, 135, 135);
        }
.spectrum-ToggleSwitch--ab:active .spectrum-ToggleSwitch-input:checked:enabled + .spectrum-ToggleSwitch-switch::before {
          background-color: rgb(45, 45, 45);
        }
.spectrum-ToggleSwitch--ab:active .spectrum-ToggleSwitch-input:checked:enabled + .spectrum-ToggleSwitch-switch::after {
          border-color: rgb(180, 180, 180);
        }`;
    }
}