export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
/* generated from dna-version: 5.3.0 */
/* topdoc
{{ assetlist/assetlist.yml }}
*/
.spectrum-AssetList {
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
}
.spectrum-AssetList-item {
  position: relative;

  display: -ms-flexbox;

  display: flex;
  box-sizing: border-box;
  -ms-flex-align: center;
      align-items: center;

  width: 272px;
  height: 40px;

  padding: 0 16px 0 16px;
  margin: 0 0 4px 0;

  border-radius: 4px;

  transition: background-color 130ms ease-in-out;

  font-size: 14px;
  font-weight: 400;
  font-style: normal;

  cursor: pointer;

  outline: none;
}
.spectrum-AssetList-item::before {
    content: '';

    position: absolute;
    left: 0;
    right: 0;

    height: 40px;

    background-color: transparent;

    border-radius: 4px;
  }
/* checkbox on the left, shows up always */
.spectrum-AssetList-item.is-selectable .spectrum-Checkbox, .spectrum-AssetList-item.is-selected .spectrum-Checkbox, .spectrum-AssetList-item:hover .spectrum-Checkbox, .spectrum-AssetList-item:focus .spectrum-Checkbox {
      display: -ms-inline-flexbox;
      display: inline-flex;
    }
/* show chevron */
.spectrum-AssetList-item.is-branch .spectrum-AssetList-itemChildIndicator {
      display: block;
    }
.spectrum-AssetList-item .spectrum-AssetList-itemThumbnail {
    /* Remove the border on images inside links in IE 10-. */
    border-style: none;

    width: 24px;
    height: 24px;
    margin-left: 8px;
    vertical-align: middle;
  }
.spectrum-AssetList-itemSelector {
  display: none;
  margin: 0;
}
.spectrum-AssetList-itemChildIndicator {
  display: none;
  transition: transform ease 130ms;
}
.spectrum-AssetList-itemLabel {
  -ms-flex: 1;
      flex: 1;
  padding-left: 8px;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}`;
    }
}