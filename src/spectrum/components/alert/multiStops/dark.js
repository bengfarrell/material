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
.spectrum--dark .spectrum-Alert {
  background-color: rgb(37, 37, 37);
  /* default color set to body color, header element overwrites this */
  color: rgb(157, 157, 157);
}
.spectrum--dark .spectrum-Alert-header {
  color: rgb(255, 255, 255);
}
.spectrum--dark .spectrum-Alert-content {
  color: rgb(157, 157, 157);
}
/* topdoc
{{ alert/alert-info.yml }}
*/
.spectrum--dark .spectrum-Alert--info {
  border-color: rgb(38, 128, 235);
}
.spectrum--dark .spectrum-Alert--info .spectrum-Alert-icon {
    color: rgb(38, 128, 235);
  }
/* topdoc
{{ alert/alert-help.yml }}
*/
.spectrum--dark .spectrum-Alert--help {
  border-color: rgb(38, 128, 235);
}
.spectrum--dark .spectrum-Alert--help .spectrum-Alert-icon {
    color: rgb(38, 128, 235);
  }
/* topdoc
{{ alert/alert-error.yml }}
*/
.spectrum--dark .spectrum-Alert--error {
  border-color: rgb(227, 72, 80);
}
.spectrum--dark .spectrum-Alert--error .spectrum-Alert-icon {
    color: rgb(227, 72, 80);
  }
/* topdoc
{{ alert/alert-success.yml }}
*/
.spectrum--dark .spectrum-Alert--success {
  border-color: rgb(45, 157, 120);
}
.spectrum--dark .spectrum-Alert--success .spectrum-Alert-icon {
    color: rgb(45, 157, 120);
  }
/* topdoc
{{ alert/alert-warning.yml }}
*/
.spectrum--dark .spectrum-Alert--warning {
  border-color: rgb(230, 134, 25);
}
.spectrum--dark .spectrum-Alert--warning .spectrum-Alert-icon {
    color: rgb(230, 134, 25);
  }`;
    }
}