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
.spectrum--darkest .spectrum-Stepper .spectrum-Stepper-input:focus {
      border-color: rgb(20, 115, 230);
    }
.spectrum--darkest .spectrum-Stepper .spectrum-Stepper-input:focus + .spectrum-Stepper-buttons .spectrum-Stepper-stepUp,
        .spectrum--darkest .spectrum-Stepper .spectrum-Stepper-input:focus + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
          border-color: rgb(20, 115, 230);
        }
.spectrum--darkest .spectrum-Stepper .spectrum-Stepper-input:focus:invalid,
      .spectrum--darkest .spectrum-Stepper .spectrum-Stepper-input:focus.is-invalid {
        border-color: rgb(227, 72, 80);
      }
.spectrum--darkest .spectrum-Stepper .spectrum-Stepper-input:focus:invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepUp,
          .spectrum--darkest .spectrum-Stepper .spectrum-Stepper-input:focus:invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown,
          .spectrum--darkest .spectrum-Stepper .spectrum-Stepper-input:focus.is-invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepUp,
          .spectrum--darkest .spectrum-Stepper .spectrum-Stepper-input:focus.is-invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
            border-color: rgb(227, 72, 80);
          }
.spectrum--darkest .spectrum-Stepper .spectrum-Stepper-input.focus-ring {
      box-shadow: 0 0 0 1px rgb(20, 115, 230);
    }
.spectrum--darkest .spectrum-Stepper .spectrum-Stepper-input.focus-ring + .spectrum-Stepper-buttons {
        box-shadow: 0 0 0 1px rgb(20, 115, 230);
      }
.spectrum--darkest .spectrum-Stepper .spectrum-Stepper-input.focus-ring:invalid,
      .spectrum--darkest .spectrum-Stepper .spectrum-Stepper-input.focus-ring.is-invalid {
        box-shadow: 0 0 0 1px rgb(227, 72, 80);
      }
.spectrum--darkest .spectrum-Stepper .spectrum-Stepper-input.focus-ring:invalid + .spectrum-Stepper-buttons, .spectrum--darkest .spectrum-Stepper .spectrum-Stepper-input.focus-ring.is-invalid + .spectrum-Stepper-buttons {
          box-shadow: 0 0 0 1px rgb(227, 72, 80);
        }
.spectrum--darkest .spectrum-Stepper .spectrum-Stepper-input:invalid,
    .spectrum--darkest .spectrum-Stepper .spectrum-Stepper-input.is-invalid {
      border-color: rgb(227, 72, 80);
    }
.spectrum--darkest .spectrum-Stepper .spectrum-Stepper-input:invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepUp,
        .spectrum--darkest .spectrum-Stepper .spectrum-Stepper-input:invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown,
        .spectrum--darkest .spectrum-Stepper .spectrum-Stepper-input.is-invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepUp,
        .spectrum--darkest .spectrum-Stepper .spectrum-Stepper-input.is-invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
          border-color: rgb(227, 72, 80);
        }
.spectrum--darkest .spectrum-Stepper.is-focused .spectrum-Stepper-input {
      border-color: rgb(20, 115, 230);
      box-shadow: none;
    }
.spectrum--darkest .spectrum-Stepper.is-focused .spectrum-Stepper-input + .spectrum-Stepper-buttons .spectrum-Stepper-stepUp,
        .spectrum--darkest .spectrum-Stepper.is-focused .spectrum-Stepper-input + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
          border-color: rgb(20, 115, 230);
        }
.spectrum--darkest .spectrum-Stepper.is-focused .spectrum-Stepper-input.focus-ring {
        box-shadow: 0 0 0 1px rgb(20, 115, 230);
      }
.spectrum--darkest .spectrum-Stepper.is-focused .spectrum-Stepper-input.focus-ring + .spectrum-Stepper-buttons {
          box-shadow: 0 0 0 1px rgb(20, 115, 230);
        }
.spectrum--darkest .spectrum-Stepper.is-focused .spectrum-Stepper-input.focus-ring:invalid,
        .spectrum--darkest .spectrum-Stepper.is-focused .spectrum-Stepper-input.focus-ring.is-invalid {
          box-shadow: 0 0 0 1px rgb(227, 72, 80);
        }
.spectrum--darkest .spectrum-Stepper.is-focused .spectrum-Stepper-input.focus-ring:invalid + .spectrum-Stepper-buttons, .spectrum--darkest .spectrum-Stepper.is-focused .spectrum-Stepper-input.focus-ring.is-invalid + .spectrum-Stepper-buttons {
            box-shadow: 0 0 0 1px rgb(227, 72, 80);
          }
