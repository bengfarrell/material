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
.spectrum--darkest .spectrum-AssetList-item:hover {
    background-color: rgb(38, 38, 38);
  }
.spectrum--darkest .spectrum-AssetList-item:focus.focus-ring,
    .spectrum--darkest .spectrum-AssetList-item:focus.is-focused {
      background-color: rgb(38, 38, 38);
    }
.spectrum--darkest .spectrum-AssetList-item:focus.focus-ring::before, .spectrum--darkest .spectrum-AssetList-item:focus.is-focused::before {
        /* we cannot achieve rounded corners with outline so we use box-shadow instead */
        box-shadow: 0px 0px 0px 2px rgb(20, 115, 230) inset;
      }
.spectrum--darkest .spectrum-AssetList-item.is-navigated {
    /* gray background */
    background-color: rgb(45, 45, 45);
  }
.spectrum--darkest .spectrum-AssetList-item.is-navigated:hover,
    .spectrum--darkest .spectrum-AssetList-item.is-navigated:focus {
      background-color: rgb(45, 45, 45);
    }
.spectrum--darkest .spectrum-AssetList-item.is-selected {
    background-color: rgba(38,128,235,0.1);
  }
.spectrum--darkest .spectrum-AssetList-item.is-selected:hover,
    .spectrum--darkest .spectrum-AssetList-item.is-selected:focus {
      background-color: rgba(38,128,235,0.2);
    }`;
    }
}