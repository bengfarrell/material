export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
/* generated from dna-version: 5.3.0 */
.spectrum-Tabs {
  display: -ms-flexbox;
  display: flex;

  /* Contain the selection indicator */
  position: relative;
  z-index: 0;

  margin: 0;
  padding: 0 11px;

  /* Friends should align to the top of the tabs */
  vertical-align: top;
}
.spectrum-Tabs-item {
  /* Contain the focus ring */
  position: relative;

  box-sizing: border-box;

  height: 58px;
  line-height: 58px;

  /* Float above the tab line */
  z-index: 1;

  text-decoration: none;
  white-space: nowrap;

  transition: color 130ms ease-out;
  cursor: pointer;
  outline: none;
}
.spectrum-Tabs-item.is-disabled {
    cursor: default;
  }
.spectrum-Tabs-item.is-disabled .spectrum-Tabs-itemLabel {
      cursor: default;
    }
.spectrum-Tabs-item .spectrum-Icon {
    /* Vertical centering */
    height: 58px;
  }
.spectrum-Tabs-item .spectrum-Icon + .spectrum-Tabs-itemLabel {
      /* Icons really aren't supposed to be here, so there is no gap variable in DNA */
      margin-left: 8px;
    }
.spectrum-Tabs-item::before {
    content: '';
    position: absolute;
    top: 50%;

    box-sizing: border-box;

    height: 40px;
    margin-top: -19px;
    left: -11px;
    right: -11px;
    border: 2px solid transparent;
    border-radius: 6px;

    pointer-events: none;
  }
.spectrum-Tabs-itemLabel {
  cursor: pointer;
  vertical-align: top;
  display: inline-block;

  font-size: 17px;
  font-weight: 400;
}
.spectrum-Tabs-itemLabel:empty {
    /* Hide the tab label if it's not being used */
    display: none;
  }
.spectrum-Tabs-selectionIndicator {
  position: absolute;
  left: 0;

  /* Be below the tab */
  z-index: 0;

  transition: transform 130ms ease-in-out;
  transform-origin: top left;

  border-radius: 1px;
}
.spectrum-Tabs--compact .spectrum-Tabs-item {
    height: 38px;
    line-height: 38px;
  }
.spectrum-Tabs--compact .spectrum-Tabs-item .spectrum-Icon {
      /* Vertical centering */
      height: 38px;
    }
.spectrum-Tabs--horizontal {
  -ms-flex-align: center;
      align-items: center;

  border-bottom: 2px solid;
}
.spectrum-Tabs--horizontal .spectrum-Tabs-item {
    vertical-align: top;
  }
/* Target anything since React likes to add lots of happy <div>s around all things */
.spectrum-Tabs--horizontal .spectrum-Tabs-item + *:not(.spectrum-Tabs-selectionIndicator) {
      margin-left: 30px;
    }
.spectrum-Tabs--horizontal .spectrum-Tabs-selectionIndicator {
    position: absolute;
    bottom: 0;
    height: 2px;

    bottom: -2px;
  }
.spectrum-Tabs--horizontal.spectrum-Tabs--compact {
    /* The ActionButton is taller than the tabs, so don't push tabs around */
    box-sizing: content-box;
    height: 38px;
    -ms-flex-align: end;
        align-items: end;

    /* Optimization: margin is the same for compact and normal tabs */
    /*
    .spectrum-Tabs-item {
      & + .spectrum-Tabs-item {
        margin-left: var(--spectrum-tabs-quiet-compact-item-gap);
      }
    }
    */
  }
/* Quiet tabs should not extend all the way across the screen as their line doesn't */
.spectrum-Tabs--quiet {
  display: -ms-inline-flexbox;
  display: inline-flex;
}
.spectrum-Tabs--vertical {
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-direction: column;
      flex-direction: column;
}
.spectrum-Tabs--vertical .spectrum-Tabs-item {
    margin-left: 2px;
  }
.spectrum-Tabs--vertical .spectrum-Tabs-item::before {
      margin-top: -20px;
    }
.spectrum-Tabs--vertical .spectrum-Tabs-selectionIndicator {
    top: 0;
    left: 2px;
    width: 2px;
  }
/* topdoc
{{ tabs/tabs-toomany.yml }}
*/`;
    }
}