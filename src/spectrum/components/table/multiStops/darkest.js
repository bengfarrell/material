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
.spectrum--darkest .spectrum-Table-headCell {
  color: rgb(135, 135, 135);
  background-color: rgba(0, 0, 0, 0);
}
.spectrum--darkest .spectrum-Table-headCell.is-sortable .spectrum-Table-sortedIcon {
      color: rgb(105, 105, 105);
    }
.spectrum--darkest .spectrum-Table-headCell.is-sortable:hover {
      color: rgb(226, 226, 226);
    }
.spectrum--darkest .spectrum-Table-headCell.is-sortable:hover .spectrum-Table-sortedIcon {
        color: rgb(226, 226, 226);
      }
.spectrum--darkest .spectrum-Table-headCell.is-sortable.focus-ring,
    .spectrum--darkest .spectrum-Table-headCell.is-sortable.is-focused {
      color: rgb(226, 226, 226);
    }
.spectrum--darkest .spectrum-Table-headCell.is-sortable.focus-ring .spectrum-Table-sortedIcon, .spectrum--darkest .spectrum-Table-headCell.is-sortable.is-focused .spectrum-Table-sortedIcon {
        color: rgb(226, 226, 226);
      }
.spectrum--darkest .spectrum-Table-headCell.is-sortable:active {
      color: rgb(226, 226, 226);
    }
.spectrum--darkest .spectrum-Table-headCell.is-sortable:active .spectrum-Table-sortedIcon {
        color: rgb(226, 226, 226);
      }
/* Helper for shared drop target overlay */
.spectrum--darkest .spectrum-Table-cell.focus-ring::before, .spectrum--darkest .spectrum-Table-cell .is-focused::before, .spectrum--darkest .spectrum-Table-headCell.focus-ring::before, .spectrum--darkest .spectrum-Table-headCell .is-focused::before {
      box-shadow: inset 0 0 0 2px rgb(20, 115, 230);
    }
.spectrum--darkest .spectrum-Table-body {
  border-style: solid;
  border-color: rgb(45, 45, 45);
  background-color: rgb(8, 8, 8);
}
.spectrum--darkest .spectrum-Table-body.is-drop-target {
    border-color: rgb(20, 115, 230);
    box-shadow: 0 0 0 1px rgb(20, 115, 230);
  }
.spectrum--darkest .spectrum-Table-body.is-drop-target::before {
      background-color: rgba(38,128,235,0.1);
    }
/* The tbody tag doesn't allow setting a border-radius, so these hacks are to make that work
   by putting the border on the individual cells instead. */
.spectrum--darkest tbody.spectrum-Table-body {
  border: none;
}
.spectrum--darkest tbody.spectrum-Table-body .spectrum-Table-row {
    border-top: none;
  }
.spectrum--darkest tbody.spectrum-Table-body .spectrum-Table-cell {
    border-top: 1px solid rgb(45, 45, 45);
  }
.spectrum--darkest tbody.spectrum-Table-body .spectrum-Table-row .spectrum-Table-cell:first-child {
    border-left: 1px solid rgb(45, 45, 45);
  }
.spectrum--darkest tbody.spectrum-Table-body .spectrum-Table-row .spectrum-Table-cell:last-child {
    border-right: 1px solid rgb(45, 45, 45);
  }
.spectrum--darkest tbody.spectrum-Table-body .spectrum-Table-row:last-child .spectrum-Table-cell {
    border-bottom: 1px solid rgb(45, 45, 45);
  }
.spectrum--darkest .spectrum-Table-row {
  border-bottom: 1px solid rgb(45, 45, 45);
  background-color: rgba(0, 0, 0, 0);
}
.spectrum--darkest .spectrum-Table-row:hover {
    background-color: rgba(226,226,226,0.06);
  }
.spectrum--darkest .spectrum-Table-row.focus-ring,
  .spectrum--darkest .spectrum-Table-row.is-focused {
    background-color: rgba(226,226,226,0.06);
  }
.spectrum--darkest .spectrum-Table-row:active {
    background-color: rgba(226,226,226,0.1);
  }
.spectrum--darkest .spectrum-Table-row.is-selected {
    background-color: rgba(38,128,235,0.1);
  }
.spectrum--darkest .spectrum-Table-row.is-selected:hover {
      background-color: rgba(38,128,235,0.2);
    }
.spectrum--darkest .spectrum-Table-row.is-selected.focus-ring,
    .spectrum--darkest .spectrum-Table-row.is-selected.is-focused {
      background-color: rgba(38,128,235,0.2);
    }
.spectrum--darkest .spectrum-Table-row.is-drop-target::before {
      box-shadow: inset 0 0 0 2px rgb(20, 115, 230);
      background-color: rgba(38,128,235,0.1);
    }
.spectrum--darkest .spectrum-Table-cell {
  color: rgb(180, 180, 180);
  background-color: rgba(0, 0, 0, 0);
}
.spectrum--darkest .spectrum-Table-cell--divider {
  border-right-style: solid;
  border-right-color: rgb(45, 45, 45);
}
.spectrum--darkest .spectrum-Table--quiet .spectrum-Table-body {
    border-width: 1px 0;
    background-color: rgba(0, 0, 0, 0);
  }
.spectrum--darkest .spectrum-Table--quiet .spectrum-Table-body.is-drop-target {
      box-shadow: none;
      border-color: transparent;
    }
.spectrum--darkest .spectrum-Table--quiet .spectrum-Table-body.is-drop-target::before {
        box-shadow: inset 0 0 0 2px rgb(20, 115, 230);
      }
.spectrum--darkest .spectrum-Table--quiet .spectrum-Table-row {
    background-color: rgba(0, 0, 0, 0);
  }
.spectrum--darkest .spectrum-Table--quiet .spectrum-Table-row:hover {
      background-color: rgba(226,226,226,0.06);
    }
.spectrum--darkest .spectrum-Table--quiet .spectrum-Table-row.focus-ring,
    .spectrum--darkest .spectrum-Table--quiet .spectrum-Table-row.is-focused {
      background-color: rgba(226,226,226,0.06);
    }
.spectrum--darkest .spectrum-Table--quiet .spectrum-Table-row:active {
      background-color: rgba(226,226,226,0.1);
    }
.spectrum--darkest .spectrum-Table--quiet .spectrum-Table-row.is-selected {
      background-color: rgba(38,128,235,0.1);
    }
.spectrum--darkest .spectrum-Table--quiet .spectrum-Table-row.is-selected:hover {
        background-color: rgba(38,128,235,0.2);
      }
.spectrum--darkest .spectrum-Table--quiet .spectrum-Table-row.is-selected.focus-ring,
      .spectrum--darkest .spectrum-Table--quiet .spectrum-Table-row.is-selected.is-focused {
        background-color: rgba(38,128,235,0.2);
      }
.spectrum--darkest .spectrum-Table--quiet tbody.spectrum-Table-body .spectrum-Table-row .spectrum-Table-cell:first-child,
    .spectrum--darkest .spectrum-Table--quiet tbody.spectrum-Table-body .spectrum-Table-row .spectrum-Table-cell:last-child {
      border-left: none;
      border-right: none;
    }`;
    }
}