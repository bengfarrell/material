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
.spectrum--lightest {

/* topdoc
{{ breadcrumb/breadcrumb.yml }}
*/

/* topdoc
{{ breadcrumb/breadcrumb-title.yml }}
*/
}
.spectrum--lightest .spectrum-Breadcrumbs-item {
  color: rgb(116, 116, 116);
}
.spectrum--lightest .spectrum-Breadcrumbs-item .spectrum-Breadcrumbs-itemSeparator {
    color: rgb(188, 188, 188);
  }
.spectrum--lightest .spectrum-Breadcrumbs-item .spectrum-Breadcrumbs-itemLink {
    color: inherit;
    text-decoration: none;
  }
.spectrum--lightest .spectrum-Breadcrumbs-item .spectrum-Breadcrumbs-itemLink:hover {
      color: rgb(50, 50, 50);
    }
.spectrum--lightest .spectrum-Breadcrumbs-item .spectrum-Breadcrumbs-itemLink.focus-ring {
      color: rgb(20, 115, 230);
      outline: 0;
      border-bottom: 2px solid rgb(20, 115, 230);
    }
.spectrum--lightest .spectrum-Breadcrumbs-item .spectrum-Breadcrumbs-itemLink:active {
      color: rgb(50, 50, 50);
      border-bottom: 0;
    }
.spectrum--lightest .spectrum-Breadcrumbs-item.is-selected,
  .spectrum--lightest .spectrum-Breadcrumbs-item:last-of-type {
    color: rgb(50, 50, 50);
  }
.spectrum--lightest .spectrum-Breadcrumbs-item.is-selected ~ .spectrum-Breadcrumb:last-of-type {
        color: rgb(116, 116, 116);
      }
.spectrum--lightest .spectrum-Breadcrumbs-item.is-selected .spectrum-Breadcrumbs-itemLink.focus-ring {
        color: rgb(50, 50, 50);
        border-bottom: 0;
      }`;
    }
}