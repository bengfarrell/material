export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
/* generated from dna-version: 5.3.0 */
:root {
  /* Todo: fix in DNA, should have been zero */
}
.spectrum-Button,
.spectrum-ActionButton,
.spectrum-LogicButton,
.spectrum-FieldButton,
.spectrum-ClearButton,
.spectrum-Tool {
  display: -ms-inline-flexbox;
  display: inline-flex;
  box-sizing: border-box;

  -ms-flex-align: center;

      align-items: center;
  -ms-flex-pack: center;
      justify-content: center;

  /* Show the button overflow in Edge. */
  overflow: visible;

  /* Remove button the margin in Firefox and Safari. */
  margin: 0;

  border-style: solid;
  white-space: nowrap;

  /* Remove the inheritance of text transform on button in Edge, Firefox, and IE. */
  text-transform: none;
  -webkit-font-smoothing: antialiased;

  /* Correct the inability to style clickable types in iOS and Safari. */
  -webkit-appearance: button;

  /* Adjacent buttons should be aligned correctly */
  vertical-align: top;

  transition: background 130ms ease-out,
              border-color 130ms ease-out,
              color 130ms ease-out,
              box-shadow 130ms ease-out;

  text-decoration: none;
  font-family: adobe-clean, "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  cursor: pointer;
}
.spectrum-Button:focus,
.spectrum-ActionButton:focus,
.spectrum-LogicButton:focus,
.spectrum-FieldButton:focus,
.spectrum-ClearButton:focus,
.spectrum-Tool:focus {
    outline: none;
  }
/* Fix Firefox */
.spectrum-Button::-moz-focus-inner,
.spectrum-ActionButton::-moz-focus-inner,
.spectrum-LogicButton::-moz-focus-inner,
.spectrum-FieldButton::-moz-focus-inner,
.spectrum-ClearButton::-moz-focus-inner,
.spectrum-Tool::-moz-focus-inner {
    border: 0;

    /* Remove the inner border and padding for button in Firefox. */
    border-style: none;
    padding: 0;

    /* Use uppercase PX so values don't get converted to rem */
    margin-top: -2PX;
    margin-bottom: -2PX;
  }
/* Restore the focus styles unset by the previous rule. */
.spectrum-Button:-moz-focusring,
.spectrum-ActionButton:-moz-focusring,
.spectrum-LogicButton:-moz-focusring,
.spectrum-FieldButton:-moz-focusring,
.spectrum-ClearButton:-moz-focusring,
.spectrum-Tool:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
.spectrum-Button:disabled,
.spectrum-ActionButton:disabled,
.spectrum-LogicButton:disabled,
.spectrum-FieldButton:disabled,
.spectrum-ClearButton:disabled,
.spectrum-Tool:disabled {
    cursor: default;
  }
.spectrum-Button .spectrum-Icon,
.spectrum-ActionButton .spectrum-Icon,
.spectrum-LogicButton .spectrum-Icon,
.spectrum-FieldButton .spectrum-Icon,
.spectrum-ClearButton .spectrum-Icon,
.spectrum-Tool .spectrum-Icon {
    max-height: 100%;
    -ms-flex-negative: 0;
        flex-shrink: 0;
  }
.spectrum-Button {

  border-width: 2px;
  border-style: solid;
  border-radius: 20px;

  height: 40px;
  min-width: 90px;

  padding: 0 18px 0;

  font-size: 18px;
  font-weight: 700;

  /* Prevent vertical text alignment mismatch between anchor and button in Chrome */
  line-height: 0;
}
.spectrum-Button:hover,
  .spectrum-Button:active {
    box-shadow: none;
  }
.spectrum-Button .spectrum-Icon + .spectrum-Button-label {
    margin-left: 10px;
  }
.spectrum-Button .spectrum-Button-label + .spectrum-Icon {
    margin-left: 5px;
  }
