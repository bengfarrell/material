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
.spectrum--darkest .spectrum-Alert {
  background-color: rgb(8, 8, 8);
  /* default color set to body color, header element overwrites this */
  color: rgb(135, 135, 135);
}
.spectrum--darkest .spectrum-Alert-header {
  color: rgb(226, 226, 226);
}
.spectrum--darkest .spectrum-Alert-content {
  color: rgb(135, 135, 135);
}
/* topdoc
{{ alert/alert-info.yml }}
*/
.spectrum--darkest .spectrum-Alert--info {
  border-color: rgb(20, 115, 230);
}
.spectrum--darkest .spectrum-Alert--info .spectrum-Alert-icon {
    color: rgb(20, 115, 230);
  }
/* topdoc
{{ alert/alert-help.yml }}
*/
.spectrum--darkest .spectrum-Alert--help {
  border-color: rgb(20, 115, 230);
}
.spectrum--darkest .spectrum-Alert--help .spectrum-Alert-icon {
    color: rgb(20, 115, 230);
  }
/* topdoc
{{ alert/alert-error.yml }}
*/
.spectrum--darkest .spectrum-Alert--error {
  border-color: rgb(215, 55, 63);
}
.spectrum--darkest .spectrum-Alert--error .spectrum-Alert-icon {
    color: rgb(215, 55, 63);
  }
/* topdoc
{{ alert/alert-success.yml }}
*/
.spectrum--darkest .spectrum-Alert--success {
  border-color: rgb(38, 142, 108);
}
.spectrum--darkest .spectrum-Alert--success .spectrum-Alert-icon {
    color: rgb(38, 142, 108);
  }
/* topdoc
{{ alert/alert-warning.yml }}
*/
.spectrum--darkest .spectrum-Alert--warning {
  border-color: rgb(218, 123, 17);
}
.spectrum--darkest .spectrum-Alert--warning .spectrum-Alert-icon {
    color: rgb(218, 123, 17);
  }`;
    }
}