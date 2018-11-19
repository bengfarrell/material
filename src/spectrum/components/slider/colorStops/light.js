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
{{ slider/slider.yml }}
*/
/* topdoc
{{ slider/slider-label.yml }}
*/
/* topdoc
{{ slider/slider-filled.yml }}
*/
/* topdoc
{{ slider/slider-player.yml }}
*/
/* topdoc
{{ slider/slider-tick.yml }}
*/
/* topdoc
{{ slider/slider-tick-label.yml }}
*/
/* topdoc
{{ slider/slider-ramp.yml }}
*/
.spectrum-Slider-track::before {
    background: rgb(225, 225, 225);
  }
.spectrum-Slider-labelContainer,
.spectrum-Dial-labelContainer {
  color: rgb(110, 110, 110);
}
.spectrum-Slider--filled .spectrum-Slider-track:first-child::before {
      background: rgb(110, 110, 110);
    }
.spectrum-Slider-buffer::before,
  .spectrum-Slider-buffer::after {
    background: rgb(179, 179, 179);
  }
.spectrum-Slider-ramp path {
    fill: rgb(225, 225, 225);
  }
.spectrum-Slider-handle {
  border-color: rgb(110, 110, 110);
  background: rgb(245, 245, 245);
}
.spectrum-Slider-handle:hover {
    border-color: rgb(75, 75, 75);
  }
.spectrum-Slider-handle.is-focused {
    border-color: rgb(38, 128, 235);
  }
.spectrum-Slider-handle:active,
  .spectrum-Slider-handle.is-dragged {
    border-color: rgb(75, 75, 75);
  }
.spectrum-Slider--ramp .spectrum-Slider-handle {
    /* We can't draw this one correctly without this hack : ( */
    box-shadow: 0 0 0 4px rgb(245, 245, 245);
  }
.spectrum-Slider-input {
  background: transparent;
}
.spectrum-Slider-tick:after {
    background-color: rgb(225, 225, 225);
  }
.spectrum-Slider-handle.is-focused {
    border-color: rgb(38, 128, 235);
    background: rgb(38, 128, 235);
  }
.spectrum-Slider-handle.is-dragged {
    border-color: rgb(75, 75, 75);
    background: rgba(0, 0, 0, 0);
  }
/* topdoc
{{ slider/slider-range.yml }}
*/
.spectrum-Slider--range .spectrum-Slider-track:not(:first-of-type):not(:last-of-type):before {
        background: rgb(110, 110, 110);
      }
/* topdoc
{{ slider/slider-colored.yml }}
*/
.spectrum-Slider--color .spectrum-Slider-controls::before {
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
.spectrum-Slider--color .spectrum-Slider-track {
    background-color: transparent;
    background-image: linear-gradient(to right, rgb(38, 128, 235), rgb(9, 90, 186));
    box-shadow: inset 0 0 0 1px rgba(0,0,0,0.05);
  }
.spectrum-Slider--color .spectrum-Slider-track::before {
      display: none;
    }
.spectrum-Slider--color .spectrum-Slider-handle {
    box-shadow: inset 0 0 0 1px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.05);
    border-color: rgb(255, 255, 255);
    background: rgba(0, 0, 0, 0);
  }
.spectrum-Slider--color .spectrum-Slider-handle.is-focused {
      box-shadow: 0 0 0 1px rgba(0,0,0,0.05);
    }
/* topdoc
{{ slider/dial.yml }}
*/
/* topdoc
{{ slider/dial-label.yml }}
*/
.spectrum-Dial-handle {
  box-shadow: none;
}
.spectrum-Dial-handle::after {
    background-color: rgb(110, 110, 110);
  }
.spectrum-Dial-handle:hover::after {
      background-color: rgb(75, 75, 75);
    }
.spectrum-Dial-handle.is-focused {
    background-color: rgb(38, 128, 235);

    border-color: rgb(38, 128, 235);
  }
.spectrum-Dial-handle.is-focused::after {
      background-color: rgb(255, 255, 255);
    }
.spectrum-Dial-handle:active,
  .spectrum-Dial-handle.is-dragged {
    background-color: rgb(75, 75, 75);

    border-color: rgb(75, 75, 75);
  }
.spectrum-Dial-handle:active::after, .spectrum-Dial-handle.is-dragged::after {
      background-color: rgb(255, 255, 255);
    }
.spectrum-Dial-controls::before,
  .spectrum-Dial-controls::after {
    background-color: rgb(142, 142, 142);
  }
.spectrum-Dial.is-disabled .spectrum-Dial-labelContainer {
      color: rgb(179, 179, 179);
    }
.spectrum-Dial.is-disabled .spectrum-Dial-controls::after,
      .spectrum-Dial.is-disabled .spectrum-Dial-controls::before {
        background-color: rgb(202, 202, 202);
      }
.spectrum-Dial.is-disabled .spectrum-Dial-handle {
      border-color: rgb(202, 202, 202);
      background: rgb(245, 245, 245);
    }
.spectrum-Dial.is-disabled .spectrum-Dial-handle:hover,
      .spectrum-Dial.is-disabled .spectrum-Dial-handle:active {
        border-color: rgb(202, 202, 202);
        background: rgba(0, 0, 0, 0);
      }
.spectrum-Dial.is-disabled .spectrum-Dial-handle::after,
      .spectrum-Dial.is-disabled .spectrum-Dial-handle::before {
        background-color: rgb(225, 225, 225);
      }
.spectrum-Slider.is-disabled .spectrum-Slider-labelContainer,
.spectrum-Slider.is-disabled .spectrum-Dial-labelContainer {
      color: rgb(179, 179, 179);
    }
.spectrum-Slider.is-disabled .spectrum-Slider-handle {
      border-color: rgb(202, 202, 202);
      background: rgb(245, 245, 245);
    }
.spectrum-Slider.is-disabled .spectrum-Slider-handle:hover,
      .spectrum-Slider.is-disabled .spectrum-Slider-handle:active {
        border-color: rgb(202, 202, 202);
        background: rgba(0, 0, 0, 0);
      }
.spectrum-Slider.is-disabled .spectrum-Slider-track::before {
        background: rgb(225, 225, 225);
      }
.spectrum-Slider.is-disabled.spectrum-Slider--filled .spectrum-Slider-track:first-child::before {
          background: rgb(225, 225, 225);
        }
.spectrum-Slider.is-disabled .spectrum-Slider-buffer::before {
        background: rgb(225, 225, 225);
      }
.spectrum-Slider.is-disabled .spectrum-Slider-ramp path {
        fill: rgb(234, 234, 234);
      }
.spectrum-Slider.is-disabled.spectrum-Slider--color .spectrum-Slider-track {
        background: rgb(234, 234, 234) !important;
        box-shadow: none;
      }
.spectrum-Slider.is-disabled.spectrum-Slider--color .spectrum-Slider-handle {
        background: rgba(0, 0, 0, 0);
        box-shadow: none;
        border-color: rgb(202, 202, 202);
      }
.spectrum-Slider.is-disabled.spectrum-Slider--color .spectrum-Slider-handle:hover,
        .spectrum-Slider.is-disabled.spectrum-Slider--color .spectrum-Slider-handle:active {
          background: rgba(0, 0, 0, 0);
          box-shadow: none;
          border-color: rgb(202, 202, 202);
        }
.spectrum-Slider.is-disabled.spectrum-Slider--range .spectrum-Slider-track:not(:first-of-type):not(:last-of-type):before {
            background: rgb(225, 225, 225);
          }`;
    }
}