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
.spectrum--light {

/* topdoc
{{ breadcrumb/breadcrumb.yml }}
*/

/* topdoc
{{ breadcrumb/breadcrumb-title.yml }}
*/
}
.spectrum--light .spectrum-Breadcrumbs-item {
  color: rgb(110, 110, 110);
}
.spectrum--light .spectrum-Breadcrumbs-item .spectrum-Breadcrumbs-itemSeparator {
    color: rgb(179, 179, 179);
  }
.spectrum--light .spectrum-Breadcrumbs-item .spectrum-Breadcrumbs-itemLink {
    color: inherit;
    text-decoration: none;
  }
.spectrum--light .spectrum-Breadcrumbs-item .spectrum-Breadcrumbs-itemLink:hover {
      color: rgb(44, 44, 44);
    }
.spectrum--light .spectrum-Breadcrumbs-item .spectrum-Breadcrumbs-itemLink.focus-ring {
      color: rgb(13, 102, 208);
      outline: 0;
      border-bottom: 2px solid rgb(13, 102, 208);
    }
.spectrum--light .spectrum-Breadcrumbs-item .spectrum-Breadcrumbs-itemLink:active {
      color: rgb(44, 44, 44);
      border-bottom: 0;
    }
.spectrum--light .spectrum-Breadcrumbs-item.is-selected,
  .spectrum--light .spectrum-Breadcrumbs-item:last-of-type {
    color: rgb(44, 44, 44);
  }
.spectrum--light .spectrum-Breadcrumbs-item.is-selected ~ .spectrum-Breadcrumb:last-of-type {
        color: rgb(110, 110, 110);
      }
.spectrum--light .spectrum-Breadcrumbs-item.is-selected .spectrum-Breadcrumbs-itemLink.focus-ring {
        color: rgb(44, 44, 44);
        border-bottom: 0;
      }`;
    }
}