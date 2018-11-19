export default { 
    css() {
        return `
html, body {
  margin: 0;
}

html {
  visibility: hidden;
}

.wf-active {
  visibility: visible;
}

.cssdocs-component {
  max-width: 1288px;
  margin: 0 auto 6rem;
  padding: 0 12px;
}

.cssdocs-example {
  margin: 1rem -4px;

  display: flex;
  flex-direction: column;

  border-radius: 6px;
  border: 1px solid rgb(200, 200, 200);

  box-shadow: 0 0 18px rgba(0,0,0,.15);
}

@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .cssdocs-example {
    /* Fix example layout in IE11 */
    display: block;
  }
}

.cssdocs-example-demo,
.cssdocs-example-markup {
  box-sizing: border-box;
}

.cssdocs-example-demo {
  flex: 1;

  padding: 3rem 4rem;

  border-radius: 6px 6px 0 0;
}

.cssdocs-example-markup {
  position: relative;
  max-width: 100%;
  max-height: 100px;

  padding: 0.75rem 1.5rem;

  border-radius: 0 0 6px 6px;
  border-top: 1px solid rgb(200, 200, 200);

  background: rgb(253, 253, 253);

  overflow: hidden;
}

.cssdocs-example-markup.is-open {
  max-height: 100%;
}

.cssdocs-example-markup.is-open .cssdocs-example-markupToggle {
  background-color: transparent;
}
.cssdocs-example-markup.is-open .cssdocs-example-markupToggle::before {
  display: none;
}

.cssdocs-example-markupToggle + pre {
  padding-bottom: 1rem;
}

.spectrum--dark .cssdocs-example,
.spectrum--darkest .cssdocs-example {
  box-shadow: 0 0 18px rgba(240, 240, 240, .20);
}

.spectrum--dark .cssdocs-example,
.spectrum--dark .cssdocs-example-markup {
  border-color: rgb(80, 80, 80);
}

.spectrum--dark .cssdocs-example-markup {
  background-color: rgb(40, 40, 40);
}

.spectrum--darkest .cssdocs-example,
.spectrum--darkest .cssdocs-example-markup {
  border-color: rgb(60, 60, 60);
}

.spectrum--darkest .cssdocs-example-markup {
  background-color: rgb(15, 15, 15);
}

.cssdocs-Overlay-example {
  position: relative;
  background: rgba(0,0,0,0.4);
  color: rgba(0,0,0,0.4);
}

.cssdocs-Dialog {
  position: relative !important;
  transform: none !important;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  top: 0;
  z-index: 1;
  transition: none;
}

.cssdocs-Overlay-showButton {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

pre {
  margin: 0;
  padding: 0;

  border: none;

  background: transparent;
}

pre code {
  background: transparent;
  white-space: pre-wrap;
}

.cssdocs-example-markupToggle {
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  right: 0;

  box-sizing: border-box;
  padding: 0.5rem 0;

  background: white;

  text-align: center;
}

.cssdocs-example-markupToggle::before {
  content: '';

  position: absolute;
  left: 0;
  right: 0;
  bottom: 100%;

  width: 100%;
  height: 32px;

  background: linear-gradient(to bottom, rgba(255,255,255,0) 10%,rgba(255,255,255,1) 100%);
}


.spectrum--dark .cssdocs-example-markupToggle,
.spectrum--darkest .cssdocs-example-markupToggle {
  background: rgb(40, 40, 40);
}
.spectrum--dark .cssdocs-example-markupToggle::before,
.spectrum--darkest .cssdocs-example-markupToggle::before {
  background: linear-gradient(to bottom, rgba(40,40,40,0) 10%,rgba(40,40,40,1) 100%);
}

/** **/

.sdldocs-outer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
}

.sdldocs-scrollable {
  overflow-x: hidden;

  -webkit-overflow-scrolling: touch;
}

.sdldocs-splitview {
  height: 100%;
  margin: 8px;
}

.sdldocs-splitview > * {
  height: 100%;
  overflow-y: auto;
  position: relative;
}

.sdldocs-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 1rem;
}

.sdldocs-spectrumVersion {
  padding-left: 1rem;
}

.sdldocs-dnaStatus {
  margin-right: 0.5rem;
  margin-left: 1rem;
}

.sdl-switcher {
  flex: 1;
  text-align: right;
}

.sdl-switcher .spectrum-Dropdown + .spectrum-FieldLabel {
  margin-left: 2rem;
}

.sdl-switcher .spectrum-Dropdown {
  width: 124px !important;
}

.sdldocs-main-content {
  margin: 0 auto;
}

.sdldocs-header-title {
  margin-left: 12px;
}

.sdldocs-component {
  margin: 0 0 5rem 0;
}

.sdldocs-subtleLink {
  display: inline-block;
  text-decoration: none;
  color: inherit;
  outline: none;
  vertical-align: middle;
}

.sdldocs-subtleLink:focus {
  text-decoration: underline;
  text-decoration-color: rgb(38, 128, 235);
}

.sdldocs-component-name {
  margin: 0;
}

.sdldocs-subComponent {
  margin: 2rem 0;
}

.sdldocs-subComponent-name {
  margin: 0;
  height: 24px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.sdldocs-subComponent-header {
  margin: 1rem 0 0 0;
}

.sdldocs-subComponent-header + .sdldocs-subComponent-example {
  margin-top: 1rem;
}

.sdldocs-subComponent-example {
  margin-top: 1.25rem;
  margin-bottom: 1rem;
  padding-left: 2rem;
}

.sdldocs-component-description {
}

.sdldocs-component-description p {
  max-width: 90ch;
}

pre.html {
  margin: 0;
  white-space: pre-wrap; /* css-3 */
  white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
}

.sdldocs-header-logo-image {
  vertical-align: middle;
  width: 32px;
  height: 27px;
}

.sdldocs-floating {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 0;
}

.sdldocs-nav {
  display: none;
}
.sdldocs-components {
  flex: 1;
}

.row {
  display: flex;
  flex-direction: row;
  align-items: center;
}

@media (min-width: 48em) {
  .sdldocs-nav {
    display: block;
  }
  .sdldocs-nav-item {
    border: none;
  }
  .sdldocs-nav-link {
    font-size: 1.125rem;
    line-height: 24px;
  }
}


.sdldocs-badge {
  display: inline-flex;
  height: 20px;

  line-height: 20px;
  font-size: 11px;
  letter-spacing: 0.04em;
  color: white;
  font-weight: 300;
  text-shadow: 0 1px 0 rgb(0,0,0,0.3);
}
.sdldocs-badge-label,
.sdldocs-badge-version {
  padding: 0 8px;
  border-radius: 3px;
}
.sdldocs-badge-label {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  background-color: #4B4B4B;
}
.sdldocs-badge-version {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background-color: #1473E6;
}

/* For documentation beautification only - DO NOT COPY */
.dummy-spacing {
  height: 175px;
}

.spectrum--large .dummy-spacing {
  height: 225px;
}

/* Limit slider widths */
.spectrum-Slider {
  max-width: 256px;
}`;
    }
}