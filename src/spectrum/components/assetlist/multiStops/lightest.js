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
.spectrum--lightest .spectrum-AssetList-item:hover {
    background-color: rgb(244, 244, 244);
  }
.spectrum--lightest .spectrum-AssetList-item:focus.focus-ring,
    .spectrum--lightest .spectrum-AssetList-item:focus.is-focused {
      background-color: rgb(244, 244, 244);
    }
.spectrum--lightest .spectrum-AssetList-item:focus.focus-ring::before, .spectrum--lightest .spectrum-AssetList-item:focus.is-focused::before {
        /* we cannot achieve rounded corners with outline so we use box-shadow instead */
        box-shadow: 0px 0px 0px 2px rgb(55, 142, 240) inset;
      }
.spectrum--lightest .spectrum-AssetList-item.is-navigated {
    /* gray background */
    background-color: rgb(234, 234, 234);
  }
.spectrum--lightest .spectrum-AssetList-item.is-navigated:hover,
    .spectrum--lightest .spectrum-AssetList-item.is-navigated:focus {
      background-color: rgb(234, 234, 234);
    }
.spectrum--lightest .spectrum-AssetList-item.is-selected {
    background-color: rgba(38,128,235,0.1);
  }
.spectrum--lightest .spectrum-AssetList-item.is-selected:hover,
    .spectrum--lightest .spectrum-AssetList-item.is-selected:focus {
      background-color: rgba(38,128,235,0.2);
    }`;
    }
}