a.spectrum-Button,
a.spectrum-ActionButton {
  /* Remove appearance for clickable types in iOS and Safari. */
  -webkit-appearance: none;
  /* Make link text not selectable  */
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
.spectrum-ActionButton,
.spectrum-Tool {
  position: relative;

  height: 40px;
  min-width: 40px;

  /* Use icon padding by default as it's smaller */
  padding: 0 8px;

  border-width: 1px;
  border-radius: 5px;

  font-size: 17px;
  font-weight: 400;
}
.spectrum-ActionButton .spectrum-Icon + .spectrum-ActionButton-label,
.spectrum-Tool .spectrum-Icon + .spectrum-ActionButton-label {
    /* Have icon padding on the left */
    padding-left: 9px;

    /* Have text padding on the right */
    padding-right: 6px;
  }
.spectrum-ActionButton .spectrum-Icon--sizeS:only-child,
.spectrum-Tool .spectrum-Icon--sizeS:only-child {
    /* Position absolutely to avoid layout errors introduced by padding */
    position: absolute;
    top: calc(50% - 11px);
    left: calc(50% - 11px);
  }
.spectrum-ActionButton .spectrum-ActionButton-label:only-child,
.spectrum-Tool .spectrum-ActionButton-label:only-child {
    /* Add padding for text only buttons */
    padding: 0 6px;
  }
.spectrum-ActionButton-hold {
  position: absolute;
  right: 4px;
  bottom: 4px;
}
.spectrum-ActionButton-label,
.spectrum-Button-label {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
      justify-content: center;
  -ms-flex-align: center;
      align-items: center;
}
.spectrum-ActionButton-label:empty, .spectrum-Button-label:empty {
    display: none;
  }
.spectrum-ActionButton--quiet,
.spectrum-Tool {
  border-width: 1px;
  border-radius: 5px;

  font-size: 17px;
  font-weight: 400;
}
.spectrum-LogicButton {

  height: 24px;
  padding: 10px;

  border-width: 2px;
  border-radius: 5px;

  font-size: 17px;
  font-weight: 700;
  line-height: 0;
}
.spectrum-FieldButton {

  height: 40px;

  padding: 0 15px;

  font-family: inherit;
  font-weight: normal;
  font-size: 17px;
  line-height: normal;
  -webkit-font-smoothing: initial;

  cursor: pointer;
  outline: none;
}
.spectrum-FieldButton {
  margin: 0;
  padding: 0 15px;

  border-width: 1px;
  border-style: solid;
  border-radius: 5px;

  transition: background-color 130ms,
    box-shadow 130ms,
    border-color 130ms;
}
.spectrum-FieldButton:disabled,
  .spectrum-FieldButton.is-disabled {
    border-width: 0;
    cursor: default;
  }
.spectrum-FieldButton.is-open {
    border-width: 1px;
  }
.spectrum-FieldButton--quiet {
  margin: 0;
  padding: 0;

  border-width: 0;
  border-radius: 0px;
}
.spectrum-ClearButton {

  width: 40px;
  height: 40px;

  border-radius: 100%;

  padding: 0;
  margin: 0;

  border: none;
}
.spectrum-ClearButton--small {
  width: 30px;
  height: 30px;
}
/* topdoc
{{ button/tool.yml }}
*/
.spectrum-Tool {

  position: relative;

  -ms-flex-pack: center;

      justify-content: center;

  width: 40px;
  height: 40px;

  padding: 0;
}
.spectrum-Tool-hold {
  position: absolute;
  right: 4px;
  bottom: 4px;
}
/* Potentially temporary: Add back default margin between all buttons when adjacent */
.spectrum-Button + .spectrum-Button {
  margin-left: 16px;
}
.spectrum-ActionButton + .spectrum-ActionButton,
.spectrum-Tool + .spectrum-Tool {
  margin-left: 10px;
}
.spectrum-Tool + .spectrum-Tool {
  margin-left: 10px;
}`;
    }
}