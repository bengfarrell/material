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
.spectrum-Popover {
  background-color: rgb(8, 8, 8);
  border-color: rgb(60, 60, 60);
  /*
    box-shadow offset/blur is hardcoded here as it cannot be adjusted when scale changes,
    and we'd rather it be able to change when color stops change
  */
  box-shadow: 0 1px 4px rgba(0,0,0,0.15);
}
.spectrum-Popover .spectrum-Dialog-header,
  .spectrum-Popover .spectrum-Dialog-footer,
  .spectrum-Popover .spectrum-Dialog-wrapper {
    background-color: transparent;
  }
.spectrum-Popover .spectrum-Popover-tip::after {
    background-color: rgb(8, 8, 8);
    border-color: rgb(60, 60, 60);
    /* The math is weird here since the tip is rotated 45°... Technically it should be different for each tip position */
    box-shadow: -1px -1px 4px rgba(0,0,0,0.15);
  }`;
    }
}