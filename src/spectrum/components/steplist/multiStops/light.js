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
/* Default Label Style is 'incomplete' */
.spectrum--light .spectrum-Steplist .spectrum-Steplist-label {
    color: rgb(142, 142, 142)
  }
/* Default Marker Style is 'incomplete' */
.spectrum--light .spectrum-Steplist .spectrum-Steplist-marker {
    border-color: rgb(225, 225, 225)
  }
/* Default Line Style is 'incomplete' */
.spectrum--light .spectrum-Steplist .spectrum-Steplist-segment {
    border-bottom-color: rgb(225, 225, 225)
  }
/* Step Completed */
.spectrum--light .spectrum-Steplist .spectrum-Steplist-item.is-complete .spectrum-Steplist-label {
        color: rgb(110, 110, 110)
      }
.spectrum--light .spectrum-Steplist .spectrum-Steplist-item.is-complete .spectrum-Steplist-marker {
        background-color: rgb(142, 142, 142)
      }
/* Step Selected aka Current */
.spectrum--light .spectrum-Steplist .spectrum-Steplist-item.is-selected .spectrum-Steplist-label {
        color: rgb(75, 75, 75)
      }
.spectrum--light .spectrum-Steplist .spectrum-Steplist-item.is-selected .spectrum-Steplist-marker {
        background-color: rgb(75, 75, 75)
      }
.spectrum--light .spectrum-Steplist .spectrum-Steplist-item.is-complete .spectrum-Steplist-segment, .spectrum--light .spectrum-Steplist .spectrum-Steplist-item.is-selected .spectrum-Steplist-segment {
        border-bottom-color: rgb(179, 179, 179)
      }
/* Interactivity Styles */
/* Step Focused */
.spectrum--light .spectrum-Steplist.spectrum-Steplist--interactive .spectrum-Steplist-item:focus .spectrum-Steplist-marker {
          background-color: rgb(38, 128, 235)
        }`;
    }
}