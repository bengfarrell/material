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
.spectrum--dark .spectrum-Button.focus-ring {
    box-shadow: 0 0 0 1px rgb(20, 115, 230);
  }
.spectrum--dark .spectrum-Button:active {
    /* Override focus -- clicking with spacebar should not show outline */
    box-shadow: none;
  }
.spectrum--dark .spectrum-ClearButton {
  background-color: rgba(0, 0, 0, 0);

  color: rgb(123, 123, 123);
}
.spectrum--dark .spectrum-ClearButton:hover {
    background-color: rgba(0, 0, 0, 0);

    color: rgb(255, 255, 255);
  }
.spectrum--dark .spectrum-ClearButton:active {
    background-color: rgba(0, 0, 0, 0);

    color: rgb(255, 255, 255);
  }
.spectrum--dark .spectrum-ClearButton.focus-ring {
    background-color: rgba(0, 0, 0, 0);

    color: rgb(255, 255, 255);
  }
.spectrum--dark .spectrum-ClearButton:disabled,
  .spectrum--dark .spectrum-ClearButton.is-disabled {
    background-color: rgba(0, 0, 0, 0);

    color: rgb(92, 92, 92);
  }
/* topdoc
{{ button/button-cta.yml }}
*/
.spectrum--dark .spectrum-Button--cta {
  background-color: rgb(20, 115, 230);
  border-color: rgb(20, 115, 230);
  color: rgb(255, 255, 255);
}
.spectrum--dark .spectrum-Button--cta:hover {
    background-color: rgb(13, 102, 208);
    border-color: rgb(13, 102, 208);
    color: rgb(255, 255, 255);
  }
.spectrum--dark .spectrum-Button--cta.focus-ring {
    background-color: rgb(20, 115, 230);
    border-color: rgb(20, 115, 230);
    color: rgb(255, 255, 255);
  }
.spectrum--dark .spectrum-Button--cta:active {
    background-color: rgb(13, 102, 208);
    border-color: rgb(13, 102, 208);
    color: rgb(255, 255, 255);
  }
.spectrum--dark .spectrum-Button--cta:disabled,
  .spectrum--dark .spectrum-Button--cta.is-disabled {
    background-color: rgb(57, 57, 57);
    border-color: rgb(57, 57, 57);
    color: rgb(92, 92, 92);
  }
/* topdoc
{{ button/button-primary.yml }}
*/
.spectrum--dark .spectrum-Button--primary {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(205, 205, 205);
  color: rgb(205, 205, 205);
}
.spectrum--dark .spectrum-Button--primary:hover {
    background-color: rgb(205, 205, 205);
    border-color: rgb(205, 205, 205);
    color: rgb(37, 37, 37);
  }
.spectrum--dark .spectrum-Button--primary.focus-ring {
    background-color: rgb(20, 115, 230);
    border-color: rgb(20, 115, 230);
    color: rgb(255, 255, 255);
  }
.spectrum--dark .spectrum-Button--primary:active {
    background-color: rgb(255, 255, 255);
    border-color: rgb(255, 255, 255);
    color: rgb(37, 37, 37);
  }
.spectrum--dark .spectrum-Button--primary:disabled,
  .spectrum--dark .spectrum-Button--primary.is-disabled {
    background-color: rgb(57, 57, 57);
    border-color: rgb(57, 57, 57);
    color: rgb(92, 92, 92);
  }
/* topdoc
{{ button/button-secondary.yml }}
*/
.spectrum--dark .spectrum-Button--secondary {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(157, 157, 157);
  color: rgb(157, 157, 157);
}
.spectrum--dark .spectrum-Button--secondary:hover {
    background-color: rgb(157, 157, 157);
    border-color: rgb(157, 157, 157);
    color: rgb(37, 37, 37);
  }
.spectrum--dark .spectrum-Button--secondary.focus-ring {
    background-color: rgb(20, 115, 230);
    border-color: rgb(20, 115, 230);
    color: rgb(255, 255, 255);
  }
.spectrum--dark .spectrum-Button--secondary:active {
    background-color: rgb(205, 205, 205);
    border-color: rgb(205, 205, 205);
    color: rgb(37, 37, 37);
  }
.spectrum--dark .spectrum-Button--secondary:disabled,
  .spectrum--dark .spectrum-Button--secondary.is-disabled {
    background-color: rgb(57, 57, 57);
    border-color: rgb(57, 57, 57);
    color: rgb(92, 92, 92);
  }
