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
.spectrum-Calendar-prevMonth {
  color: rgb(157, 157, 157);
}
.spectrum-Calendar-nextMonth {
  color: rgb(157, 157, 157);
}
.spectrum-Calendar-dayOfWeek {
  color: rgb(157, 157, 157);
}
.spectrum-Calendar-date:hover {
    color: rgb(255, 255, 255);
  }
.spectrum-Calendar-date:hover:not(.is-selection-end):not(.is-selection-start):before {
        background: rgba(255,255,255,0.06);
      }
.spectrum-Calendar-date:hover.is-selected {
      color: rgb(255, 255, 255);
    }
.spectrum-Calendar-date:hover.is-selected:not(.is-selection-end):not(.is-selection-start):before {
          background: rgba(55,142,240,0.2);
        }
.spectrum-Calendar-date:hover.is-range-selection:before {
        background: rgba(55,142,240,0.2);
      }
.spectrum-Calendar-date:active {
    background-color: rgba(255,255,255,0.1);
  }
.spectrum-Calendar-date.is-selected {
    color: rgb(255, 255, 255);
    background: rgba(55,142,240,0.1);
  }
.spectrum-Calendar-date.is-selected:not(.is-range-selection) {
    background: rgba(55,142,240,0.2);
  }
.spectrum-Calendar-date.is-today {
    color: rgb(205, 205, 205);
    border-color: rgb(205, 205, 205);
  }
.spectrum-Calendar-date.is-today:before {
      border-color: rgb(205, 205, 205);
    }
.spectrum-Calendar-date.is-today:hover.is-selected:not(.is-range-selection):before {
          background: rgba(55,142,240,0.2);
        }
.spectrum-Calendar-date.is-today.is-disabled {
      color: rgb(92, 92, 92);
      border-color: rgb(77, 77, 77);
    }
.spectrum-Calendar-date.is-today.is-disabled:before {
        border-color: rgb(77, 77, 77);
      }
.spectrum-Calendar-date.is-focused:not(.is-range-selection) {
    background: rgba(255,255,255,0.06);
    border-color: rgb(38, 128, 235);
    color: rgb(255, 255, 255);
  }
.spectrum-Calendar-date.is-focused:not(.is-range-selection).is-today {
      border-color: rgb(38, 128, 235);
    }
.spectrum-Calendar-date.is-focused:not(.is-range-selection):active,
    .spectrum-Calendar-date.is-focused:not(.is-range-selection).is-selected {
      color: rgb(255, 255, 255);
      background: rgba(55,142,240,0.2);
      border-color: rgb(38, 128, 235);
    }
.spectrum-Calendar-date.is-focused.is-selected:before {
        background: rgba(55,142,240,0.2);
      }
.spectrum-Calendar-date.is-focused.is-range-selection:before {
        background: rgba(55,142,240,0.2);
      }
.spectrum-Calendar-date.is-disabled {
    color: rgb(92, 92, 92);
  }
.spectrum-Calendar-date.is-selection-start,
  .spectrum-Calendar-date.is-selection-end {
    color: rgb(255, 255, 255);
  }
.spectrum-Calendar-date.is-selection-start:after, .spectrum-Calendar-date.is-selection-end:after {
      background-color: rgba(55,142,240,0.1);
    }
.spectrum-Calendar-date.is-selection-start.is-disabled, .spectrum-Calendar-date.is-selection-end.is-disabled {
      color: rgb(92, 92, 92);
    }`;
    }
}