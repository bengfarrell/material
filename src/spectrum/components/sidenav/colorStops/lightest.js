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
{{ sidenav/sidenav.yml }}
*/
/* topdoc
{{ sidenav/sidenav-multilevel.yml }}
*/
.spectrum-SideNav-item.is-selected > .spectrum-SideNav-itemLink {
      color: rgb(50, 50, 50);
      background-color: rgba(50,50,50,0.06);
    }
.spectrum-SideNav-item .is-active > .spectrum-SideNav-itemLink {
      background-color: rgba(50,50,50,0.06);
    }
/* Disable all children */
.spectrum-SideNav-item.is-disabled .spectrum-SideNav-itemLink {
      background-color: rgba(0, 0, 0, 0);
      color: rgb(188, 188, 188);

      cursor: default;
      pointer-events: none;
    }
.spectrum-SideNav-itemLink {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(80, 80, 80);
}
.spectrum-SideNav-itemLink:hover {
    background-color: rgba(50,50,50,0.06);
    color: rgb(50, 50, 50);
  }
.spectrum-SideNav-itemLink:active {
    background-color: rgba(50,50,50,0.06);
  }
.spectrum-SideNav-itemLink.focus-ring {
    background-color: rgba(50,50,50,0.06);
    color: rgb(50, 50, 50);
  }
.spectrum-SideNav-itemLink.focus-ring::before {
      border-color: rgb(55, 142, 240);
    }
.spectrum-SideNav-heading {
  color: rgb(116, 116, 116);
}`;
    }
}