/* topdoc
{{ button/button-warning.yml }}
*/
.spectrum--dark .spectrum-Button--warning {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(247, 109, 116);
  color: rgb(247, 109, 116);
}
.spectrum--dark .spectrum-Button--warning:hover {
    background-color: rgb(247, 109, 116);
    border-color: rgb(247, 109, 116);
    color: rgb(37, 37, 37);
  }
.spectrum--dark .spectrum-Button--warning.focus-ring {
    background-color: rgb(20, 115, 230);
    border-color: rgb(20, 115, 230);
    color: rgb(255, 255, 255);
  }
.spectrum--dark .spectrum-Button--warning:active {
    background-color: rgb(255, 123, 130);
    border-color: rgb(255, 123, 130);
    color: rgb(37, 37, 37);
  }
.spectrum--dark .spectrum-Button--warning:disabled,
  .spectrum--dark .spectrum-Button--warning.is-disabled {
    background-color: rgb(57, 57, 57);
    border-color: rgb(57, 57, 57);
    color: rgb(92, 92, 92);
  }
/* topdoc
{{ button/button-over-background.yml }}
*/
.spectrum--dark .spectrum-Button--overBackground {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}
.spectrum--dark .spectrum-Button--overBackground:hover {
    background-color: rgb(255, 255, 255);
    border-color: rgb(255, 255, 255);
    color: inherit;
  }
.spectrum--dark .spectrum-Button--overBackground.focus-ring {
    background-color: rgb(255, 255, 255);
    border-color: rgb(255, 255, 255);
    color: inherit;
    box-shadow: 0 0 0 1px rgb(255, 255, 255);
  }
.spectrum--dark .spectrum-Button--overBackground:active {
    background-color: rgb(255, 255, 255);
    border-color: rgb(255, 255, 255);
    color: inherit;
    box-shadow: none;
  }
.spectrum--dark .spectrum-Button--overBackground:disabled,
  .spectrum--dark .spectrum-Button--overBackground.is-disabled {
    background-color: rgba(255,255,255,0.1);
    border-color: rgba(0, 0, 0, 0);
    color: rgba(255,255,255,0.35);
  }
/* topdoc
{{ button/button-quiet-over-background.yml }}
*/
.spectrum--dark .spectrum-Button--overBackground.spectrum-Button--quiet,
.spectrum--dark .spectrum-ClearButton--overBackground {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
}
.spectrum--dark .spectrum-Button--overBackground.spectrum-Button--quiet:hover, .spectrum--dark .spectrum-ClearButton--overBackground:hover {
    background-color: rgba(255,255,255,0.1);
    border-color: rgba(0, 0, 0, 0);
    color: rgb(255, 255, 255);
  }
.spectrum--dark .spectrum-Button--overBackground.spectrum-Button--quiet.focus-ring, .spectrum--dark .spectrum-ClearButton--overBackground.focus-ring {
    background-color: rgb(255, 255, 255);
    border-color: rgb(255, 255, 255);
    color: inherit;
    box-shadow: 0 0 0 1px rgb(255, 255, 255);
  }
.spectrum--dark .spectrum-Button--overBackground.spectrum-Button--quiet:active, .spectrum--dark .spectrum-ClearButton--overBackground:active {
    background-color: rgba(255,255,255,0.15);
    border-color: rgba(0, 0, 0, 0);
    color: rgb(255, 255, 255);
    box-shadow: none;
  }
.spectrum--dark .spectrum-Button--overBackground.spectrum-Button--quiet:disabled,
  .spectrum--dark .spectrum-Button--overBackground.spectrum-Button--quiet.is-disabled,
  .spectrum--dark .spectrum-ClearButton--overBackground:disabled,
  .spectrum--dark .spectrum-ClearButton--overBackground.is-disabled {
    background-color: rgba(0, 0, 0, 0);
    border-color: rgba(0, 0, 0, 0);
    color: rgba(255,255,255,0.15);
  }
/* topdoc
{{ button/button-quiet-primary.yml }}
*/
.spectrum--dark .spectrum-Button--primary.spectrum-Button--quiet {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
  color: rgb(205, 205, 205);
}
.spectrum--dark .spectrum-Button--primary.spectrum-Button--quiet:hover {
    background-color: rgb(57, 57, 57);
    border-color: rgb(57, 57, 57);
    color: rgb(255, 255, 255);
  }
