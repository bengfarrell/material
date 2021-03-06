export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
/* generated from dna-version: 5.3.0 */
.spectrum-Rating {
  cursor: pointer;
  position: relative;
  display: -ms-inline-flexbox;
  display: inline-flex;
}
.spectrum-Rating.is-disabled {
    cursor: default;
    pointer-events: none;
  }
.spectrum-Rating-input {
  position: absolute;
  width: 150px;
  height: 22px;
  margin: 0;
  opacity: 0.0001;
  pointer-events: none;
  z-index: 0;
}
.spectrum-Rating-icon {
  background-size: contain;
  background-repeat: no-repeat;
  width: 30px;
  height: 22px;
}
.spectrum-Rating-starActive,
.spectrum-Rating-starInactive {
  width: 22px;
  height: 22px;
  margin: 0 auto;
}
.spectrum-Rating-starActive {
  display: none;
}
.spectrum-Rating-starInactive {
  display: block;
}`;
    }
}