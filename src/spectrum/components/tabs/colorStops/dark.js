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
{{ tabs/tabs.yml }}
*/
/* topdoc
{{ tabs/tabs-quiet.yml }}
*/
/* topdoc
{{ tabs/tabs-compact.yml }}
*/
/* topdoc
{{ tabs/tabs-quiet-compact.yml }}
*/
/* topdoc
{{ tabs/tabs-vertical.yml }}
*/
.spectrum-Tabs {
  border-bottom-color: rgb(57, 57, 57);
}
.spectrum-Tabs-selectionIndicator {
  background-color: rgb(255, 255, 255);
}
.spectrum-Tabs-item {
  color: rgb(157, 157, 157);
}
.spectrum-Tabs-item:hover {
    color: rgb(255, 255, 255);
  }
.spectrum-Tabs-item.is-selected {
    color: rgb(255, 255, 255);
  }
.spectrum-Tabs-item.focus-ring::before {
      border-color: rgb(38, 128, 235);
    }
.spectrum-Tabs-item.is-disabled {
    color: rgb(92, 92, 92);
  }
.spectrum-Tabs--quiet {
  border-bottom-color: rgba(0, 0, 0, 0);
}
.spectrum-Tabs--quiet .spectrum-Tabs-selectionIndicator {
    background-color: rgb(255, 255, 255);
  }`;
    }
}