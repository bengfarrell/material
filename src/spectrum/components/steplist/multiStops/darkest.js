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
.spectrum--darkest .spectrum-Steplist .spectrum-Steplist-label {
    color: rgb(105, 105, 105)
  }
/* Default Marker Style is 'incomplete' */
.spectrum--darkest .spectrum-Steplist .spectrum-Steplist-marker {
    border-color: rgb(45, 45, 45)
  }
/* Default Line Style is 'incomplete' */
.spectrum--darkest .spectrum-Steplist .spectrum-Steplist-segment {
    border-bottom-color: rgb(45, 45, 45)
  }
/* Step Completed */
.spectrum--darkest .spectrum-Steplist .spectrum-Steplist-item.is-complete .spectrum-Steplist-label {
        color: rgb(135, 135, 135)
      }
.spectrum--darkest .spectrum-Steplist .spectrum-Steplist-item.is-complete .spectrum-Steplist-marker {
        background-color: rgb(105, 105, 105)
      }
/* Step Selected aka Current */
.spectrum--darkest .spectrum-Steplist .spectrum-Steplist-item.is-selected .spectrum-Steplist-label {
        color: rgb(180, 180, 180)
      }
.spectrum--darkest .spectrum-Steplist .spectrum-Steplist-item.is-selected .spectrum-Steplist-marker {
        background-color: rgb(180, 180, 180)
      }
.spectrum--darkest .spectrum-Steplist .spectrum-Steplist-item.is-complete .spectrum-Steplist-segment, .spectrum--darkest .spectrum-Steplist .spectrum-Steplist-item.is-selected .spectrum-Steplist-segment {
        border-bottom-color: rgb(73, 73, 73)
      }
/* Interactivity Styles */
/* Step Focused */
.spectrum--darkest .spectrum-Steplist.spectrum-Steplist--interactive .spectrum-Steplist-item:focus .spectrum-Steplist-marker {
          background-color: rgb(20, 115, 230)
        }`;
    }
}