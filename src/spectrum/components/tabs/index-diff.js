export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
.spectrum--large .spectrum-Tabs {
  padding: 0 11px;
}
/* generated from dna-version: 5.3.0 */
.spectrum--large .spectrum-Tabs-item {

  height: 58px;
  line-height: 58px;

  transition: color 130ms ease-out;
}
.spectrum--large .spectrum-Tabs-item .spectrum-Icon {
    height: 58px;
  }
.spectrum--large .spectrum-Tabs-item .spectrum-Icon + .spectrum-Tabs-itemLabel {
      margin-left: 8px;
    }
.spectrum--large .spectrum-Tabs-item::before {

    height: 40px;
    margin-top: -19px;
    left: -11px;
    right: -11px;
    border: 2px solid transparent;
    border-radius: 6px;
  }
.spectrum--large .spectrum-Tabs-itemLabel {

  font-size: 17px;
  font-weight: 400
}
.spectrum--large .spectrum-Tabs-selectionIndicator {

  transition: transform 130ms ease-in-out;

  border-radius: 1px;
}
.spectrum--large .spectrum-Tabs--compact .spectrum-Tabs-item {
    height: 38px;
    line-height: 38px;
  }
.spectrum--large .spectrum-Tabs--compact .spectrum-Tabs-item .spectrum-Icon {
      height: 38px;
    }
.spectrum--large .spectrum-Tabs--horizontal {

  border-bottom: 2px solid;
}
.spectrum--large .spectrum-Tabs--horizontal .spectrum-Tabs-item + *:not(.spectrum-Tabs-selectionIndicator) {
      margin-left: 30px;
    }
.spectrum--large .spectrum-Tabs--horizontal .spectrum-Tabs-selectionIndicator {
    height: 2px;

    bottom: -2px;
  }
.spectrum--large .spectrum-Tabs--horizontal.spectrum-Tabs--compact {
    height: 38px;
  }
.spectrum--large .spectrum-Tabs--vertical .spectrum-Tabs-item {
    margin-left: 2px;
  }
.spectrum--large .spectrum-Tabs--vertical .spectrum-Tabs-item::before {
      margin-top: -20px;
    }
.spectrum--large .spectrum-Tabs--vertical .spectrum-Tabs-selectionIndicator {
    left: 2px;
    width: 2px;
  }`;
    }
}