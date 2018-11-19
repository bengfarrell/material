export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
/* generated from dna-version: 5.3.0 */
.spectrum-QuickActions {
  visibility: hidden;

  opacity: 0;

  transition: transform 130ms ease-in-out,
              opacity 130ms ease-in-out,
              visibility 0ms linear 130ms;

  pointer-events: none;
}
.spectrum-QuickActions.is-open {
  visibility: visible;

  opacity: 1;

  transition-delay: 0ms;

  pointer-events: auto;
}
.spectrum-QuickActions--left.is-open {
  transform: translateX(6px);
}
.spectrum-QuickActions--right.is-open {
  transform: translateX(-6px);
}
.spectrum-QuickActions {
  box-sizing: border-box;

  display: -ms-inline-flexbox;

  display: inline-flex;
  -ms-flex-align: center;
      align-items: center;
  -ms-flex-pack: center;
      justify-content: center;

  padding: 4px 4px;

  height: 40px;

  border-radius: 4px;
}
.spectrum-QuickActions .spectrum-ActionButton + .spectrum-ActionButton {
    margin-left: 8px;
  }
.spectrum-QuickActions--textOnly .spectrum-ActionButton + .spectrum-ActionButton {
    margin-left: 4px;
  }
.spectrum-QuickActions--right.is-open { /* should animate to the left when aligned right */
  }
.spectrum-QuickActions--left.is-open { /* should animate to the right when aligned left */
  }`;
    }
}