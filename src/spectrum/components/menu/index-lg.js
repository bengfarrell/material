export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
/* generated from dna-version: 5.3.0 */
.spectrum-Menu {
  display: inline-block;

  box-sizing: border-box;

  margin: 5px 0;
  padding: 0;

  list-style-type: none;

  overflow: auto;
}
.spectrum-Menu > .spectrum-Menu-sectionHeading {
    /* Support headings as LI */
    margin-top: 4px;
    margin-bottom: 4px;
  }
.spectrum-Menu.is-selectable .spectrum-Menu-item {
      padding-right: 41px;
    }
.spectrum-Menu.is-selectable .spectrum-Menu-item.is-selected {
        padding-right: 11px;
      }
.spectrum-Menu-checkmark {
  transform: scale(1);
  opacity: 1;
}
.spectrum-Menu-item {
  cursor: pointer;
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
      align-items: center;

  box-sizing: border-box;

  padding: 9px 12px 9px 10px;

  margin: 0;

  border-left: 2px solid transparent;

  min-height: 48px;

  font-size: 17px;
  font-weight: 400;
  font-style: normal;
}
.spectrum-Menu-item:focus {
    outline: none;
  }
.spectrum-Menu-item.is-selected {
    /* Redundant, but included for backwards compatibility */
    padding-right: 11px;
  }
.spectrum-Menu-item.is-selected .spectrum-Menu-checkmark {
      display: block;
    }
.spectrum-Menu-item .spectrum-Icon {
    /* Don't get smaller, you're an icon! */
    -ms-flex-negative: 0;
        flex-shrink: 0;
  }
.spectrum-Menu-item .spectrum-Icon + .spectrum-Menu-itemLabel {
    margin-left: 10px;
  }
.spectrum-Menu-itemLabel {
  -ms-flex: 1;
      flex: 1;
}
.spectrum-Menu-itemLabel--wrapping {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.spectrum-Menu-checkmark {
  display: none;
  -ms-flex-item-align: start;
      align-self: flex-start;
  margin-top: 5px;
}
.spectrum-Menu-checkmark,
.spectrum-Menu-chevron {
  -ms-flex-positive: 0;
      flex-grow: 0;
  margin-left: 15px;
}
.spectrum-Menu-divider {
  /* Add the correct box sizing for hr in Firefox. */
  box-sizing: content-box;

  /* Show the overflow for hr in Edge and IE. */
  overflow: visible;

  height: 2px;
  margin: 1.5px 12px;
  padding: 0 0;
  border: none;
}
.spectrum-Menu-sectionHeading {
  display: block;
  margin: 8px 0 0 0;
  padding: 0 45px 0 15px;

  font-size: 13px;
  font-weight: 400;
  line-height: 25px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.spectrum-Menu .spectrum-Menu {
  /* Fill parent menu when nested */
  display: block;
}`;
    }
}