.spectrum--dark .spectrum-Button--primary.spectrum-Button--quiet.focus-ring {
    background-color: rgb(20, 115, 230);
    border-color: rgb(20, 115, 230);
    color: rgb(255, 255, 255);
  }
.spectrum--dark .spectrum-Button--primary.spectrum-Button--quiet:active {
    background-color: rgb(62, 62, 62);
    border-color: rgb(62, 62, 62);
    color: rgb(255, 255, 255);
  }
.spectrum--dark .spectrum-Button--primary.spectrum-Button--quiet:disabled,
  .spectrum--dark .spectrum-Button--primary.spectrum-Button--quiet.is-disabled {
    background-color: rgba(0, 0, 0, 0);
    border-color: rgba(0, 0, 0, 0);
    color: rgb(92, 92, 92);
  }
/* topdoc
{{ button/button-quiet-secondary.yml }}
*/
.spectrum--dark .spectrum-Button--secondary.spectrum-Button--quiet {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
  color: rgb(157, 157, 157);
}
.spectrum--dark .spectrum-Button--secondary.spectrum-Button--quiet:hover {
    background-color: rgb(57, 57, 57);
    border-color: rgb(57, 57, 57);
    color: rgb(205, 205, 205);
  }
.spectrum--dark .spectrum-Button--secondary.spectrum-Button--quiet.focus-ring {
    background-color: rgb(20, 115, 230);
    border-color: rgb(20, 115, 230);
    color: rgb(255, 255, 255);
  }
.spectrum--dark .spectrum-Button--secondary.spectrum-Button--quiet:active {
    background-color: rgb(62, 62, 62);
    border-color: rgb(62, 62, 62);
    color: rgb(205, 205, 205);
  }
.spectrum--dark .spectrum-Button--secondary.spectrum-Button--quiet:disabled,
  .spectrum--dark .spectrum-Button--secondary.spectrum-Button--quiet.is-disabled {
    background-color: rgba(0, 0, 0, 0);
    border-color: rgba(0, 0, 0, 0);
    color: rgb(92, 92, 92);
  }
/* topdoc
{{ button/actionbutton.yml }}
*/
.spectrum--dark .spectrum-ActionButton,
.spectrum--dark .spectrum-Tool {
  background-color: rgb(47, 47, 47);
  border-color: rgb(62, 62, 62);
  color: rgb(205, 205, 205);
}
.spectrum--dark .spectrum-ActionButton .spectrum-Icon,
.spectrum--dark .spectrum-Tool .spectrum-Icon {
    color: rgb(157, 157, 157);
  }
.spectrum--dark .spectrum-ActionButton .spectrum-ActionButton-hold,
.spectrum--dark .spectrum-Tool .spectrum-ActionButton-hold {
    color: rgb(157, 157, 157);
  }
.spectrum--dark .spectrum-ActionButton:hover,
.spectrum--dark .spectrum-Tool:hover {
    background-color: rgb(37, 37, 37);
    border-color: rgb(77, 77, 77);
    box-shadow: none;
    color: rgb(255, 255, 255);
  }
.spectrum--dark .spectrum-ActionButton:hover .spectrum-Icon,
.spectrum--dark .spectrum-Tool:hover .spectrum-Icon {
      color: rgb(255, 255, 255);
    }
.spectrum--dark .spectrum-ActionButton:hover .spectrum-ActionButton-hold,
.spectrum--dark .spectrum-Tool:hover .spectrum-ActionButton-hold {
      color: rgb(255, 255, 255);
    }
.spectrum--dark .spectrum-ActionButton.focus-ring,
.spectrum--dark .spectrum-Tool.focus-ring {
    background-color: rgb(37, 37, 37);
    border-color: rgb(38, 128, 235);
    box-shadow: 0 0 0 1px rgb(38, 128, 235);
    color: rgb(255, 255, 255);
  }
.spectrum--dark .spectrum-ActionButton.focus-ring .spectrum-Icon,
.spectrum--dark .spectrum-Tool.focus-ring .spectrum-Icon {
      color: rgb(255, 255, 255);
    }
.spectrum--dark .spectrum-ActionButton.focus-ring .spectrum-ActionButton-hold,
.spectrum--dark .spectrum-Tool.focus-ring .spectrum-ActionButton-hold {
      color: rgb(255, 255, 255);
    }