.spectrum--darkest .spectrum-Stepper.is-focused .spectrum-Stepper-input:invalid,
      .spectrum--darkest .spectrum-Stepper.is-focused .spectrum-Stepper-input.is-invalid {
        border-color: rgb(227, 72, 80);
      }
.spectrum--darkest .spectrum-Stepper.is-focused .spectrum-Stepper-input:invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepUp,
          .spectrum--darkest .spectrum-Stepper.is-focused .spectrum-Stepper-input:invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown,
          .spectrum--darkest .spectrum-Stepper.is-focused .spectrum-Stepper-input.is-invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepUp,
          .spectrum--darkest .spectrum-Stepper.is-focused .spectrum-Stepper-input.is-invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
            border-color: rgb(227, 72, 80);
          }
.spectrum--darkest .spectrum-Stepper.is-invalid .spectrum-Stepper-input {
      border-color: rgb(227, 72, 80);
      box-shadow: none;
    }
.spectrum--darkest .spectrum-Stepper.is-invalid .spectrum-Stepper-input + .spectrum-Stepper-buttons .spectrum-Stepper-stepUp,
        .spectrum--darkest .spectrum-Stepper.is-invalid .spectrum-Stepper-input + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
          border-color: rgb(227, 72, 80);
        }
.spectrum--darkest .spectrum-Stepper.is-invalid .spectrum-Stepper-input.focus-ring {
        box-shadow: 0 0 0 1px rgb(227, 72, 80);
      }
.spectrum--darkest .spectrum-Stepper.is-invalid .spectrum-Stepper-input.focus-ring + .spectrum-Stepper-buttons {
          box-shadow: 0 0 0 1px rgb(227, 72, 80);
        }
.spectrum--darkest .spectrum-Stepper-stepUp,
.spectrum--darkest .spectrum-Stepper-stepDown {
  border-color: rgb(45, 45, 45);
}
.spectrum--darkest .spectrum-Stepper-stepUp:disabled, .spectrum--darkest .spectrum-Stepper-stepDown:disabled {
    border-color: rgba(0, 0, 0, 0);
  }
.spectrum--darkest .spectrum-Stepper-stepUp:hover, .spectrum--darkest .spectrum-Stepper-stepDown:hover {
    /* Keep the border on hover */
    border-color: rgb(45, 45, 45);
  }
/* topdoc
{{ stepper/stepper-quiet.yml }}
*/
.spectrum--darkest .spectrum-Stepper--quiet .spectrum-Stepper-stepUp:disabled, .spectrum--darkest .spectrum-Stepper--quiet .spectrum-Stepper-stepDown:disabled {
      border-color: rgb(45, 45, 45);
    }
.spectrum--darkest .spectrum-Stepper--quiet .spectrum-Stepper-input {
    box-shadow: none;
  }
.spectrum--darkest .spectrum-Stepper--quiet .spectrum-Stepper-input:focus + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
          border-color: rgb(20, 115, 230);
        }
.spectrum--darkest .spectrum-Stepper--quiet .spectrum-Stepper-input:focus:invalid,
      .spectrum--darkest .spectrum-Stepper--quiet .spectrum-Stepper-input:focus.is-invalid {
        box-shadow: none;
      }
.spectrum--darkest .spectrum-Stepper--quiet .spectrum-Stepper-input.focus-ring {
      box-shadow: 0 1px 0 0 rgb(20, 115, 230);
    }
.spectrum--darkest .spectrum-Stepper--quiet .spectrum-Stepper-input.focus-ring + .spectrum-Stepper-buttons {
        box-shadow: none;
      }
.spectrum--darkest .spectrum-Stepper--quiet .spectrum-Stepper-input.focus-ring + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
          box-shadow: 0 1px 0 0 rgb(20, 115, 230);
        }
.spectrum--darkest .spectrum-Stepper--quiet .spectrum-Stepper-input.focus-ring:invalid,
      .spectrum--darkest .spectrum-Stepper--quiet .spectrum-Stepper-input.focus-ring.is-invalid {
        box-shadow: 0 1px 0 0 rgb(227, 72, 80);
      }
.spectrum--darkest .spectrum-Stepper--quiet .spectrum-Stepper-input.focus-ring:invalid + .spectrum-Stepper-buttons, .spectrum--darkest .spectrum-Stepper--quiet .spectrum-Stepper-input.focus-ring.is-invalid + .spectrum-Stepper-buttons {
          box-shadow: none;
        }
