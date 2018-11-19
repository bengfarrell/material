export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
/* generated from dna-version: 5.3.0 */
/* topdoc
{{ link/link.yml }}
*/
.spectrum-Link {
  /* Remove the gray background on active links in IE 10. */
  background-color: transparent;
  /* Remove gaps in links underline in iOS 8+ and Safari 8+. */
  -webkit-text-decoration-skip: objects;
  text-decoration: none;
  transition: color 130ms ease-in-out;
  outline: none;
}
.spectrum-Link:hover {
    text-decoration: underline;
  }
.spectrum-Link.focus-ring {
    text-decoration: underline;
  }
.spectrum-Link.focus-ring {
    text-decoration: underline;
    -webkit-text-decoration-style: double;
            text-decoration-style: double;
  }
.spectrum-Link.is-disabled {
    cursor: default;
    pointer-events: none;
  }
.spectrum-Link.is-disabled:hover,
    .spectrum-Link.is-disabled:focus {
      text-decoration: none;
    }
.spectrum-Link--subtle,
/** @deprecated */.spectrum-Link--quiet {
  text-decoration: underline;
}
.spectrum-Link--overBackground {
  text-decoration: underline;
}`;
    }
}