.spectrum--dark .spectrum-ActionButton:active,
.spectrum--dark .spectrum-Tool:active {
    background-color: rgb(57, 57, 57);
    border-color: rgb(77, 77, 77);
    box-shadow: none;
    color: rgb(255, 255, 255);
  }
.spectrum--dark .spectrum-ActionButton:active .spectrum-ActionButton-hold,
.spectrum--dark .spectrum-Tool:active .spectrum-ActionButton-hold {
      color: rgb(255, 255, 255);
    }
.spectrum--dark .spectrum-ActionButton:disabled,
.spectrum--dark .spectrum-ActionButton.is-disabled,
.spectrum--dark .spectrum-Tool:disabled {
    background-color: rgb(57, 57, 57);
    border-color: rgb(57, 57, 57);
    color: rgb(92, 92, 92);
  }
.spectrum--dark .spectrum-ActionButton:disabled .spectrum-Icon,
.spectrum--dark .spectrum-ActionButton.is-disabled .spectrum-Icon,
.spectrum--dark .spectrum-Tool:disabled .spectrum-Icon {
      color: rgb(77, 77, 77);
    }
.spectrum--dark .spectrum-ActionButton:disabled .spectrum-ActionButton-hold,
.spectrum--dark .spectrum-ActionButton.is-disabled .spectrum-ActionButton-hold,
.spectrum--dark .spectrum-Tool:disabled .spectrum-ActionButton-hold {
      color: rgb(77, 77, 77);
    }
.spectrum--dark .spectrum-ActionButton.is-selected {
    background-color: rgb(57, 57, 57);
    border-color: rgb(62, 62, 62);
    color: rgb(205, 205, 205);
  }
.spectrum--dark .spectrum-ActionButton.is-selected .spectrum-Icon {
      color: rgb(157, 157, 157);
    }
.spectrum--dark .spectrum-ActionButton.is-selected.focus-ring {
      background-color: rgb(57, 57, 57);
      border-color: rgb(38, 128, 235);
      color: rgb(255, 255, 255);
    }
.spectrum--dark .spectrum-ActionButton.is-selected.focus-ring .spectrum-Icon {
        color: rgb(255, 255, 255);
      }
.spectrum--dark .spectrum-ActionButton.is-selected:hover {
      background-color: rgb(57, 57, 57);
      border-color: rgb(77, 77, 77);
      color: rgb(255, 255, 255);
    }
.spectrum--dark .spectrum-ActionButton.is-selected:hover .spectrum-Icon {
        color: rgb(255, 255, 255);
      }
.spectrum--dark .spectrum-ActionButton.is-selected:active {
      background-color: rgb(57, 57, 57);
      border-color: rgb(77, 77, 77);
      color: rgb(255, 255, 255);
    }
.spectrum--dark .spectrum-ActionButton.is-selected:active .spectrum-Icon {
        color: rgb(255, 255, 255);
      }
.spectrum--dark .spectrum-ActionButton.is-selected:disabled,
    .spectrum--dark .spectrum-ActionButton.is-selected.is-disabled {
      background-color: rgb(57, 57, 57);
      border-color: rgb(57, 57, 57);
      color: rgb(92, 92, 92);
    }
.spectrum--dark .spectrum-ActionButton.is-selected:disabled .spectrum-Icon, .spectrum--dark .spectrum-ActionButton.is-selected.is-disabled .spectrum-Icon {
        color: rgb(77, 77, 77);
      }
/* topdoc
{{ button/actionbutton-quiet.yml }}
*/
.spectrum--dark .spectrum-ActionButton--quiet,
.spectrum--dark .spectrum-Tool {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
  color: rgb(205, 205, 205);
}
.spectrum--dark .spectrum-ActionButton--quiet:hover,
.spectrum--dark .spectrum-Tool:hover {
    background-color: rgba(0, 0, 0, 0);
    border-color: rgba(0, 0, 0, 0);
    color: rgb(255, 255, 255);
    box-shadow: none;
  }
.spectrum--dark .spectrum-ActionButton--quiet.focus-ring,
.spectrum--dark .spectrum-Tool.focus-ring {
    background-color: rgba(0, 0, 0, 0);
    box-shadow: 0 0 0 1px rgb(38, 128, 235);
    border-color: rgb(38, 128, 235);
    color: rgb(255, 255, 255);
  }
