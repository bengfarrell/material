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
{{ rating/rating.yml }}
*/
.spectrum--light .spectrum-Rating-icon {
  color: rgb(142, 142, 142);
}
/* Star */
.spectrum--light .spectrum-Rating-icon .spectrum-Rating-starActive {
    display: block;
  }
.spectrum--light .spectrum-Rating-icon .spectrum-Rating-starInactive {
    display: none;
  }
.spectrum--light .spectrum-Rating:not(:hover) .spectrum-Rating-icon:not(.is-selected) {
    color: rgb(142, 142, 142);
  }
/* StarOutline */
.spectrum--light .spectrum-Rating:not(:hover) .spectrum-Rating-icon:not(.is-selected) .spectrum-Rating-starActive {
      display: none;
    }
.spectrum--light .spectrum-Rating:not(:hover) .spectrum-Rating-icon:not(.is-selected) .spectrum-Rating-starInactive {
      display: block;
    }
.spectrum--light .spectrum-Rating-icon:hover ~ .spectrum-Rating-icon:not(.is-selected) {
  color: rgb(142, 142, 142);
}
/* StarOutline */
.spectrum--light .spectrum-Rating-icon:hover ~ .spectrum-Rating-icon:not(.is-selected) .spectrum-Rating-starActive {
    display: none;
  }
.spectrum--light .spectrum-Rating-icon:hover ~ .spectrum-Rating-icon:not(.is-selected) .spectrum-Rating-starInactive {
    display: block;
  }
/* topdoc
{{ rating/rating-active.yml }}
*/
.spectrum--light .spectrum-Rating-icon:hover ~ .spectrum-Rating-icon.is-selected {
  color: rgb(142, 142, 142);
}
/* Star */
.spectrum--light .spectrum-Rating-icon:hover ~ .spectrum-Rating-icon.is-selected .spectrum-Rating-starActive {
    display: block;
  }
.spectrum--light .spectrum-Rating-icon:hover ~ .spectrum-Rating-icon.is-selected .spectrum-Rating-starInactive {
    display: none;
  }
.spectrum--light .spectrum-Rating-icon.is-selected {
    color: rgb(75, 75, 75);
  }
/* Star */
.spectrum--light .spectrum-Rating-icon.is-selected .spectrum-Rating-starActive {
      display: block;
    }
.spectrum--light .spectrum-Rating-icon.is-selected .spectrum-Rating-starInactive {
      display: none;
    }
/* topdoc
{{ rating/rating-disabled.yml }}
*/
.spectrum--light .spectrum-Rating.is-disabled .spectrum-Rating-icon.is-selected {
  color: rgb(225, 225, 225);
}
/* Star */
.spectrum--light .spectrum-Rating.is-disabled .spectrum-Rating-icon.is-selected .spectrum-Rating-starActive {
    display: block;
  }
.spectrum--light .spectrum-Rating.is-disabled .spectrum-Rating-icon.is-selected .spectrum-Rating-starInactive {
    display: none;
  }
.spectrum--light .spectrum-Rating:not(:hover).is-disabled .spectrum-Rating-icon:not(.is-selected) {
  color: rgb(225, 225, 225);
}
/* StarOutline */
.spectrum--light .spectrum-Rating:not(:hover).is-disabled .spectrum-Rating-icon:not(.is-selected) .spectrum-Rating-starActive {
    display: none;
  }
.spectrum--light .spectrum-Rating:not(:hover).is-disabled .spectrum-Rating-icon:not(.is-selected) .spectrum-Rating-starInactive {
    display: block;
  }
.spectrum--light .spectrum-Rating:not(:hover) .spectrum-Rating-input.focus-ring ~ .spectrum-Rating-icon,
      .spectrum--light .spectrum-Rating:not(:hover) .spectrum-Rating-input.focus-ring ~ .spectrum-Rating-icon:not(.is-selected),
      .spectrum--light .spectrum-Rating:not(:hover) .spectrum-Rating-input.focus-ring ~ .spectrum-Rating-icon.is-selected {
        color: rgb(20, 115, 230);

      }
.spectrum--light .spectrum-Rating:not(:hover) .spectrum-Rating-input.focus-ring ~ .spectrum-Rating-icon > .spectrum-Icon, .spectrum--light .spectrum-Rating:not(:hover) .spectrum-Rating-input.focus-ring ~ .spectrum-Rating-icon:not(.is-selected) > .spectrum-Icon, .spectrum--light .spectrum-Rating:not(:hover) .spectrum-Rating-input.focus-ring ~ .spectrum-Rating-icon.is-selected > .spectrum-Icon {
          stroke: currentColor;
          stroke-width: 1px;
        }`;
    }
}