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
.spectrum--dark .spectrum-Stepper .spectrum-Stepper-input:focus {
      border-color: rgb(38, 128, 235);
    }
.spectrum--dark .spectrum-Stepper .spectrum-Stepper-input:focus + .spectrum-Stepper-buttons .spectrum-Stepper-stepUp,
        .spectrum--dark .spectrum-Stepper .spectrum-Stepper-input:focus + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
          border-color: rgb(38, 128, 235);
        }
.spectrum--dark .spectrum-Stepper .spectrum-Stepper-input:focus:invalid,
      .spectrum--dark .spectrum-Stepper .spectrum-Stepper-input:focus.is-invalid {
        border-color: rgb(236, 91, 98);
      }
.spectrum--dark .spectrum-Stepper .spectrum-Stepper-input:focus:invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepUp,
          .spectrum--dark .spectrum-Stepper .spectrum-Stepper-input:focus:invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown,
          .spectrum--dark .spectrum-Stepper .spectrum-Stepper-input:focus.is-invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepUp,
          .spectrum--dark .spectrum-Stepper .spectrum-Stepper-input:focus.is-invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
            border-color: rgb(236, 91, 98);
          }
.spectrum--dark .spectrum-Stepper .spectrum-Stepper-input.focus-ring {
      box-shadow: 0 0 0 1px rgb(38, 128, 235);
    }
.spectrum--dark .spectrum-Stepper .spectrum-Stepper-input.focus-ring + .spectrum-Stepper-buttons {
        box-shadow: 0 0 0 1px rgb(38, 128, 235);
      }
.spectrum--dark .spectrum-Stepper .spectrum-Stepper-input.focus-ring:invalid,
      .spectrum--dark .spectrum-Stepper .spectrum-Stepper-input.focus-ring.is-invalid {
        box-shadow: 0 0 0 1px rgb(236, 91, 98);
      }
.spectrum--dark .spectrum-Stepper .spectrum-Stepper-input.focus-ring:invalid + .spectrum-Stepper-buttons, .spectrum--dark .spectrum-Stepper .spectrum-Stepper-input.focus-ring.is-invalid + .spectrum-Stepper-buttons {
          box-shadow: 0 0 0 1px rgb(236, 91, 98);
        }
.spectrum--dark .spectrum-Stepper .spectrum-Stepper-input:invalid,
    .spectrum--dark .spectrum-Stepper .spectrum-Stepper-input.is-invalid {
      border-color: rgb(236, 91, 98);
    }
.spectrum--dark .spectrum-Stepper .spectrum-Stepper-input:invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepUp,
        .spectrum--dark .spectrum-Stepper .spectrum-Stepper-input:invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown,
        .spectrum--dark .spectrum-Stepper .spectrum-Stepper-input.is-invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepUp,
        .spectrum--dark .spectrum-Stepper .spectrum-Stepper-input.is-invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
          border-color: rgb(236, 91, 98);
        }
.spectrum--dark .spectrum-Stepper.is-focused .spectrum-Stepper-input {
      border-color: rgb(38, 128, 235);
      box-shadow: none;
    }
.spectrum--dark .spectrum-Stepper.is-focused .spectrum-Stepper-input + .spectrum-Stepper-buttons .spectrum-Stepper-stepUp,
        .spectrum--dark .spectrum-Stepper.is-focused .spectrum-Stepper-input + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
          border-color: rgb(38, 128, 235);
        }
.spectrum--dark .spectrum-Stepper.is-focused .spectrum-Stepper-input.focus-ring {
        box-shadow: 0 0 0 1px rgb(38, 128, 235);
      }
.spectrum--dark .spectrum-Stepper.is-focused .spectrum-Stepper-input.focus-ring + .spectrum-Stepper-buttons {
          box-shadow: 0 0 0 1px rgb(38, 128, 235);
        }
.spectrum--dark .spectrum-Stepper.is-focused .spectrum-Stepper-input.focus-ring:invalid,
        .spectrum--dark .spectrum-Stepper.is-focused .spectrum-Stepper-input.focus-ring.is-invalid {
          box-shadow: 0 0 0 1px rgb(236, 91, 98);
        }
.spectrum--dark .spectrum-Stepper.is-focused .spectrum-Stepper-input.focus-ring:invalid + .spectrum-Stepper-buttons, .spectrum--dark .spectrum-Stepper.is-focused .spectrum-Stepper-input.focus-ring.is-invalid + .spectrum-Stepper-buttons {
            box-shadow: 0 0 0 1px rgb(236, 91, 98);
          }
