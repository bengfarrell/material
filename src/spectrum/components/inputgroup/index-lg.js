export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
/* generated from dna-version: 5.3.0 */
/* topdoc
{{ inputgroup/combobox.yml }}
*/
/* topdoc
{{ inputgroup/combobox-quiet.yml }}
*/
/* topdoc
{{ inputgroup/datepicker.yml }}
*/
/* topdoc
{{ inputgroup/datepicker-quiet.yml }}
*/
:root {
  /* Todo: move to DNA */
}
.spectrum-InputGroup {
  position: relative;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-direction: row;
      flex-direction: row;
  -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
  min-width: 240px;
}
.spectrum-InputGroup .spectrum-FieldButton {
    padding: 0 15px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
.spectrum-InputGroup-field {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right-width: 0;
  -ms-flex: 1;
      flex: 1;
}
.spectrum-InputGroup--quiet .spectrum-FieldButton {
    border-radius: 0;

    position: relative;
    padding-right: 0;
    border-bottom: 1px solid;
  }
/* More hitarea */
.spectrum-InputGroup--quiet .spectrum-FieldButton:after {
      content: '';
      position: absolute;
      height: 100%;
      width: 10px;
      right: -10px;
    }
.spectrum-InputGroup--quiet .spectrum-InputGroup-icon {
    right: 0;
  }`;
    }
}