export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
/* generated from dna-version: 5.3.0 */
.spectrum-Icon {
  display: inline-block;

  /* Inherit the text color */
  color: inherit;

  /* Fill should match the current text color */
  fill: currentColor;

  /* Don't catch clicks or hover, otherwise they may not escape the SVG */
  pointer-events: none;
}
/* Hide the svg overflow in IE. */
.spectrum-Icon:not(:root) {
    overflow: hidden;
  }
.spectrum-Icon--sizeXXS,
  .spectrum-Icon--sizeXXS img,
  .spectrum-Icon--sizeXXS svg {
    height: 9px;
    width: 9px;
  }
.spectrum-Icon--sizeXS,
  .spectrum-Icon--sizeXS img,
  .spectrum-Icon--sizeXS svg {
    height: 12px;
    width: 12px;
  }
.spectrum-Icon--sizeS,
  .spectrum-Icon--sizeS img,
  .spectrum-Icon--sizeS svg {
    height: 18px;
    width: 18px;
  }
.spectrum-Icon--sizeM,
  .spectrum-Icon--sizeM img,
  .spectrum-Icon--sizeM svg {
    height: 24px;
    width: 24px;
  }
.spectrum-Icon--sizeL,
  .spectrum-Icon--sizeL img,
  .spectrum-Icon--sizeL svg {
    height: 36px;
    width: 36px;
  }
.spectrum-Icon--sizeXL,
  .spectrum-Icon--sizeXL img,
  .spectrum-Icon--sizeXL svg {
    height: 48px;
    width: 48px;
  }
.spectrum-Icon--sizeXXL,
  .spectrum-Icon--sizeXXL img,
  .spectrum-Icon--sizeXXL svg {
    height: 72px;
    width: 72px;
  }
/* Hide UI icons on older browsers with SVG 1.1 implementations */
.spectrum--medium .spectrum-UIIcon--large {
    display: none;
  }
.spectrum--medium .spectrum-UIIcon--medium {
    display: inline;
  }
.spectrum--large .spectrum-UIIcon--medium {
    display: none;
  }
.spectrum--large .spectrum-UIIcon--large {
    display: inline;
  }
/* Hide UI icons on browsers that implement SVG 2 correctly (Firefox 56+) */
.spectrum--large {
  --ui-icon-large-display: block;
  --ui-icon-medium-display: none;
}
.spectrum--medium {
  --ui-icon-medium-display: block;
  --ui-icon-large-display: none;
}
.spectrum-UIIcon--large {
  display: var(--ui-icon-large-display);
}
.spectrum-UIIcon--medium {
  display: var(--ui-icon-medium-display);
}
/* UI Icons */
.spectrum-UIIcon-AlertMedium {
  width: 18px;
  height: 18px;
}
.spectrum-UIIcon-AlertSmall {
  width: 14px;
  height: 14px;
}
.spectrum-UIIcon-ArrowDownSmall {
  width: 8px;
  height: 10px;
}
.spectrum-UIIcon-ArrowLeftMedium {
  width: 14px;
  height: 10px;
}
.spectrum-UIIcon-Asterisk {
  width: 8px;
  height: 8px;
}
.spectrum-UIIcon-CheckmarkMedium {
  width: 12px;
  height: 12px;
}
.spectrum-UIIcon-CheckmarkSmall {
  width: 10px;
  height: 10px;
}
.spectrum-UIIcon-ChevronDownMedium {
  width: 10px;
  height: 6px;
}
.spectrum-UIIcon-ChevronDownSmall {
  width: 8px;
  height: 6px;
}
.spectrum-UIIcon-ChevronLeftLarge {
  width: 12px;
  height: 16px;
}
.spectrum-UIIcon-ChevronLeftMedium {
  width: 6px;
  height: 10px;
}
.spectrum-UIIcon-ChevronRightLarge {
  width: 12px;
  height: 16px;
}
.spectrum-UIIcon-ChevronRightMedium {
  width: 6px;
  height: 10px;
}
.spectrum-UIIcon-ChevronRightSmall {
  width: 6px;
  height: 8px;
}
.spectrum-UIIcon-ChevronUpSmall {
  width: 8px;
  height: 6px;
}
.spectrum-UIIcon-CornerTriangle {
  width: 5px;
  height: 5px;
}
.spectrum-UIIcon-CrossLarge {
  width: 12px;
  height: 12px;
}
.spectrum-UIIcon-CrossMedium {
  width: 8px;
  height: 8px;
}
.spectrum-UIIcon-CrossSmall {
  width: 8px;
  height: 8px;
}
.spectrum-UIIcon-DashSmall {
  width: 10px;
  height: 10px;
}
.spectrum-UIIcon-DoubleGripper {
  width: 16px;
  height: 4px;
}
.spectrum-UIIcon-HelpMedium {
  width: 18px;
  height: 18px;
}
.spectrum-UIIcon-HelpSmall {
  width: 14px;
  height: 14px;
}
.spectrum-UIIcon-InfoMedium {
  width: 18px;
  height: 18px;
}
.spectrum-UIIcon-InfoSmall {
  width: 14px;
  height: 14px;
}
.spectrum-UIIcon-Magnifier {
  width: 16px;
  height: 16px;
}
.spectrum-UIIcon-SkipLeft {
  width: 9px;
  height: 10px;
}
.spectrum-UIIcon-SkipRight {
  width: 9px;
  height: 10px;
}
.spectrum-UIIcon-Star {
  width: 18px;
  height: 18px;
}
.spectrum-UIIcon-StarOutline {
  width: 18px;
  height: 18px;
}
.spectrum-UIIcon-SuccessMedium {
  width: 18px;
  height: 18px;
}
.spectrum-UIIcon-SuccessSmall {
  width: 14px;
  height: 14px;
}
.spectrum-UIIcon-TripleGripper {
  width: 10px;
  height: 7px;
}`;
    }
}