.spectrum--dark .spectrum-Stepper.is-focused .spectrum-Stepper-input:invalid,
      .spectrum--dark .spectrum-Stepper.is-focused .spectrum-Stepper-input.is-invalid {
        border-color: rgb(236, 91, 98);
      }
.spectrum--dark .spectrum-Stepper.is-focused .spectrum-Stepper-input:invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepUp,
          .spectrum--dark .spectrum-Stepper.is-focused .spectrum-Stepper-input:invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown,
          .spectrum--dark .spectrum-Stepper.is-focused .spectrum-Stepper-input.is-invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepUp,
          .spectrum--dark .spectrum-Stepper.is-focused .spectrum-Stepper-input.is-invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
            border-color: rgb(236, 91, 98);
          }
.spectrum--dark .spectrum-Stepper.is-invalid .spectrum-Stepper-input {
      border-color: rgb(236, 91, 98);
      box-shadow: none;
    }
.spectrum--dark .spectrum-Stepper.is-invalid .spectrum-Stepper-input + .spectrum-Stepper-buttons .spectrum-Stepper-stepUp,
        .spectrum--dark .spectrum-Stepper.is-invalid .spectrum-Stepper-input + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
          border-color: rgb(236, 91, 98);
        }
.spectrum--dark .spectrum-Stepper.is-invalid .spectrum-Stepper-input.focus-ring {
        box-shadow: 0 0 0 1px rgb(236, 91, 98);
      }
.spectrum--dark .spectrum-Stepper.is-invalid .spectrum-Stepper-input.focus-ring + .spectrum-Stepper-buttons {
          box-shadow: 0 0 0 1px rgb(236, 91, 98);
        }
.spectrum--dark .spectrum-Stepper-stepUp,
.spectrum--dark .spectrum-Stepper-stepDown {
  border-color: rgb(62, 62, 62);
}
.spectrum--dark .spectrum-Stepper-stepUp:disabled, .spectrum--dark .spectrum-Stepper-stepDown:disabled {
    border-color: rgba(0, 0, 0, 0);
  }
.spectrum--dark .spectrum-Stepper-stepUp:hover, .spectrum--dark .spectrum-Stepper-stepDown:hover {
    /* Keep the border on hover */
    border-color: rgb(62, 62, 62);
  }
/* topdoc
{{ stepper/stepper-quiet.yml }}
*/
.spectrum--dark .spectrum-Stepper--quiet .spectrum-Stepper-stepUp:disabled, .spectrum--dark .spectrum-Stepper--quiet .spectrum-Stepper-stepDown:disabled {
      border-color: rgb(62, 62, 62);
    }
.spectrum--dark .spectrum-Stepper--quiet .spectrum-Stepper-input {
    box-shadow: none;
  }
.spectrum--dark .spectrum-Stepper--quiet .spectrum-Stepper-input:focus + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
          border-color: rgb(38, 128, 235);
        }
.spectrum--dark .spectrum-Stepper--quiet .spectrum-Stepper-input:focus:invalid,
      .spectrum--dark .spectrum-Stepper--quiet .spectrum-Stepper-input:focus.is-invalid {
        box-shadow: none;
      }
.spectrum--dark .spectrum-Stepper--quiet .spectrum-Stepper-input.focus-ring {
      box-shadow: 0 1px 0 0 rgb(38, 128, 235);
    }
.spectrum--dark .spectrum-Stepper--quiet .spectrum-Stepper-input.focus-ring + .spectrum-Stepper-buttons {
        box-shadow: none;
      }
.spectrum--dark .spectrum-Stepper--quiet .spectrum-Stepper-input.focus-ring + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
          box-shadow: 0 1px 0 0 rgb(38, 128, 235);
        }
.spectrum--dark .spectrum-Stepper--quiet .spectrum-Stepper-input.focus-ring:invalid,
      .spectrum--dark .spectrum-Stepper--quiet .spectrum-Stepper-input.focus-ring.is-invalid {
        box-shadow: 0 1px 0 0 rgb(236, 91, 98);
      }
.spectrum--dark .spectrum-Stepper--quiet .spectrum-Stepper-input.focus-ring:invalid + .spectrum-Stepper-buttons, .spectrum--dark .spectrum-Stepper--quiet .spectrum-Stepper-input.focus-ring.is-invalid + .spectrum-Stepper-buttons {
          box-shadow: none;
        }
