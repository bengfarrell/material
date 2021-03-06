export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
/* generated from dna-version: 5.3.0 */
/* topdoc
{{ statuslight/statuslight-semantic.yml }}
*/
.spectrum-StatusLight {
  height: 32px;

  line-height: 32px;
  font-size: 14px;
  font-weight: 400;
}
.spectrum-StatusLight::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin: 0 12px;
  }
.spectrum-StatusLight--neutral {
  font-style: italic;
}
/* topdoc
{{ statuslight/statuslight-label.yml }}
*/`;
    }
}