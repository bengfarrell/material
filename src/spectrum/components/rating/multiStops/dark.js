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
.spectrum--dark .spectrum-Rating-icon {
  color: rgb(123, 123, 123);
}
/* Star */
.spectrum--dark .spectrum-Rating-icon .spectrum-Rating-starActive {
    display: block;
  }
.spectrum--dark .spectrum-Rating-icon .spectrum-Rating-starInactive {
    display: none;
  }
.spectrum--dark .spectrum-Rating:not(:hover) .spectrum-Rating-icon:not(.is-selected) {
    color: rgb(123, 123, 123);
  }
/* StarOutline */
.spectrum--dark .spectrum-Rating:not(:hover) .spectrum-Rating-icon:not(.is-selected) .spectrum-Rating-starActive {
      display: none;
    }
.spectrum--dark .spectrum-Rating:not(:hover) .spectrum-Rating-icon:not(.is-selected) .spectrum-Rating-starInactive {
      display: block;
    }
.spectrum--dark .spectrum-Rating-icon:hover ~ .spectrum-Rating-icon:not(.is-selected) {
  color: rgb(123, 123, 123);
}
/* StarOutline */
.spectrum--dark .spectrum-Rating-icon:hover ~ .spectrum-Rating-icon:not(.is-selected) .spectrum-Rating-starActive {
    display: none;
  }
.spectrum--dark .spectrum-Rating-icon:hover ~ .spectrum-Rating-icon:not(.is-selected) .spectrum-Rating-starInactive {
    display: block;
  }
/* topdoc
{{ rating/rating-active.yml }}
*/
.spectrum--dark .spectrum-Rating-icon:hover ~ .spectrum-Rating-icon.is-selected {
  color: rgb(123, 123, 123);
}
/* Star */
.spectrum--dark .spectrum-Rating-icon:hover ~ .spectrum-Rating-icon.is-selected .spectrum-Rating-starActive {
    display: block;
  }
.spectrum--dark .spectrum-Rating-icon:hover ~ .spectrum-Rating-icon.is-selected .spectrum-Rating-starInactive {
    display: none;
  }
.spectrum--dark .spectrum-Rating-icon.is-selected {
    color: rgb(205, 205, 205);
  }
/* Star */
.spectrum--dark .spectrum-Rating-icon.is-selected .spectrum-Rating-starActive {
      display: block;
    }
.spectrum--dark .spectrum-Rating-icon.is-selected .spectrum-Rating-starInactive {
      display: none;
    }
/* topdoc
{{ rating/rating-disabled.yml }}
*/
.spectrum--dark .spectrum-Rating.is-disabled .spectrum-Rating-icon.is-selected {
  color: rgb(62, 62, 62);
}
/* Star */
.spectrum--dark .spectrum-Rating.is-disabled .spectrum-Rating-icon.is-selected .spectrum-Rating-starActive {
    display: block;
  }
.spectrum--dark .spectrum-Rating.is-disabled .spectrum-Rating-icon.is-selected .spectrum-Rating-starInactive {
    display: none;
  }
.spectrum--dark .spectrum-Rating:not(:hover).is-disabled .spectrum-Rating-icon:not(.is-selected) {
  color: rgb(62, 62, 62);
}
/* StarOutline */
.spectrum--dark .spectrum-Rating:not(:hover).is-disabled .spectrum-Rating-icon:not(.is-selected) .spectrum-Rating-starActive {
    display: none;
  }
.spectrum--dark .spectrum-Rating:not(:hover).is-disabled .spectrum-Rating-icon:not(.is-selected) .spectrum-Rating-starInactive {
    display: block;
  }
.spectrum--dark .spectrum-Rating:not(:hover) .spectrum-Rating-input.focus-ring ~ .spectrum-Rating-icon,
      .spectrum--dark .spectrum-Rating:not(:hover) .spectrum-Rating-input.focus-ring ~ .spectrum-Rating-icon:not(.is-selected),
      .spectrum--dark .spectrum-Rating:not(:hover) .spectrum-Rating-input.focus-ring ~ .spectrum-Rating-icon.is-selected {
        color: rgb(20, 115, 230);

      }
.spectrum--dark .spectrum-Rating:not(:hover) .spectrum-Rating-input.focus-ring ~ .spectrum-Rating-icon > .spectrum-Icon, .spectrum--dark .spectrum-Rating:not(:hover) .spectrum-Rating-input.focus-ring ~ .spectrum-Rating-icon:not(.is-selected) > .spectrum-Icon, .spectrum--dark .spectrum-Rating:not(:hover) .spectrum-Rating-input.focus-ring ~ .spectrum-Rating-icon.is-selected > .spectrum-Icon {
          stroke: currentColor;
          stroke-width: 1px;
        }`;
    }
}