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
.spectrum--light .spectrum-Card {
  border-color: rgb(234, 234, 234);
  background-color: rgb(255, 255, 255);
}
.spectrum--light .spectrum-Card:hover {
    border-color: rgb(202, 202, 202);
  }
.spectrum--light .spectrum-Card.is-selected,
  .spectrum--light .spectrum-Card:focus {
    border-color: rgb(38, 128, 235);
    box-shadow: 0 0 0 1px rgb(38, 128, 235);
  }
.spectrum--light .spectrum-Card.is-drop-target {
    border-color: rgb(38, 128, 235);
    box-shadow: 0 0 0 1px rgb(38, 128, 235);
    background-color: rgba(20,115,230,0.1);
  }
.spectrum--light .spectrum-Card-description {
  color: rgb(110, 110, 110);
}
.spectrum--light .spectrum-Card-coverPhoto {
  background-color: rgb(234, 234, 234);
  border-bottom-color: rgb(234, 234, 234);
}
.spectrum--light .spectrum-Card-footer {
  border-color: rgb(234, 234, 234);
}
.spectrum--light .spectrum-Card--quiet,
.spectrum--light .spectrum-Card--gallery {
  border-color: transparent;
  background-color: transparent;
}
.spectrum--light .spectrum-Card--quiet .spectrum-Card-preview, .spectrum--light .spectrum-Card--gallery .spectrum-Card-preview {
    background-color: rgb(234, 234, 234);
  }
.spectrum--light .spectrum-Card--quiet:hover, .spectrum--light .spectrum-Card--gallery:hover {
    border-color: transparent;
  }
.spectrum--light .spectrum-Card--quiet:hover .spectrum-Card-preview, .spectrum--light .spectrum-Card--gallery:hover .spectrum-Card-preview {
      background-color: rgb(225, 225, 225);
    }
.spectrum--light .spectrum-Card--quiet.is-selected,
  .spectrum--light .spectrum-Card--quiet:focus,
  .spectrum--light .spectrum-Card--gallery.is-selected,
  .spectrum--light .spectrum-Card--gallery:focus {
    border-color: transparent;
    box-shadow: none;
  }
.spectrum--light .spectrum-Card--quiet.is-selected .spectrum-Card-preview, .spectrum--light .spectrum-Card--quiet:focus .spectrum-Card-preview, .spectrum--light .spectrum-Card--gallery.is-selected .spectrum-Card-preview, .spectrum--light .spectrum-Card--gallery:focus .spectrum-Card-preview {
      background-color: rgb(234, 234, 234);
    }
.spectrum--light .spectrum-Card--quiet.is-selected .spectrum-Card-preview:before, .spectrum--light .spectrum-Card--quiet:focus .spectrum-Card-preview:before, .spectrum--light .spectrum-Card--gallery.is-selected .spectrum-Card-preview:before, .spectrum--light .spectrum-Card--gallery:focus .spectrum-Card-preview:before {
        border-color: rgb(20, 115, 230);
        box-shadow: 0 0 0 1px rgb(20, 115, 230);
      }
.spectrum--light .spectrum-Card--quiet.is-drop-target, .spectrum--light .spectrum-Card--gallery.is-drop-target {
    border-color: transparent;
    background-color: transparent;
    box-shadow: none;
  }
.spectrum--light .spectrum-Card--quiet.is-drop-target .spectrum-Card-preview, .spectrum--light .spectrum-Card--gallery.is-drop-target .spectrum-Card-preview {
      background-color: rgba(20,115,230,0.1);
    }
.spectrum--light .spectrum-Card--quiet.is-drop-target .spectrum-Card-preview:before, .spectrum--light .spectrum-Card--gallery.is-drop-target .spectrum-Card-preview:before {
        border-color: rgb(20, 115, 230);
        box-shadow: 0 0 0 1px rgb(20, 115, 230);
      }
.spectrum--light .spectrum-Card--quiet.is-drop-target .spectrum-Asset-folderBackground,
    .spectrum--light .spectrum-Card--quiet.is-drop-target .spectrum-Asset-fileBackground,
    .spectrum--light .spectrum-Card--gallery.is-drop-target .spectrum-Asset-folderBackground,
    .spectrum--light .spectrum-Card--gallery.is-drop-target .spectrum-Asset-fileBackground {
      fill: rgba(20,115,230,0.1);
    }
.spectrum--light .spectrum-Card--quiet.is-drop-target .spectrum-Asset-folderOutline,
    .spectrum--light .spectrum-Card--quiet.is-drop-target .spectrum-Asset-fileOutline,
    .spectrum--light .spectrum-Card--gallery.is-drop-target .spectrum-Asset-folderOutline,
    .spectrum--light .spectrum-Card--gallery.is-drop-target .spectrum-Asset-fileOutline {
      fill: rgb(20, 115, 230);
    }
.spectrum--light .spectrum-Card--quiet .spectrum-Card-title, .spectrum--light .spectrum-Card--gallery .spectrum-Card-title {
    color: rgb(75, 75, 75);
  }
.spectrum--light .spectrum-Card--quiet .spectrum-Card-subtitle, .spectrum--light .spectrum-Card--gallery .spectrum-Card-subtitle {
    color: rgb(110, 110, 110);
  }`;
    }
}