.spectrum--dark .spectrum-ActionButton--quiet:active,
.spectrum--dark .spectrum-Tool:active {
    background-color: rgb(62, 62, 62);
    border-color: rgb(62, 62, 62);
    color: rgb(255, 255, 255);
    box-shadow: none;
  }
.spectrum--dark .spectrum-ActionButton--quiet:disabled,
.spectrum--dark .spectrum-ActionButton--quiet.is-disabled,
.spectrum--dark .spectrum-Tool:disabled {
    background-color: rgba(0, 0, 0, 0);
    border-color: rgba(0, 0, 0, 0);
    color: rgb(92, 92, 92);
  }
.spectrum--dark .spectrum-ActionButton--quiet.is-selected {
    background-color: rgb(62, 62, 62);
    border-color: rgb(62, 62, 62);
    color: rgb(205, 205, 205);
  }
.spectrum--dark .spectrum-ActionButton--quiet.is-selected.focus-ring {
      background-color: rgb(62, 62, 62);
      border-color: rgb(38, 128, 235);
      color: rgb(255, 255, 255);
    }
.spectrum--dark .spectrum-ActionButton--quiet.is-selected:hover {
      background-color: rgb(62, 62, 62);
      border-color: rgb(62, 62, 62);
      color: rgb(255, 255, 255);
    }
.spectrum--dark .spectrum-ActionButton--quiet.is-selected:active {
      background-color: rgb(62, 62, 62);
      border-color: rgb(62, 62, 62);
      color: rgb(255, 255, 255);
    }
.spectrum--dark .spectrum-ActionButton--quiet.is-selected:disabled,
    .spectrum--dark .spectrum-ActionButton--quiet.is-selected.is-disabled {
      background-color: rgb(57, 57, 57);
      border-color: rgb(57, 57, 57);
      color: rgb(92, 92, 92);
    }
/* topdoc
{{ button/button-quiet-warning.yml }}
*/
.spectrum--dark .spectrum-Button--warning.spectrum-Button--quiet {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
  color: rgb(236, 91, 98);
}
.spectrum--dark .spectrum-Button--warning.spectrum-Button--quiet:hover {
    background-color: rgb(57, 57, 57);
    border-color: rgb(57, 57, 57);
    color: rgb(247, 109, 116);
  }
.spectrum--dark .spectrum-Button--warning.spectrum-Button--quiet.focus-ring {
    background-color: rgb(20, 115, 230);
    border-color: rgb(20, 115, 230);
    color: rgb(255, 255, 255);
  }
.spectrum--dark .spectrum-Button--warning.spectrum-Button--quiet:active {
    background-color: rgb(62, 62, 62);
    border-color: rgb(62, 62, 62);
    color: rgb(247, 109, 116);
  }
.spectrum--dark .spectrum-Button--warning.spectrum-Button--quiet:disabled,
  .spectrum--dark .spectrum-Button--warning.spectrum-Button--quiet.is-disabled {
    background-color: rgba(0, 0, 0, 0);
    border-color: rgba(0, 0, 0, 0);
    color: rgb(92, 92, 92);
  }
/* topdoc
{{ button/logicbutton.yml }}
*/
.spectrum--dark .spectrum-LogicButton--and {
  background-color: rgb(55, 142, 240);
  border-color: rgb(55, 142, 240);
  color: rgb(255, 255, 255);
}
.spectrum--dark .spectrum-LogicButton--and:hover {
    background-color: rgb(90, 169, 250);
    border-color: rgb(90, 169, 250);
    color: rgb(255, 255, 255);
  }
.spectrum--dark .spectrum-LogicButton--and.focus-ring {
    background-color: rgb(90, 169, 250);
    border-color: rgb(38, 128, 235);
    color: rgb(255, 255, 255);
  }
.spectrum--dark .spectrum-LogicButton--and:disabled,
  .spectrum--dark .spectrum-LogicButton--and.is-disabled {
    background-color: rgb(57, 57, 57);
    border-color: rgb(57, 57, 57);
    color: rgb(92, 92, 92);
  }
.spectrum--dark .spectrum-LogicButton--or {
  background-color: rgb(226, 73, 157);
  border-color: rgb(226, 73, 157);
  color: rgb(255, 255, 255);
}
.spectrum--dark .spectrum-LogicButton--or:hover {
    background-color: rgb(245, 107, 183);
    border-color: rgb(245, 107, 183);
    color: rgb(255, 255, 255);
  }