.spectrum--dark .spectrum-Stepper--quiet .spectrum-Stepper-input.focus-ring:invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown, .spectrum--dark .spectrum-Stepper--quiet .spectrum-Stepper-input.focus-ring.is-invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
            box-shadow: 0 1px 0 0 rgb(236, 91, 98);
          }
.spectrum--dark .spectrum-Stepper--quiet .spectrum-Stepper-input:invalid,
    .spectrum--dark .spectrum-Stepper--quiet .spectrum-Stepper-input.is-invalid {
      border-color: rgb(236, 91, 98);
    }
.spectrum--dark .spectrum-Stepper--quiet .spectrum-Stepper-input:invalid + .spectrum-Stepper-buttons, .spectrum--dark .spectrum-Stepper--quiet .spectrum-Stepper-input.is-invalid + .spectrum-Stepper-buttons {
        box-shadow: none;
      }
.spectrum--dark .spectrum-Stepper--quiet .spectrum-Stepper-input:invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown, .spectrum--dark .spectrum-Stepper--quiet .spectrum-Stepper-input.is-invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
          border-color: rgb(236, 91, 98);
        }
.spectrum--dark .spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input {
      box-shadow: none;
    }
.spectrum--dark .spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input + .spectrum-Stepper-buttons {
        box-shadow: none;
      }
.spectrum--dark .spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
          border-color: rgb(38, 128, 235);
        }
.spectrum--dark .spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input:focus + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
            border-color: rgb(38, 128, 235);
          }
.spectrum--dark .spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input.focus-ring {
        border-color: rgb(38, 128, 235);
        box-shadow: 0 1px 0 0 rgb(38, 128, 235);
      }
.spectrum--dark .spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input.focus-ring + .spectrum-Stepper-buttons {
          box-shadow: none;
        }
.spectrum--dark .spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input.focus-ring + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
            box-shadow: 0 1px 0 0 rgb(38, 128, 235);
          }
.spectrum--dark .spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input.focus-ring:invalid,
        .spectrum--dark .spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input.focus-ring.is-invalid {
          box-shadow: 0 1px 0 0 rgb(236, 91, 98);
        }
.spectrum--dark .spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input.focus-ring:invalid + .spectrum-Stepper-buttons, .spectrum--dark .spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input.focus-ring.is-invalid + .spectrum-Stepper-buttons {
            box-shadow: none;
          }
.spectrum--dark .spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input.focus-ring:invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown, .spectrum--dark .spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input.focus-ring.is-invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
              box-shadow: 0 1px 0 0 rgb(236, 91, 98);
            }
.spectrum--dark .spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input:invalid,
      .spectrum--dark .spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input.is-invalid {
        border-color: rgb(236, 91, 98);
      }
.spectrum--dark .spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input:invalid + .spectrum-Stepper-buttons, .spectrum--dark .spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input.is-invalid + .spectrum-Stepper-buttons {
          box-shadow: none;
        }
.spectrum--dark .spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input:invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown, .spectrum--dark .spectrum-Stepper--quiet.is-focused .spectrum-Stepper-input.is-invalid + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
            border-color: rgb(236, 91, 98);
          }
.spectrum--dark .spectrum-Stepper--quiet.is-invalid .spectrum-Stepper-input {
      border-color: rgb(236, 91, 98);
    }
.spectrum--dark .spectrum-Stepper--quiet.is-invalid .spectrum-Stepper-input + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
          border-color: rgb(236, 91, 98);
        }
.spectrum--dark .spectrum-Stepper--quiet.is-invalid .spectrum-Stepper-input:focus + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
            border-color: rgb(236, 91, 98);
          }
.spectrum--dark .spectrum-Stepper--quiet.is-invalid .spectrum-Stepper-input.focus-ring {
        box-shadow: 0 1px 0 0 rgb(236, 91, 98);
      }
.spectrum--dark .spectrum-Stepper--quiet.is-invalid .spectrum-Stepper-input.focus-ring + .spectrum-Stepper-buttons {
          box-shadow: none;
        }
.spectrum--dark .spectrum-Stepper--quiet.is-invalid .spectrum-Stepper-input.focus-ring + .spectrum-Stepper-buttons .spectrum-Stepper-stepDown {
            box-shadow: 0 1px 0 0 rgb(236, 91, 98);
          }`;
    }
}