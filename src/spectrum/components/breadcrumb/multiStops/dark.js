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
.spectrum--dark {

/* topdoc
{{ breadcrumb/breadcrumb.yml }}
*/

/* topdoc
{{ breadcrumb/breadcrumb-title.yml }}
*/
}
.spectrum--dark .spectrum-Breadcrumbs-item {
  color: rgb(157, 157, 157);
}
.spectrum--dark .spectrum-Breadcrumbs-item .spectrum-Breadcrumbs-itemSeparator {
    color: rgb(92, 92, 92);
  }
.spectrum--dark .spectrum-Breadcrumbs-item .spectrum-Breadcrumbs-itemLink {
    color: inherit;
    text-decoration: none;
  }
.spectrum--dark .spectrum-Breadcrumbs-item .spectrum-Breadcrumbs-itemLink:hover {
      color: rgb(255, 255, 255);
    }
.spectrum--dark .spectrum-Breadcrumbs-item .spectrum-Breadcrumbs-itemLink.focus-ring {
      color: rgb(75, 156, 245);
      outline: 0;
      border-bottom: 2px solid rgb(75, 156, 245);
    }
.spectrum--dark .spectrum-Breadcrumbs-item .spectrum-Breadcrumbs-itemLink:active {
      color: rgb(255, 255, 255);
      border-bottom: 0;
    }
.spectrum--dark .spectrum-Breadcrumbs-item.is-selected,
  .spectrum--dark .spectrum-Breadcrumbs-item:last-of-type {
    color: rgb(255, 255, 255);
  }
.spectrum--dark .spectrum-Breadcrumbs-item.is-selected ~ .spectrum-Breadcrumb:last-of-type {
        color: rgb(157, 157, 157);
      }
.spectrum--dark .spectrum-Breadcrumbs-item.is-selected .spectrum-Breadcrumbs-itemLink.focus-ring {
        color: rgb(255, 255, 255);
        border-bottom: 0;
      }`;
    }
}