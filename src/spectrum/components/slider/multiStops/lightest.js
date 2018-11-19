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
{{ slider/slider-ramp.yml }}
*/
.spectrum--lightest .spectrum-Slider-track::before {
    background: rgb(234, 234, 234);
  }
/* topdoc
{{ slider/slider-tick-label.yml }}
*/
.spectrum--lightest .spectrum-Slider-labelContainer,
.spectrum--lightest .spectrum-Dial-labelContainer {
  color: rgb(116, 116, 116);
}
/* topdoc
{{ slider/slider-tick.yml }}
*/
.spectrum--lightest .spectrum-Slider--filled .spectrum-Slider-track:first-child::before {
      background: rgb(116, 116, 116);
    }
/* topdoc
{{ slider/slider-player.yml }}
*/
.spectrum--lightest .spectrum-Slider-buffer::before,
  .spectrum--lightest .spectrum-Slider-buffer::after {
    background: rgb(188, 188, 188);
  }
/* topdoc
{{ slider/slider-filled.yml }}
*/
.spectrum--lightest .spectrum-Slider-ramp path {
    fill: rgb(234, 234, 234);
  }
/* topdoc
{{ slider/slider-label.yml }}
*/
.spectrum--lightest .spectrum-Slider-handle {
  border-color: rgb(116, 116, 116);
  background: rgb(255, 255, 255);
}
.spectrum--lightest .spectrum-Slider-handle:hover {
    border-color: rgb(80, 80, 80);
  }
.spectrum--lightest .spectrum-Slider-handle.is-focused {
    border-color: rgb(55, 142, 240);
  }
.spectrum--lightest .spectrum-Slider-handle:active,
  .spectrum--lightest .spectrum-Slider-handle.is-dragged {
    border-color: rgb(80, 80, 80);
  }
/* topdoc
{{ slider/slider.yml }}
*/
.spectrum--lightest .spectrum-Slider--ramp .spectrum-Slider-handle {
    /* We can't draw this one correctly without this hack : ( */
    box-shadow: 0 0 0 4px rgb(255, 255, 255);
  }
.spectrum--lightest .spectrum-Slider-input {
  background: transparent;
}
.spectrum--lightest .spectrum-Slider-tick:after {
    background-color: rgb(234, 234, 234);
  }
.spectrum--lightest .spectrum-Slider-handle.is-focused {
    border-color: rgb(55, 142, 240);
    background: rgb(55, 142, 240);
  }
.spectrum--lightest .spectrum-Slider-handle.is-dragged {
    border-color: rgb(80, 80, 80);
    background: rgba(0, 0, 0, 0);
  }
/* topdoc
{{ slider/slider-range.yml }}
*/
.spectrum--lightest .spectrum-Slider--range .spectrum-Slider-track:not(:first-of-type):not(:last-of-type):before {
        background: rgb(116, 116, 116);
      }
/* topdoc
{{ slider/slider-colored.yml }}
*/
.spectrum--lightest .spectrum-Slider--color .spectrum-Slider-controls::before {
    background-color: rgb(255, 255, 255);
    /* Add a half-percent to fix diagonal line issue in Chrome on non-retina displays */
    background-image:
      linear-gradient(-45deg, transparent 75.5%, rgb(188, 188, 188) 75.5%),
      linear-gradient(45deg, transparent 75.5%, rgb(188, 188, 188) 75.5%),
      linear-gradient(-45deg, rgb(188, 188, 188) 25.5%, transparent 25.5%),
      linear-gradient(45deg, rgb(188, 188, 188) 25.5%, transparent 25.5%);
    background-size:
      16px
      16px;
    background-position:
      0 0,
      0 8px,
      8px -8px,
      -8px 0;
    z-index: 0;
  }
.spectrum--lightest .spectrum-Slider--color .spectrum-Slider-track {
    background-color: transparent;
    background-image: linear-gradient(to right, rgb(55, 142, 240), rgb(13, 102, 208));
    box-shadow: inset 0 0 0 1px rgba(0,0,0,0.05);
  }
.spectrum--lightest .spectrum-Slider--color .spectrum-Slider-track::before {
      display: none;
    }
.spectrum--lightest .spectrum-Slider--color .spectrum-Slider-handle {
    box-shadow: inset 0 0 0 1px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.05);
    border-color: rgb(255, 255, 255);
    background: rgba(0, 0, 0, 0);
  }
.spectrum--lightest .spectrum-Slider--color .spectrum-Slider-handle.is-focused {
      box-shadow: 0 0 0 1px rgba(0,0,0,0.05);
    }
/* topdoc
{{ slider/dial-label.yml }}
*/
/* topdoc
{{ slider/dial.yml }}
*/
.spectrum--lightest .spectrum-Dial-handle {
  box-shadow: none;
}
.spectrum--lightest .spectrum-Dial-handle::after {
    background-color: rgb(116, 116, 116);
  }
