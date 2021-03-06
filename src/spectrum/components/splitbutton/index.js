export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
/* generated from dna-version: 5.3.0 */
/* topdoc
{{ splitbutton/splitbutton-cta.yml }}
*/
/* topdoc
{{ splitbutton/splitbutton-primary.yml }}
*/
/* topdoc
{{ splitbutton/splitbutton-secondary.yml }}
*/
.spectrum-SplitButton {
  position: relative;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-direction: row;
      flex-direction: row;
  vertical-align: top;
}
/* Spacing for buttons placed inline */
.spectrum-SplitButton + .spectrum-SplitButton,
  .spectrum-SplitButton + .spectrum-Button {
    margin-left: 12px;
  }
/* Spacing for buttons placed inline */
.spectrum-Button + .spectrum-SplitButton {
  margin-left: 12px;
}
.spectrum-SplitButton-action {
  margin-left: 0;

  border-radius: 16px 0 0 16px;
}
/* CTA is special and doesn't have a border between the buttons */
.spectrum-SplitButton-action.spectrum-Button--cta {
    border-right: 0;
    margin-right: 2px;
  }
.spectrum-SplitButton-action + .spectrum-SplitButton-trigger {
    /* Override button + button style */
    margin-left: 0;
  }
.spectrum-SplitButton-trigger {
  margin-left: 0;

  border-radius: 0 16px 16px 0;
  border-left-width: 0;

  padding-left: 8.00004px;
  padding-right: 10px;

  min-width: 0;
}
.spectrum-SplitButton-trigger.focus-ring {
    box-shadow: none;
  }
.spectrum-SplitButton-icon {
  display: block;
  margin-top: 1px;
}
.spectrum-SplitButton-action,
.spectrum-SplitButton-trigger {
  position: relative;
}
.spectrum-SplitButton-action:focus, .spectrum-SplitButton-trigger:focus {
    /* Be on top when focused or border leaks */
    z-index: 1;
  }
.spectrum-SplitButton-action .spectrum-Button-label + .spectrum-Icon {
    margin-left: 12px;
  }
.spectrum-SplitButton--left .spectrum-SplitButton-action {
    border-radius: 0 16px 16px 0;
    margin-right: 0;
    margin-left: 0;
  }
/* CTA is special and doesn't have a border between the buttons */
.spectrum-SplitButton--left .spectrum-SplitButton-action.spectrum-Button--cta {
      border-left: 0;
      margin-left: 2px;
    }
.spectrum-SplitButton--left .spectrum-SplitButton-trigger {
    margin-right: 0;

    border-radius: 16px 0 0 16px;

    border-left-width: 2px;
    border-right-width: 0;

    padding-right: 8.00004px;
    padding-left: 10px;
  }`;
    }
}