export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
/* generated from dna-version: 5.3.0 */
:root {

  /* DNA */
}
/* topdoc
{{ alert/alert-closeable.yml }}
*/
.spectrum-Alert {
  position: relative;

  display: inline-block;
  box-sizing: border-box;
  min-width: 368px;
  min-height: 38px;
  margin: 8px 0;
  padding: 20px 20px;

  border-width: 2px;
  border-style: solid;
  border-radius: 4px;
}
.spectrum-Alert-icon {
  position: absolute;
  display: block;
  top: 20px;
  right: 20px;
}
.spectrum-Alert-header {
  display: inline-block;
  height: auto;
  min-height: 0;
  margin: 0;
  padding: 0;

  /* Leave room for the icon */
  padding-right: 30px;

  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 14px;
  text-transform: none;
}
.spectrum-Alert-content {
  display: block;
  margin: 8px 0 0 0;
  padding: 0;

  font-size: 14px;
  word-wrap: break-word;
}
.spectrum-Alert-footer {
  display: block;

  text-align: right;

  padding-top: 0.5rem;
}
.spectrum-Alert-footer:empty {
    display: none;
  }
.spectrum-Alert-footer .spectrum-Button {
    margin-right: 0;

    /* Spacing between buttons */
    margin-left: 0.75rem;
  }`;
    }
}