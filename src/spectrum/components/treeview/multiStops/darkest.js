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
.spectrum--darkest .spectrum-TreeView-itemLink {
  color: rgb(180, 180, 180);
}
.spectrum--darkest .spectrum-TreeView-itemLink:hover,
  .spectrum--darkest .spectrum-TreeView-itemLink.is-selected {
    color: rgb(226, 226, 226);
  }
.spectrum--darkest .spectrum-TreeView-itemLink:hover::before, .spectrum--darkest .spectrum-TreeView-itemLink.is-selected::before {
      background-color: rgba(226,226,226,0.04);
    }
.spectrum--darkest .spectrum-TreeView-itemLink.focus-ring {
    color: rgb(226, 226, 226);
  }
.spectrum--darkest .spectrum-TreeView-itemLink.focus-ring::before {
      background-color: rgba(226,226,226,0.04);

      /* we cannot achieve rounded corners with outline so we use box-shadow instead */
      box-shadow: 0px 0px 0px 2px rgb(20, 115, 230) inset;
    }
.spectrum--darkest .spectrum-TreeView-itemLink.is-drop-target::before {
      background-color: rgba(38,128,235,0.1);
      box-shadow: 0px 0px 0px 2px rgb(20, 115, 230) inset;
    }`;
    }
}