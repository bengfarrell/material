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
/* topdoc
{{ stepper/stepper-default.yml }}
*/
.spectrum-Stepper .spectrum-Stepper-input:focus {
      border-color: rgb(55, 142, 240);
    }
.spectrum-Stepper .spectrum-Stepper-input:focus + .spectrum-Stepper-buttons .spectrum-Stepper-stepUp,
        .spectrum-Stepper .spectrum-Stepper-input:focus + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
          border-color: rgb(55, 142, 240);
        }
.spectrum-Stepper .spectrum-Stepper-input:focus:invalid,
      .spectrum-Stepper .spectrum-Stepper-input:focus.is-invalid {
        border-color: rgb(227, 72, 80);
      }
.spectrum-Stepper .spectrum-Stepper-input:focus:invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepUp,
          .spectrum-Stepper .spectrum-Stepper-input:focus:invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown,
          .spectrum-Stepper .spectrum-Stepper-input:focus.is-invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepUp,
          .spectrum-Stepper .spectrum-Stepper-input:focus.is-invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
            border-color: rgb(227, 72, 80);
          }
.spectrum-Stepper .spectrum-Stepper-input.focus-ring {
      box-shadow: 0 0 0 1px rgb(55, 142, 240);
    }
.spectrum-Stepper .spectrum-Stepper-input.focus-ring + .spectrum-Stepper-buttons {
        box-shadow: 0 0 0 1px rgb(55, 142, 240);
      }
.spectrum-Stepper .spectrum-Stepper-input.focus-ring:invalid,
      .spectrum-Stepper .spectrum-Stepper-input.focus-ring.is-invalid {
        box-shadow: 0 0 0 1px rgb(227, 72, 80);
      }
.spectrum-Stepper .spectrum-Stepper-input.focus-ring:invalid + .spectrum-Stepper-buttons, .spectrum-Stepper .spectrum-Stepper-input.focus-ring.is-invalid + .spectrum-Stepper-buttons {
          box-shadow: 0 0 0 1px rgb(227, 72, 80);
        }
.spectrum-Stepper .spectrum-Stepper-input:invalid,
    .spectrum-Stepper .spectrum-Stepper-input.is-invalid {
      border-color: rgb(227, 72, 80);
    }
.spectrum-Stepper .spectrum-Stepper-input:invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepUp,
        .spectrum-Stepper .spectrum-Stepper-input:invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown,
        .spectrum-Stepper .spectrum-Stepper-input.is-invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepUp,
        .spectrum-Stepper .spectrum-Stepper-input.is-invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
          border-color: rgb(227, 72, 80);
        }
.spectrum-Stepper.is-focused .spectrum-Stepper-input {
      border-color: rgb(55, 142, 240);
      box-shadow: none;
    }
.spectrum-Stepper.is-focused .spectrum-Stepper-input + .spectrum-Stepper-buttons .spectrum-Stepper-stepUp,
        .spectrum-Stepper.is-focused .spectrum-Stepper-input + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
          border-color: rgb(55, 142, 240);
        }
.spectrum-Stepper.is-focused .spectrum-Stepper-input.focus-ring {
        box-shadow: 0 0 0 1px rgb(55, 142, 240);
      }
.spectrum-Stepper.is-focused .spectrum-Stepper-input.focus-ring + .spectrum-Stepper-buttons {
          box-shadow: 0 0 0 1px rgb(55, 142, 240);
        }
.spectrum-Stepper.is-focused .spectrum-Stepper-input.focus-ring:invalid,
        .spectrum-Stepper.is-focused .spectrum-Stepper-input.focus-ring.is-invalid {
          box-shadow: 0 0 0 1px rgb(227, 72, 80);
        }
.spectrum-Stepper.is-focused .spectrum-Stepper-input.focus-ring:invalid + .spectrum-Stepper-buttons, .spectrum-Stepper.is-focused .spectrum-Stepper-input.focus-ring.is-invalid + .spectrum-Stepper-buttons {
            box-shadow: 0 0 0 1px rgb(227, 72, 80);
          }
.spectrum-Stepper.is-focused .spectrum-Stepper-input:invalid,
      .spectrum-Stepper.is-focused .spectrum-Stepper-input.is-invalid {
        border-color: rgb(227, 72, 80);
      }
.spectrum-Stepper.is-focused .spectrum-Stepper-input:invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepUp,
          .spectrum-Stepper.is-focused .spectrum-Stepper-input:invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown,
          .spectrum-Stepper.is-focused .spectrum-Stepper-input.is-invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepUp,
          .spectrum-Stepper.is-focused .spectrum-Stepper-input.is-invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
            border-color: rgb(227, 72, 80);
          }
.spectrum-Stepper.is-invalid .spectrum-Stepper-input {
      border-color: rgb(227, 72, 80);
      box-shadow: none;
    }
.spectrum-Stepper.is-invalid .spectrum-Stepper-input + .spectrum-Stepper-buttons .spectrum-Stepper-stepUp,
        .spectrum-Stepper.is-invalid .spectrum-Stepper-input + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
          border-color: rgb(227, 72, 80);
        }
.spectrum-Stepper.is-invalid .spectrum-Stepper-input.focus-ring {
        box-shadow: 0 0 0 1px rgb(227, 72, 80);
      }
.spectrum-Stepper.is-invalid .spectrum-Stepper-input.focus-ring + .spectrum-Stepper-buttons {
          box-shadow: 0 0 0 1px rgb(227, 72, 80);
        }
.spectrum-Stepper-stepUp,
.spectrum-Stepper-stepDown {
  border-color: rgb(234, 234, 234);
}
.spectrum-Stepper-stepUp:disabled, .spectrum-Stepper-stepDown:disabled {
    border-color: rgba(0, 0, 0, 0);
  }
