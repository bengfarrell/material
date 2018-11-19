export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
/* generated from dna-version: 5.3.0 */
@keyframes pulse {
  0% {
    -webkit-transform: scale(1);
    opacity: 0;
  }
  50% {
    -webkit-transform: scale(1.5);
    opacity: 0.6;
  }
  100% {
    -webkit-transform: scale(2);
    opacity: 0;
  }
}
@keyframes pulse--quiet {
  0% {
    -webkit-transform: scale(0.8);
    opacity: 0;
  }
  50% {
    -webkit-transform: scale(1.5);
    opacity: 0.6;
  }
  100% {
    -webkit-transform: scale(2);
    opacity: 0;
  }
}
/* topdoc
{{ coachmark/coachmark.yml }}
*/
.spectrum-CoachMarkPopover {
  position: relative;

  min-width: 272px;
  max-width: 400px;

  border-radius: 4px;
  border-width: 1px;
  border-style: solid;

}
.spectrum-CoachMarkPopover-image {
  border-radius: 4px 4px 0 0;

  width: 100%;
}
.spectrum-CoachMarkPopover-header,
.spectrum-CoachMarkPopover-content,
.spectrum-CoachMarkPopover-footer {
  padding: 0 24px;
}
.spectrum-CoachMarkPopover-header {
  padding-top: 24px;
}
.spectrum-CoachMarkPopover-footer {
  padding-bottom: 24px;
}
.spectrum-CoachMarkPopover-header {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
      justify-content: space-between;
  -ms-flex-align: end;
      align-items: flex-end;
  margin-bottom: 16px;
}
.spectrum-CoachMarkPopover-title {
  font-size: 16px;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 0;
}
.spectrum-CoachMarkPopover-step {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
}
.spectrum-CoachMarkPopover-content {
  margin-bottom: 16px;
}
.spectrum-CoachMarkPopover-footer {
  margin-top: 0;
  text-align: right;
}
.spectrum-CoachMarkIndicator {
  position: relative;

  margin: 6px;
}
.spectrum-CoachMarkIndicator-ring {
  display: block;
  position: absolute;

  border-style: solid;
  border-width: 2px;
  border-radius: 50%;
}
.spectrum-CoachMarkIndicator-ring:nth-child(2) {
    animation-delay: -1980ms;
  }
.spectrum-CoachMarkIndicator-ring:nth-child(3) {
    animation-delay: -3000ms
  }
.spectrum-CoachMarkIndicator {
  min-width: 48px;
  min-height: 48px;
}
.spectrum-CoachMarkIndicator-ring {
  top: 12px;
  left: 12px;

  width: 16px;
  height: 16px;
  animation: pulse 3000ms linear infinite;
}
.spectrum-CoachMarkIndicator-ring:nth-child(1) {
    animation-delay: -1500ms;
  }
.spectrum-CoachMarkIndicator--quiet {
  min-width: 22px;
  min-height: 22px;
}
.spectrum-CoachMarkIndicator--quiet .spectrum-CoachMarkIndicator-ring {
    top: 6px;
    left: 6px;

    width: 8px;
    height: 8px;
    animation: pulse--quiet 3000ms linear infinite;
  }
.spectrum-CoachMarkIndicator--quiet .spectrum-CoachMarkIndicator-ring:nth-child(1) {
      animation-delay: -990ms;
    }`;
    }
}