.spectrum--dark .spectrum-LogicButton--or.focus-ring {
    background-color: rgb(245, 107, 183);
    border-color: rgb(38, 128, 235);
    color: rgb(255, 255, 255);
  }
.spectrum--dark .spectrum-LogicButton--or:disabled,
  .spectrum--dark .spectrum-LogicButton--or.is-disabled {
    background-color: rgb(57, 57, 57);
    border-color: rgb(57, 57, 57);
    color: rgb(92, 92, 92);
  }
/* topdoc
{{ button/clearbutton-medium.yml }}
*/
.spectrum--dark .spectrum-FieldButton {
  color: rgb(205, 205, 205);
  background-color: rgb(47, 47, 47);
  border-color: rgb(62, 62, 62);
}
.spectrum--dark .spectrum-FieldButton:hover {
    color: rgb(255, 255, 255);
    background-color: rgb(37, 37, 37);
    border-color: rgb(77, 77, 77);
  }
.spectrum--dark .spectrum-FieldButton.focus-ring,
  .spectrum--dark .spectrum-FieldButton.is-focused {
    background-color: rgb(37, 37, 37);
    border-color: rgb(38, 128, 235);
    box-shadow: 0 0 0 1px rgb(38, 128, 235);
    color: rgb(255, 255, 255);
  }
.spectrum--dark .spectrum-FieldButton.focus-ring.is-placeholder, .spectrum--dark .spectrum-FieldButton.is-focused.is-placeholder {
      color: rgb(255, 255, 255);
    }
.spectrum--dark .spectrum-FieldButton:active,
  .spectrum--dark .spectrum-FieldButton.is-selected {
    background-color: rgb(57, 57, 57);
    border-color: rgb(77, 77, 77);
  }
.spectrum--dark .spectrum-FieldButton:active.focus-ring,
    .spectrum--dark .spectrum-FieldButton:active.is-focused,
    .spectrum--dark .spectrum-FieldButton.is-selected.focus-ring,
    .spectrum--dark .spectrum-FieldButton.is-selected.is-focused {
      box-shadow: none;
    }
.spectrum--dark .spectrum-FieldButton.is-invalid {
    border-color: rgb(236, 91, 98);
  }
.spectrum--dark .spectrum-FieldButton.is-invalid:hover {
      border-color: rgb(247, 109, 116);
    }
.spectrum--dark .spectrum-FieldButton.is-invalid:active,
    .spectrum--dark .spectrum-FieldButton.is-invalid.is-selected {
      border-color: rgb(247, 109, 116);
    }
.spectrum--dark .spectrum-FieldButton.is-invalid.focus-ring,
    .spectrum--dark .spectrum-FieldButton.is-invalid.is-focused {
      border-color: rgb(38, 128, 235);
      box-shadow: 0 0 0 1px rgb(38, 128, 235);
    }
.spectrum--dark .spectrum-FieldButton:disabled,
  .spectrum--dark .spectrum-FieldButton.is-disabled {
    background-color: rgb(57, 57, 57);
    color: rgb(92, 92, 92);
  }
.spectrum--dark .spectrum-FieldButton:disabled.focus-ring, .spectrum--dark .spectrum-FieldButton.is-disabled.focus-ring {
      box-shadow: none;
    }
.spectrum--dark .spectrum-FieldButton:disabled .spectrum-Icon, .spectrum--dark .spectrum-FieldButton.is-disabled .spectrum-Icon {
      color: rgb(77, 77, 77);
    }
.spectrum--dark .spectrum-FieldButton--quiet {
  color: rgb(205, 205, 205);
  border-color: rgba(0, 0, 0, 0);
  background-color: rgba(0, 0, 0, 0);
}
.spectrum--dark .spectrum-FieldButton--quiet:hover {
    background-color: rgba(0, 0, 0, 0);
    color: rgb(255, 255, 255);
  }
.spectrum--dark .spectrum-FieldButton--quiet.focus-ring,
  .spectrum--dark .spectrum-FieldButton--quiet.is-focused {
    background-color: rgba(0, 0, 0, 0);
    box-shadow: 0 2px 0 0 rgb(38, 128, 235);
  }
.spectrum--dark .spectrum-FieldButton--quiet.focus-ring.is-placeholder, .spectrum--dark .spectrum-FieldButton--quiet.is-focused.is-placeholder {
      color: rgb(255, 255, 255);
    }
