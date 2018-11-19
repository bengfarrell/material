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
  transform: translateX(8px);
}
.spectrum-QuickActions--right.is-open {
  transform: translateX(-8px);
}
.spectrum-QuickActions {
  box-sizing: border-box;

  display: -ms-inline-flexbox;

  display: inline-flex;
  -ms-flex-align: center;
      align-items: center;
  -ms-flex-pack: center;
      justify-content: center;

  padding: 5px 5px;

  height: 50px;

  border-radius: 5px;
}
.spectrum-QuickActions .spectrum-ActionButton + .spectrum-ActionButton {
    margin-left: 10px;
  }
.spectrum-QuickActions--textOnly .spectrum-ActionButton + .spectrum-ActionButton {
    margin-left: 5px;
  }
.spectrum-QuickActions--right.is-open { /* should animate to the left when aligned right */
  }
.spectrum-QuickActions--left.is-open { /* should animate to the right when aligned left */
  }`;
    }
}