.spectrum--darkest .spectrum-Stepper--quiet .spectrum-Stepper-input.focus-ring:invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown, .spectrum--darkest .spectrum-Stepper--quiet .spectrum-Stepper-input.focus-ring.is-invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
            box-shadow: 0 1px 0 0 rgb(227, 72, 80);
          }
.spectrum--darkest .spectrum-Stepper--quiet .spectrum-Stepper-input:invalid,
    .spectrum--darkest .spectrum-Stepper--quiet .spectrum-Stepper-input.is-invalid {
      border-color: rgb(227, 72, 80);
    }
.spectrum--darkest .spectrum-Stepper--quiet .spectrum-Stepper-input:invalid + .spectrum-Stepper-buttons, .spectrum--darkest .spectrum-Stepper--quiet .spectrum-Stepper-input.is-invalid + .spectrum-Stepper-buttons {
        box-shadow: none;
      }
.spectrum--darkest .spectrum-Stepper--quiet .spectrum-Stepper-input:invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown, .spectrum--darkest .spectrum-Stepper--quiet .spectrum-Stepper-input.is-invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
          border-color: rgb(227, 72, 80);
        }
.spectrum--darkest .spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input {
      box-shadow: none;
    }
.spectrum--darkest .spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input + .spectrum-Stepper-buttons {
        box-shadow: none;
      }
.spectrum--darkest .spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
          border-color: rgb(20, 115, 230);
        }
.spectrum--darkest .spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input:focus + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
            border-color: rgb(20, 115, 230);
          }
.spectrum--darkest .spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input.focus-ring {
        border-color: rgb(20, 115, 230);
        box-shadow: 0 1px 0 0 rgb(20, 115, 230);
      }
.spectrum--darkest .spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input.focus-ring + .spectrum-Stepper-buttons {
          box-shadow: none;
        }
.spectrum--darkest .spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input.focus-ring + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
            box-shadow: 0 1px 0 0 rgb(20, 115, 230);
          }
.spectrum--darkest .spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input.focus-ring:invalid,
        .spectrum--darkest .spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input.focus-ring.is-invalid {
          box-shadow: 0 1px 0 0 rgb(227, 72, 80);
        }
.spectrum--darkest .spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input.focus-ring:invalid + .spectrum-Stepper-buttons, .spectrum--darkest .spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input.focus-ring.is-invalid + .spectrum-Stepper-buttons {
            box-shadow: none;
          }
.spectrum--darkest .spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input.focus-ring:invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown, .spectrum--darkest .spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input.focus-ring.is-invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
              box-shadow: 0 1px 0 0 rgb(227, 72, 80);
            }
.spectrum--darkest .spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input:invalid,
      .spectrum--darkest .spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input.is-invalid {
        border-color: rgb(227, 72, 80);
      }
.spectrum--darkest .spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input:invalid + .spectrum-Stepper-buttons, .spectrum--darkest .spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input.is-invalid + .spectrum-Stepper-buttons {
          box-shadow: none;
        }
.spectrum--darkest .spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input:invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown, .spectrum--darkest .spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input.is-invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
            border-color: rgb(227, 72, 80);
          }
.spectrum--darkest .spectrum-Stepper--quiet.is-invalid .spectrum-Stepper-input {
      border-color: rgb(227, 72, 80);
    }
.spectrum--darkest .spectrum-Stepper--quiet.is-invalid .spectrum-Stepper-input + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
          border-color: rgb(227, 72, 80);
        }
.spectrum--darkest .spectrum-Stepper--quiet.is-invalid .spectrum-Stepper-input:focus + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
            border-color: rgb(227, 72, 80);
          }
.spectrum--darkest .spectrum-Stepper--quiet.is-invalid .spectrum-Stepper-input.focus-ring {
        box-shadow: 0 1px 0 0 rgb(227, 72, 80);
      }
.spectrum--darkest .spectrum-Stepper--quiet.is-invalid .spectrum-Stepper-input.focus-ring + .spectrum-Stepper-buttons {
          box-shadow: none;
        }
.spectrum--darkest .spectrum-Stepper--quiet.is-invalid .spectrum-Stepper-input.focus-ring + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
            box-shadow: 0 1px 0 0 rgb(227, 72, 80);
          }`;
    }
}