.spectrum--dark .spectrum-FieldButton--quiet:active,
  .spectrum--dark .spectrum-FieldButton--quiet.is-selected {
    background-color: rgba(0, 0, 0, 0);
    border-color: rgba(0, 0, 0, 0);
  }
.spectrum--dark .spectrum-FieldButton--quiet:active.focus-ring,
    .spectrum--dark .spectrum-FieldButton--quiet:active.is-focused,
    .spectrum--dark .spectrum-FieldButton--quiet.is-selected.focus-ring,
    .spectrum--dark .spectrum-FieldButton--quiet.is-selected.is-focused {
      background-color: rgba(0, 0, 0, 0);
      box-shadow: 0 2px 0 0 rgb(38, 128, 235);
    }
.spectrum--dark .spectrum-FieldButton--quiet.is-invalid.focus-ring,
    .spectrum--dark .spectrum-FieldButton--quiet.is-invalid.is-focused {
      box-shadow: 0 2px 0 0 rgb(38, 128, 235);
    }
.spectrum--dark .spectrum-FieldButton--quiet:disabled,
  .spectrum--dark .spectrum-FieldButton--quiet.is-disabled {
    background-color: rgba(0, 0, 0, 0);
    color: rgb(92, 92, 92);
  }
.spectrum--dark .spectrum-FieldButton--quiet:disabled.focus-ring, .spectrum--dark .spectrum-FieldButton--quiet.is-disabled.focus-ring {
      box-shadow: none;
    }
.spectrum--dark .spectrum-Tool.is-selected .spectrum-Icon {
      color: rgb(55, 142, 240);
    }
.spectrum--dark .spectrum-Tool.is-selected .spectrum-Tool-hold {
      color: rgb(55, 142, 240);
    }
.spectrum--dark .spectrum-Tool.is-selected:hover .spectrum-Icon {
        color: rgb(75, 156, 245);
      }
.spectrum--dark .spectrum-Tool.is-selected:hover .spectrum-Tool-hold {
        color: rgb(75, 156, 245);
      }
.spectrum--dark .spectrum-Tool.is-selected:active .spectrum-Icon {
        color: rgb(90, 169, 250);
      }
.spectrum--dark .spectrum-Tool.is-selected:active .spectrum-Tool-hold {
        color: rgb(90, 169, 250);
      }
.spectrum--dark .spectrum-Tool.is-selected.focus-ring .spectrum-Icon {
        color: rgb(75, 156, 245);
      }
.spectrum--dark .spectrum-Tool.is-selected.focus-ring .spectrum-Tool-hold {
        color: rgb(75, 156, 245);
      }
.spectrum--dark .spectrum-Tool.is-selected:disabled,
    .spectrum--dark .spectrum-Tool.is-selected.is-disabled {
      background-color: rgba(0, 0, 0, 0);
      border-color: rgba(0, 0, 0, 0);
    }
.spectrum--dark .spectrum-Tool.is-selected:disabled .spectrum-Icon, .spectrum--dark .spectrum-Tool.is-selected.is-disabled .spectrum-Icon {
        color: rgb(77, 77, 77);
      }
.spectrum--dark .spectrum-Tool.is-selected:disabled .spectrum-Tool-hold, .spectrum--dark .spectrum-Tool.is-selected.is-disabled .spectrum-Tool-hold {
        color: rgb(77, 77, 77);
      }
.spectrum--dark .spectrum-Tool .spectrum-Tool-hold {
    color: rgb(157, 157, 157);
  }
.spectrum--dark .spectrum-Tool:hover .spectrum-Tool-hold {
      color: rgb(255, 255, 255);
    }
.spectrum--dark .spectrum-Tool:active {
    background-color: rgba(0, 0, 0, 0);
    border-color: rgba(0, 0, 0, 0);
  }
.spectrum--dark .spectrum-Tool:active .spectrum-Tool-hold {
      color: rgb(255, 255, 255);
    }
.spectrum--dark .spectrum-Tool.focus-ring .spectrum-Tool-hold {
      color: rgb(255, 255, 255);
    }
.spectrum--dark .spectrum-Tool.is-disabled .spectrum-Tool-hold, .spectrum--dark .spectrum-Tool:disabled .spectrum-Tool-hold {
      color: rgb(77, 77, 77);
    }`;
    }
}