.spectrum--lightest .spectrum-Dial-handle:hover::after {
      background-color: rgb(80, 80, 80);
    }
.spectrum--lightest .spectrum-Dial-handle.is-focused {
    background-color: rgb(55, 142, 240);

    border-color: rgb(55, 142, 240);
  }
.spectrum--lightest .spectrum-Dial-handle.is-focused::after {
      background-color: rgb(255, 255, 255);
    }
.spectrum--lightest .spectrum-Dial-handle:active,
  .spectrum--lightest .spectrum-Dial-handle.is-dragged {
    background-color: rgb(80, 80, 80);

    border-color: rgb(80, 80, 80);
  }
.spectrum--lightest .spectrum-Dial-handle:active::after, .spectrum--lightest .spectrum-Dial-handle.is-dragged::after {
      background-color: rgb(255, 255, 255);
    }
.spectrum--lightest .spectrum-Dial-controls::before,
  .spectrum--lightest .spectrum-Dial-controls::after {
    background-color: rgb(149, 149, 149);
  }
.spectrum--lightest .spectrum-Dial.is-disabled .spectrum-Dial-labelContainer {
      color: rgb(188, 188, 188);
    }
.spectrum--lightest .spectrum-Dial.is-disabled .spectrum-Dial-controls::after,
      .spectrum--lightest .spectrum-Dial.is-disabled .spectrum-Dial-controls::before {
        background-color: rgb(211, 211, 211);
      }
.spectrum--lightest .spectrum-Dial.is-disabled .spectrum-Dial-handle {
      border-color: rgb(211, 211, 211);
      background: rgb(255, 255, 255);
    }
.spectrum--lightest .spectrum-Dial.is-disabled .spectrum-Dial-handle:hover,
      .spectrum--lightest .spectrum-Dial.is-disabled .spectrum-Dial-handle:active {
        border-color: rgb(211, 211, 211);
        background: rgba(0, 0, 0, 0);
      }
.spectrum--lightest .spectrum-Dial.is-disabled .spectrum-Dial-handle::after,
      .spectrum--lightest .spectrum-Dial.is-disabled .spectrum-Dial-handle::before {
        background-color: rgb(234, 234, 234);
      }
.spectrum--lightest .spectrum-Slider.is-disabled .spectrum-Slider-labelContainer,
.spectrum--lightest .spectrum-Slider.is-disabled .spectrum--lightest .spectrum-Dial-labelContainer {
      color: rgb(188, 188, 188);
    }
.spectrum--lightest .spectrum-Slider.is-disabled .spectrum-Slider-handle {
      border-color: rgb(211, 211, 211);
      background: rgb(255, 255, 255);
    }
.spectrum--lightest .spectrum-Slider.is-disabled .spectrum-Slider-handle:hover,
      .spectrum--lightest .spectrum-Slider.is-disabled .spectrum-Slider-handle:active {
        border-color: rgb(211, 211, 211);
        background: rgba(0, 0, 0, 0);
      }
.spectrum--lightest .spectrum-Slider.is-disabled .spectrum-Slider-track::before {
        background: rgb(234, 234, 234);
      }
.spectrum--lightest .spectrum-Slider.is-disabled.spectrum-Slider--filled .spectrum-Slider-track:first-child::before {
          background: rgb(234, 234, 234);
        }
.spectrum--lightest .spectrum-Slider.is-disabled .spectrum-Slider-buffer::before {
        background: rgb(234, 234, 234);
      }
.spectrum--lightest .spectrum-Slider.is-disabled .spectrum-Slider-ramp path {
        fill: rgb(244, 244, 244);
      }
.spectrum--lightest .spectrum-Slider.is-disabled.spectrum-Slider--color .spectrum-Slider-track {
        background: rgb(244, 244, 244) !important;
        box-shadow: none;
      }
.spectrum--lightest .spectrum-Slider.is-disabled.spectrum-Slider--color .spectrum-Slider-handle {
        background: rgba(0, 0, 0, 0);
        box-shadow: none;
        border-color: rgb(211, 211, 211);
      }
.spectrum--lightest .spectrum-Slider.is-disabled.spectrum-Slider--color .spectrum-Slider-handle:hover,
        .spectrum--lightest .spectrum-Slider.is-disabled.spectrum-Slider--color .spectrum-Slider-handle:active {
          background: rgba(0, 0, 0, 0);
          box-shadow: none;
          border-color: rgb(211, 211, 211);
        }
.spectrum--lightest .spectrum-Slider.is-disabled.spectrum-Slider--range .spectrum-Slider-track:not(:first-of-type):not(:last-of-type):before {
            background: rgb(234, 234, 234);
          }`;
    }
}