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
    color: rgb(149, 149, 149)
  }
/* Default Marker Style is 'incomplete' */
.spectrum-Steplist .spectrum-Steplist-marker {
    border-color: rgb(234, 234, 234)
  }
/* Default Line Style is 'incomplete' */
.spectrum-Steplist .spectrum-Steplist-segment {
    border-bottom-color: rgb(234, 234, 234)
  }
/* Step Completed */
.spectrum-Steplist .spectrum-Steplist-item.is-complete .spectrum-Steplist-label {
        color: rgb(116, 116, 116)
      }
.spectrum-Steplist .spectrum-Steplist-item.is-complete .spectrum-Steplist-marker {
        background-color: rgb(149, 149, 149)
      }
/* Step Selected aka Current */
.spectrum-Steplist .spectrum-Steplist-item.is-selected .spectrum-Steplist-label {
        color: rgb(80, 80, 80)
      }
.spectrum-Steplist .spectrum-Steplist-item.is-selected .spectrum-Steplist-marker {
        background-color: rgb(80, 80, 80)
      }
.spectrum-Steplist .spectrum-Steplist-item.is-complete .spectrum-Steplist-segment, .spectrum-Steplist .spectrum-Steplist-item.is-selected .spectrum-Steplist-segment {
        border-bottom-color: rgb(188, 188, 188)
      }
/* Interactivity Styles */
/* Step Focused */
.spectrum-Steplist.spectrum-Steplist--interactive .spectrum-Steplist-item:focus .spectrum-Steplist-marker {
          background-color: rgb(55, 142, 240)
        }`;
    }
}