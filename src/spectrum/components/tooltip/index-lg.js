export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
/* generated from dna-version: 5.3.0 */
.spectrum-Tooltip {
  visibility: hidden;

  opacity: 0;

  transition: transform 130ms ease-in-out,
              opacity 130ms ease-in-out,
              visibility 0ms linear 130ms;

  pointer-events: none;
}
.spectrum-Tooltip.is-open {
  visibility: visible;

  opacity: 1;

  transition-delay: 0ms;

  pointer-events: auto;
}
.spectrum-Tooltip--bottom.is-open {
  transform: translateY(8px);
}
.spectrum-Tooltip--top.is-open {
  transform: translateY(-8px);
}
.spectrum-Tooltip--right.is-open {
  transform: translateX(8px);
}
.spectrum-Tooltip--left.is-open {
  transform: translateX(-8px);
}
:root {
  /* This variable needs to be updated in Spectrum DNA. Using the height variable so it scales to spectrum-large */
}
/* topdoc
{{ tooltip/tooltip.yml }}
*/
.spectrum-Tooltip {

  position: relative;
  left: 0px;
  top: 0px;

  display: -ms-inline-flexbox;

  display: inline-flex;
  -ms-flex-direction: row;
      flex-direction: row;
  -ms-flex-align: center;
      align-items: center;
  box-sizing: border-box;

  vertical-align: top;

  width: auto;
  padding: 5px 13px;
  border-radius: 5px;
  min-height: 30px;

  font-size: 15px;
  font-weight: 400;
  line-height: 19px;
  word-break: break-word;
  -webkit-font-smoothing: antialiased;
}
.spectrum-Tooltip {
    cursor: default;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
.spectrum-Tooltip-tip {
  position: absolute;

  height: 0;
  width: 0;

  border-width: 5px;
  border-style: solid;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
}
.spectrum-Tooltip--right .spectrum-Tooltip-tip, .spectrum-Tooltip--left .spectrum-Tooltip-tip {
    top: 50%;
    margin-top: -5px;
  }
.spectrum-Tooltip--right {
  margin-left: 3px;
}
.spectrum-Tooltip--right .spectrum-Tooltip-tip {
    right: 100%;
    transform: rotate(90deg);
  }
.spectrum-Tooltip--left {
  margin-right: 3px;
}
.spectrum-Tooltip--left .spectrum-Tooltip-tip {
    left: 100%;
    transform: rotate(-90deg);
  }
.spectrum-Tooltip--top {
  margin-bottom: 3px;
}
.spectrum-Tooltip--top .spectrum-Tooltip-tip {
    top: 100%;
  }
.spectrum-Tooltip--bottom {
  margin-top: 3px;
}
.spectrum-Tooltip--bottom .spectrum-Tooltip-tip {
    bottom: 100%;
    transform: rotate(-180deg);
  }
.spectrum-Tooltip--bottom .spectrum-Tooltip-tip, .spectrum-Tooltip--top .spectrum-Tooltip-tip {
    left: 50%;
    margin-left: -5px;
  }
.spectrum-Tooltip-typeIcon {
  margin-left: -3px;
  margin-right: 10px;
  width: 18px;
  height: 18px;
  -ms-flex-item-align: start;
      align-self: flex-start;

  /* Adjusts for weird misalignment */
  margin-top: 1px;
}
.spectrum-Tooltip-label {
  max-width: 126px;

  /* Make sure line height is correct to prevent problems in Windows */
  line-height: 19px;
}
.u-tooltip-showOnHover {
  display: inline-block;
  position: relative;
}
.u-tooltip-showOnHover .spectrum-Tooltip {
    position: absolute;
    white-space: nowrap;
    /* Required for animations to work, !important for diff scaling to work */
    visibility: visible !important;
    transition: transform 130ms ease-in-out;
    top: -100%;
  }
.u-tooltip-showOnHover .spectrum-Tooltip-label {
    /* Don't try to wrap as the mechanism used for this helper does not support wrapping */
    max-width: none;
  }
.u-tooltip-showOnHover .spectrum-Tooltip--right,
  .u-tooltip-showOnHover .spectrum-Tooltip--left {
    top: 50%;
  }
.u-tooltip-showOnHover .spectrum-Tooltip--right .spectrum-Tooltip-tip, .u-tooltip-showOnHover .spectrum-Tooltip--left .spectrum-Tooltip-tip {
      top: 50%;
    }
.u-tooltip-showOnHover .spectrum-Tooltip--right {
    left: 100%;
    transform: translate(0, -50%);
  }
.u-tooltip-showOnHover .spectrum-Tooltip--left {
    transform: translate(-100%, -50%);
  }
.u-tooltip-showOnHover .spectrum-Tooltip--bottom,
  .u-tooltip-showOnHover .spectrum-Tooltip--top {
    left: 50%;
  }
.u-tooltip-showOnHover .spectrum-Tooltip--bottom .spectrum-Tooltip-tip, .u-tooltip-showOnHover .spectrum-Tooltip--top .spectrum-Tooltip-tip {
      left: 50%;
    }
.u-tooltip-showOnHover .spectrum-Tooltip--bottom {
    top: 100%;
    transform: translate(-50%, -10px);
  }
.u-tooltip-showOnHover .spectrum-Tooltip--top {
    transform: translate(-50%, 10px);
  }
.u-tooltip-showOnHover:hover .spectrum-Tooltip {
    opacity: 1;
  }
.u-tooltip-showOnHover:hover .spectrum-Tooltip.spectrum-Tooltip--bottom {
    transform: translate(-50%, 0);
  }
.u-tooltip-showOnHover:hover .spectrum-Tooltip.spectrum-Tooltip--top {
    transform: translate(-50%, -10px);
  }
.u-tooltip-showOnHover:hover .spectrum-Tooltip.spectrum-Tooltip--left {
    transform: translate(calc(-100% - 10px), -50%);
  }
.u-tooltip-showOnHover:hover .spectrum-Tooltip.spectrum-Tooltip--right {
    transform: translate(10px, -50%);
  }`;
    }
}