.spectrum-Stepper-stepUp:hover, .spectrum-Stepper-stepDown:hover {
    /* Keep the border on hover */
    border-color: rgb(234, 234, 234);
  }
/* topdoc
{{ stepper/stepper-quiet.yml }}
*/
.spectrum-Stepper--quiet .spectrum-Stepper-stepUp:disabled, .spectrum-Stepper--quiet .spectrum-Stepper-stepDown:disabled {
      border-color: rgb(234, 234, 234);
    }
.spectrum-Stepper--quiet .spectrum-Stepper-input {
    box-shadow: none;
  }
.spectrum-Stepper--quiet .spectrum-Stepper-input:focus + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
          border-color: rgb(55, 142, 240);
        }
.spectrum-Stepper--quiet .spectrum-Stepper-input:focus:invalid,
      .spectrum-Stepper--quiet .spectrum-Stepper-input:focus.is-invalid {
        box-shadow: none;
      }
.spectrum-Stepper--quiet .spectrum-Stepper-input.focus-ring {
      box-shadow: 0 1px 0 0 rgb(55, 142, 240);
    }
.spectrum-Stepper--quiet .spectrum-Stepper-input.focus-ring + .spectrum-Stepper-buttons {
        box-shadow: none;
      }
.spectrum-Stepper--quiet .spectrum-Stepper-input.focus-ring + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
          box-shadow: 0 1px 0 0 rgb(55, 142, 240);
        }
.spectrum-Stepper--quiet .spectrum-Stepper-input.focus-ring:invalid,
      .spectrum-Stepper--quiet .spectrum-Stepper-input.focus-ring.is-invalid {
        box-shadow: 0 1px 0 0 rgb(227, 72, 80);
      }
.spectrum-Stepper--quiet .spectrum-Stepper-input.focus-ring:invalid + .spectrum-Stepper-buttons, .spectrum-Stepper--quiet .spectrum-Stepper-input.focus-ring.is-invalid + .spectrum-Stepper-buttons {
          box-shadow: none;
        }
.spectrum-Stepper--quiet .spectrum-Stepper-input.focus-ring:invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown, .spectrum-Stepper--quiet .spectrum-Stepper-input.focus-ring.is-invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
            box-shadow: 0 1px 0 0 rgb(227, 72, 80);
          }
.spectrum-Stepper--quiet .spectrum-Stepper-input:invalid,
    .spectrum-Stepper--quiet .spectrum-Stepper-input.is-invalid {
      border-color: rgb(227, 72, 80);
    }
.spectrum-Stepper--quiet .spectrum-Stepper-input:invalid + .spectrum-Stepper-buttons, .spectrum-Stepper--quiet .spectrum-Stepper-input.is-invalid + .spectrum-Stepper-buttons {
        box-shadow: none;
      }
.spectrum-Stepper--quiet .spectrum-Stepper-input:invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown, .spectrum-Stepper--quiet .spectrum-Stepper-input.is-invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
          border-color: rgb(227, 72, 80);
        }
.spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input {
      box-shadow: none;
    }
.spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input + .spectrum-Stepper-buttons {
        box-shadow: none;
      }
.spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
          border-color: rgb(55, 142, 240);
        }
.spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input:focus + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
            border-color: rgb(55, 142, 240);
          }
.spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input.focus-ring {
        border-color: rgb(55, 142, 240);
        box-shadow: 0 1px 0 0 rgb(55, 142, 240);
      }
.spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input.focus-ring + .spectrum-Stepper-buttons {
          box-shadow: none;
        }
.spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input.focus-ring + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
            box-shadow: 0 1px 0 0 rgb(55, 142, 240);
          }
.spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input.focus-ring:invalid,
        .spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input.focus-ring.is-invalid {
          box-shadow: 0 1px 0 0 rgb(227, 72, 80);
        }
.spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input.focus-ring:invalid + .spectrum-Stepper-buttons, .spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input.focus-ring.is-invalid + .spectrum-Stepper-buttons {
            box-shadow: none;
          }
.spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input.focus-ring:invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown, .spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input.focus-ring.is-invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
              box-shadow: 0 1px 0 0 rgb(227, 72, 80);
            }
.spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input:invalid,
      .spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input.is-invalid {
        border-color: rgb(227, 72, 80);
      }
.spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input:invalid + .spectrum-Stepper-buttons, .spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input.is-invalid + .spectrum-Stepper-buttons {
          box-shadow: none;
        }
.spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input:invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown, .spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input.is-invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
            border-color: rgb(227, 72, 80);
          }
.spectrum-Stepper--quiet.is-invalid .spectrum-Stepper-input {
      border-color: rgb(227, 72, 80);
    }
.spectrum-Stepper--quiet.is-invalid .spectrum-Stepper-input + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
          border-color: rgb(227, 72, 80);
        }
.spectrum-Stepper--quiet.is-invalid .spectrum-Stepper-input:focus + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
            border-color: rgb(227, 72, 80);
          }
.spectrum-Stepper--quiet.is-invalid .spectrum-Stepper-input.focus-ring {
        box-shadow: 0 1px 0 0 rgb(227, 72, 80);
      }
.spectrum-Stepper--quiet.is-invalid .spectrum-Stepper-input.focus-ring + .spectrum-Stepper-buttons {
          box-shadow: none;
        }
.spectrum-Stepper--quiet.is-invalid .spectrum-Stepper-input.focus-ring + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
            box-shadow: 0 1px 0 0 rgb(227, 72, 80);
          }`;
    }
}