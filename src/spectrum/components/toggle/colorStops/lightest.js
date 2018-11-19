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
    background-color: rgb(234, 234, 234);
  }
/* :after is used for the handle of the switch */
.spectrum-ToggleSwitch-switch::after {
    background-color: rgb(255, 255, 255);
    border-color: rgb(149, 149, 149);
  }
.spectrum-ToggleSwitch-input ~ .spectrum-ToggleSwitch-label {
  color: rgb(80, 80, 80);
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
        border-color: rgb(116, 116, 116);
        box-shadow: none;
      }
.spectrum-ToggleSwitch:hover .spectrum-ToggleSwitch-input ~ .spectrum-ToggleSwitch-label {
      color: rgb(50, 50, 50);
    }
/* Selected Hover */
.spectrum-ToggleSwitch:hover .spectrum-ToggleSwitch-input:checked:enabled + .spectrum-ToggleSwitch-switch::before {
        background-color: rgb(20, 115, 230);
      }
.spectrum-ToggleSwitch:hover .spectrum-ToggleSwitch-input:checked:enabled + .spectrum-ToggleSwitch-switch::after {
        border-color: rgb(20, 115, 230);
      }
/* Down */
.spectrum-ToggleSwitch:active .spectrum-ToggleSwitch-input + .spectrum-ToggleSwitch-switch::after {
        border-color: rgb(80, 80, 80);
      }
.spectrum-ToggleSwitch:active .spectrum-ToggleSwitch-input ~ .spectrum-ToggleSwitch-label {
      color: rgb(50, 50, 50);
    }
/* Selected Down */
.spectrum-ToggleSwitch:active .spectrum-ToggleSwitch-input:checked:enabled + .spectrum-ToggleSwitch-switch::before {
        background-color: rgb(13, 102, 208);
      }
.spectrum-ToggleSwitch:active .spectrum-ToggleSwitch-input:checked:enabled + .spectrum-ToggleSwitch-switch::after {
        border-color: rgb(13, 102, 208);
      }
/* Disabled */
.spectrum-ToggleSwitch .spectrum-ToggleSwitch-input:disabled + .spectrum-ToggleSwitch-switch::before {
      background-color: rgb(234, 234, 234);
    }
.spectrum-ToggleSwitch .spectrum-ToggleSwitch-input:disabled + .spectrum-ToggleSwitch-switch::after {
      border-color: rgb(211, 211, 211);
    }
.spectrum-ToggleSwitch .spectrum-ToggleSwitch-input:disabled ~ .spectrum-ToggleSwitch-label {
    color: rgb(188, 188, 188);
  }
/* Selected Disabled */
.spectrum-ToggleSwitch .spectrum-ToggleSwitch-input:disabled:checked + .spectrum-ToggleSwitch-switch::before {
        background-color: rgb(211, 211, 211);
      }
.spectrum-ToggleSwitch .spectrum-ToggleSwitch-input:disabled:checked + .spectrum-ToggleSwitch-switch::after {
        border-color: rgb(211, 211, 211);
      }
.spectrum-ToggleSwitch .spectrum-ToggleSwitch-input:disabled:checked ~ .spectrum-ToggleSwitch-label {
      color: rgb(188, 188, 188);
    }
/* topdoc
{{ toggle/toggle-onoffquiet.yml }}
*/
/* Quiet */
/* Quiet Selected */
.spectrum-ToggleSwitch--quiet .spectrum-ToggleSwitch-input:checked + .spectrum-ToggleSwitch-switch::before {
      background-color: rgb(116, 116, 116);
    }
.spectrum-ToggleSwitch--quiet .spectrum-ToggleSwitch-input:checked + .spectrum-ToggleSwitch-switch::after {
      border-color: rgb(116, 116, 116);
    }
/* Quiet Selected Hover */
.spectrum-ToggleSwitch--quiet:hover .spectrum-ToggleSwitch-input:checked:enabled + .spectrum-ToggleSwitch-switch::before {
      background-color: rgb(80, 80, 80);
    }
.spectrum-ToggleSwitch--quiet:hover .spectrum-ToggleSwitch-input:checked:enabled + .spectrum-ToggleSwitch-switch::after {
      border-color: rgb(80, 80, 80);
    }
/* Quiet Selected Down */
.spectrum-ToggleSwitch.spectrum-ToggleSwitch--quiet:active .spectrum-ToggleSwitch-input:checked:enabled + .spectrum-ToggleSwitch-switch::before {
      background-color: rgb(50, 50, 50);
    }
.spectrum-ToggleSwitch.spectrum-ToggleSwitch--quiet:active .spectrum-ToggleSwitch-input:checked:enabled + .spectrum-ToggleSwitch-switch::after {
      border-color: rgb(50, 50, 50);
    }
/* Key Focus */
.spectrum-ToggleSwitch .spectrum-ToggleSwitch-input.focus-ring + .spectrum-ToggleSwitch-switch::after, .spectrum-ToggleSwitch:hover .spectrum-ToggleSwitch-input.focus-ring + .spectrum-ToggleSwitch-switch::after, .spectrum-ToggleSwitch--quiet .spectrum-ToggleSwitch-input.focus-ring + .spectrum-ToggleSwitch-switch::after, .spectrum-ToggleSwitch--quiet:hover .spectrum-ToggleSwitch-input.focus-ring + .spectrum-ToggleSwitch-switch::after {
        border-color: rgb(55, 142, 240);
        box-shadow: 0 0 0 1px rgb(55, 142, 240);
      }
