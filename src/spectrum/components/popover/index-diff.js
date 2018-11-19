export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
.spectrum--large .spectrum-Popover {
  visibility: hidden;

  opacity: 0;

  transition: transform 130ms ease-in-out,
              opacity 130ms ease-in-out,
              visibility 0ms linear 130ms;

  pointer-events: none;
}
/* generated from dna-version: 5.3.0 */
.spectrum--large .spectrum-Popover.is-open {
  visibility: visible;

  opacity: 1;

  transition-delay: 0ms;

  pointer-events: auto;
}
.spectrum--large .spectrum-Popover--bottom.is-open {
  transform: translateY(8px);
}
.spectrum--large .spectrum-Popover--top.is-open {
  transform: translateY(-8px);
}
.spectrum--large .spectrum-Popover--right.is-open {
  transform: translateX(8px);
}
.spectrum--large .spectrum-Popover--left.is-open {
  transform: translateX(-8px);
}
.spectrum--large .spectrum-Popover {

  min-width: 40px;
  min-height: 40px;
  border-width: 1px;
  border-radius: 5px;
}
.spectrum--large .spectrum-Popover-tip {
  width: 26px;
  height: 13.5px;
}
.spectrum--large .spectrum-Popover-tip::after {
    width: 25px;
    height: 25px;
    border-width: 1px;
  }
.spectrum--large .spectrum-Popover--dialog {
  min-width: 270px;
  padding: 30px 29px;
}
.spectrum--large .spectrum-Popover--left.spectrum-Popover--withTip {
    margin-right: 13px;
  }
.spectrum--large .spectrum-Popover--right.spectrum-Popover--withTip {
    margin-left: 13px;
  }
.spectrum--large .spectrum-Popover--bottom.spectrum-Popover--withTip {
    margin-top: 13px;
  }
.spectrum--large .spectrum-Popover--top.spectrum-Popover--withTip {
    margin-bottom: 13px;
  }`;
    }
}