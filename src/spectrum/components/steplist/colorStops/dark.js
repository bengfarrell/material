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
.spectrum-Steplist .spectrum-Steplist-label {
    color: rgb(123, 123, 123)
  }
/* Default Marker Style is 'incomplete' */
.spectrum-Steplist .spectrum-Steplist-marker {
    border-color: rgb(62, 62, 62)
  }
/* Default Line Style is 'incomplete' */
.spectrum-Steplist .spectrum-Steplist-segment {
    border-bottom-color: rgb(62, 62, 62)
  }
/* Step Completed */
.spectrum-Steplist .spectrum-Steplist-item.is-complete .spectrum-Steplist-label {
        color: rgb(157, 157, 157)
      }
.spectrum-Steplist .spectrum-Steplist-item.is-complete .spectrum-Steplist-marker {
        background-color: rgb(123, 123, 123)
      }
/* Step Selected aka Current */
.spectrum-Steplist .spectrum-Steplist-item.is-selected .spectrum-Steplist-label {
        color: rgb(205, 205, 205)
      }
.spectrum-Steplist .spectrum-Steplist-item.is-selected .spectrum-Steplist-marker {
        background-color: rgb(205, 205, 205)
      }
.spectrum-Steplist .spectrum-Steplist-item.is-complete .spectrum-Steplist-segment, .spectrum-Steplist .spectrum-Steplist-item.is-selected .spectrum-Steplist-segment {
        border-bottom-color: rgb(92, 92, 92)
      }
/* Interactivity Styles */
/* Step Focused */
.spectrum-Steplist.spectrum-Steplist--interactive .spectrum-Steplist-item:focus .spectrum-Steplist-marker {
          background-color: rgb(38, 128, 235)
        }`;
    }
}