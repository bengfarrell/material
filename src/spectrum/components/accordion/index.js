export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
/* generated from dna-version: 5.3.0 */
/* https://git.corp.adobe.com/Spectrum/spectrum-origins/pull/60 */
:root {

  /* Subtract the size of the border since it's on the item itself */
}
/* topdoc
{{ accordion/accordion.yml }}
*/
.spectrum-Accordion {
  display: block;
  list-style: none;
  padding: 0;
  margin: 0;
}
.spectrum-Accordion-itemIndicator {
  display: block;

  position: absolute;
  left: 16px;
  top: 14.5px;

  transition: transform ease 130ms;
}
.spectrum-Accordion-item {
  z-index: inherit;
  position: relative;

  display: list-item;
  margin: 0;

  border-bottom: 1px solid transparent;
}
.spectrum-Accordion-item:first-of-type {
    border-top: 1px solid transparent;
  }
.spectrum-Accordion-itemHeader {
  position: relative;

  box-sizing: border-box;
  /* left padding takes into account the icon's size as well as the focus state's left border */
  padding: 0 16px 0 34px;
  margin: 0;

  height: 39px;

  font-size: 11px;
  text-transform: uppercase;
  line-height: 39px;
  letter-spacing: 0.0006em;

  text-overflow: ellipsis;
  cursor: pointer;
  font-weight: 500;
}
.spectrum-Accordion-itemHeader:focus {
    outline: none;
  }
.spectrum-Accordion-itemHeader:focus::after {
      content: '';

      position: absolute;
      left: 0;
      top: -1px;
      bottom: -1px;

      width: 2px;
    }
.spectrum-Accordion-itemContent {
  padding: 0 16px 16px 16px;
  display: none;
}
.spectrum-Accordion-item.is-open > .spectrum-Accordion-itemIndicator {
      transform: rotate(90deg);
    }
.spectrum-Accordion-item.is-open > .spectrum-Accordion-itemHeader::after {
      /* No bottom border when open, so be less tall */
      height: 39px;
    }
.spectrum-Accordion-item.is-open > .spectrum-Accordion-itemContent {
      display: block;
    }
.spectrum-Accordion-item.is-disabled .spectrum-Accordion-itemHeader {
      cursor: default;
    }`;
    }
}