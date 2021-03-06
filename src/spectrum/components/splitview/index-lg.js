export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
/* generated from dna-version: 5.3.0 */
/* topdoc
{{ splitview/splitview-horizontal.yml }}
*/
/* topdoc
{{ splitview/splitview-horizontal-resizable.yml }}
*/
/* topdoc
{{ splitview/splitview-vertical-resizable.yml }}
*/
/* topdoc
{{ splitview/splitview-horizontal-collapsed-left.yml }}
*/
/* topdoc
{{ splitview/splitview-horizontal-collapsed-right.yml }}
*/
/* topdoc
{{ splitview/splitview-vertical-collapsed-top.yml }}
*/
/* topdoc
{{ splitview/splitview-vertical-collapsed-bottom.yml }}
*/
.spectrum-SplitView {
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
}
.spectrum-SplitView-pane {
  height: 100%;
}
.spectrum-SplitView-gripper {
  content: '';
  display: block;
  position: absolute;
  border-style: solid;
  border-radius: 2px;

  top: 50%;
  transform: translate(0, -50%);

  /* half of (width + horizontal border - handle width) * -1 (for negative opposite) */
  left: -4px;
  width: 4px;
  height: 16px;
  border-width: 4px 3px;
}
.spectrum-SplitView-splitter {
  /* Contain the gripper */
  position: relative;

  /* Prevent text selection while dragging */
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;

  width: 2px;
  height: 100%;
  z-index: 1;
}
/* make the center line of the gripper */
.spectrum-SplitView-splitter.is-collapsed-start .spectrum-SplitView-gripper:before, .spectrum-SplitView-splitter.is-collapsed-end .spectrum-SplitView-gripper:before {
        content: '';
        position: absolute;

        top: 0;
        left: calc(50% - 1px);
        width: 2px;
        height: 100%;
      }
.spectrum-SplitView-splitter.is-collapsed-start .spectrum-SplitView-gripper {
      left: 0;
    }
.spectrum-SplitView-splitter.is-collapsed-end .spectrum-SplitView-gripper {
      right: 0;
      left: auto;
    }
.spectrum-SplitView--vertical {
  -ms-flex-direction: column;
      flex-direction: column;
}
.spectrum-SplitView--vertical .spectrum-SplitView-pane {
    height: auto;
    width: 100%;
  }
.spectrum-SplitView--vertical .spectrum-SplitView-gripper {
    /* half of (height + vertical border - handle width) * -1 (for negative opposite) */
    top: -4px;

    transform: translate(-50%, 0);
    left: 50%;
    width: 16px; /* same as default height */
    height: 4px; /* same as default width */

    /* opposite of default border-width */
    border-width: 3px 4px;
  }
.spectrum-SplitView--vertical .spectrum-SplitView-splitter {
    width: 100%;
    height: 2px;
  }
.spectrum-SplitView--vertical .spectrum-SplitView-splitter.is-collapsed-start .spectrum-SplitView-gripper, .spectrum-SplitView--vertical .spectrum-SplitView-splitter.is-collapsed-end .spectrum-SplitView-gripper {
        left: 50%;
      }
/* make the center line of the gripper */
.spectrum-SplitView--vertical .spectrum-SplitView-splitter.is-collapsed-start .spectrum-SplitView-gripper:before, .spectrum-SplitView--vertical .spectrum-SplitView-splitter.is-collapsed-end .spectrum-SplitView-gripper:before {
          top: calc(50% - 1px);
          left: 0;
          width: 100%;
          height: 2px;
        }
.spectrum-SplitView--vertical .spectrum-SplitView-splitter.is-collapsed-start .spectrum-SplitView-gripper {
        top: 0;
      }
.spectrum-SplitView--vertical .spectrum-SplitView-splitter.is-collapsed-end .spectrum-SplitView-gripper {
        top: auto;
        bottom: 0;
      }`;
    }
}