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
.spectrum--dark .spectrum-Dropzone {
  border-color: rgb(62, 62, 62);
}
.spectrum--dark .spectrum-Dropzone.is-dragged {
    border-color: rgb(38, 128, 235);
    background-color: rgba(55,142,240,0.1);
  }
.spectrum--dark .spectrum-Dropzone.is-dragged .spectrum-IllustratedMessage-illustration {
      color: rgb(38, 128, 235);
    }
.spectrum--dark .spectrum-Dropzone:focus {
    border-color: rgb(62, 62, 62);
  }
.spectrum--dark .spectrum-Dropzone:focus .spectrum-IllustratedMessage-illustration {
      color: rgb(188, 188, 188);
    }
.spectrum--dark .spectrum-Dropzone:focus.focus-ring {
      border-color: rgb(38, 128, 235);
    }
.spectrum--dark .spectrum-Dropzone:focus.is-dragged.focus-ring .spectrum-IllustratedMessage-illustration {
        color: rgb(38, 128, 235);
      }`;
    }
}