.spectrum-ToggleSwitch .spectrum-ToggleSwitch-input.focus-ring ~ .spectrum-ToggleSwitch-label, .spectrum-ToggleSwitch:hover .spectrum-ToggleSwitch-input.focus-ring ~ .spectrum-ToggleSwitch-label, .spectrum-ToggleSwitch--quiet .spectrum-ToggleSwitch-input.focus-ring ~ .spectrum-ToggleSwitch-label, .spectrum-ToggleSwitch--quiet:hover .spectrum-ToggleSwitch-input.focus-ring ~ .spectrum-ToggleSwitch-label {
      color: rgb(20, 115, 230);
    }
/* Selected Key Focus */
.spectrum-ToggleSwitch .spectrum-ToggleSwitch-input.focus-ring:checked + .spectrum-ToggleSwitch-switch::before, .spectrum-ToggleSwitch:hover .spectrum-ToggleSwitch-input.focus-ring:checked + .spectrum-ToggleSwitch-switch::before, .spectrum-ToggleSwitch--quiet .spectrum-ToggleSwitch-input.focus-ring:checked + .spectrum-ToggleSwitch-switch::before, .spectrum-ToggleSwitch--quiet:hover .spectrum-ToggleSwitch-input.focus-ring:checked + .spectrum-ToggleSwitch-switch::before {
          background-color: rgb(55, 142, 240);
        }
.spectrum-ToggleSwitch .spectrum-ToggleSwitch-input.focus-ring:checked + .spectrum-ToggleSwitch-switch::after, .spectrum-ToggleSwitch:hover .spectrum-ToggleSwitch-input.focus-ring:checked + .spectrum-ToggleSwitch-switch::after, .spectrum-ToggleSwitch--quiet .spectrum-ToggleSwitch-input.focus-ring:checked + .spectrum-ToggleSwitch-switch::after, .spectrum-ToggleSwitch--quiet:hover .spectrum-ToggleSwitch-input.focus-ring:checked + .spectrum-ToggleSwitch-switch::after {
          border-color: rgb(55, 142, 240);
          box-shadow: 0 0 0 1px rgb(55, 142, 240);
        }
.spectrum-ToggleSwitch .spectrum-ToggleSwitch-input.focus-ring:checked ~ .spectrum-ToggleSwitch-label, .spectrum-ToggleSwitch:hover .spectrum-ToggleSwitch-input.focus-ring:checked ~ .spectrum-ToggleSwitch-label, .spectrum-ToggleSwitch--quiet .spectrum-ToggleSwitch-input.focus-ring:checked ~ .spectrum-ToggleSwitch-label, .spectrum-ToggleSwitch--quiet:hover .spectrum-ToggleSwitch-input.focus-ring:checked ~ .spectrum-ToggleSwitch-label {
        color: rgb(20, 115, 230);
      }
.spectrum-ToggleSwitch--ab .spectrum-ToggleSwitch-input:checked + .spectrum-ToggleSwitch-switch::before {
          background-color: rgb(234, 234, 234);
        }
.spectrum-ToggleSwitch--ab .spectrum-ToggleSwitch-input:checked + .spectrum-ToggleSwitch-switch::after {
        /* Don't be blue */
        border-color: rgb(149, 149, 149);
      }
.spectrum-ToggleSwitch--ab .spectrum-ToggleSwitch-input.focus-ring:checked + .spectrum-ToggleSwitch-switch::before {
          background-color: rgb(234, 234, 234);
        }
.spectrum-ToggleSwitch--ab .spectrum-ToggleSwitch-input.focus-ring:checked + .spectrum-ToggleSwitch-switch::after {
          border-color: rgb(55, 142, 240);
        }
.spectrum-ToggleSwitch--ab .spectrum-ToggleSwitch-input:disabled:checked + .spectrum-ToggleSwitch-switch::before {
          background-color: rgb(234, 234, 234);
        }
.spectrum-ToggleSwitch--ab .spectrum-ToggleSwitch-input:disabled + .spectrum-ToggleSwitch-switch::before {
          background-color: rgb(234, 234, 234);
        }
.spectrum-ToggleSwitch--ab .spectrum-ToggleSwitch-input:disabled + .spectrum-ToggleSwitch-switch::after {
          border-color: rgb(211, 211, 211);
        }
.spectrum-ToggleSwitch--ab:hover .spectrum-ToggleSwitch-input:checked:enabled + .spectrum-ToggleSwitch-switch::before {
          background-color: rgb(234, 234, 234);
        }
.spectrum-ToggleSwitch--ab:hover .spectrum-ToggleSwitch-input:checked:enabled + .spectrum-ToggleSwitch-switch::after {
          border-color: rgb(116, 116, 116);
        }
.spectrum-ToggleSwitch--ab:active .spectrum-ToggleSwitch-input:checked:enabled + .spectrum-ToggleSwitch-switch::before {
          background-color: rgb(234, 234, 234);
        }
.spectrum-ToggleSwitch--ab:active .spectrum-ToggleSwitch-input:checked:enabled + .spectrum-ToggleSwitch-switch::after {
          border-color: rgb(80, 80, 80);
        }`;
    }
}