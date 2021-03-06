export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
/* generated from dna-version: 5.3.0 */
.spectrum-Dialog {
  visibility: hidden;

  opacity: 0;

  transition: transform 130ms ease-in-out,
              opacity 130ms ease-in-out,
              visibility 0ms linear 130ms;

  pointer-events: none;
}
.spectrum-Dialog.is-open {
  visibility: visible;

  opacity: 1;

  transition-delay: 0ms;

  pointer-events: auto;
}
:root {
  /* Distance between top and bottom of dialog and edge of window for fullscreen dialog */

  /* Distance between the edge of the fullscreen dialog and header */

  /* The font-size of the fullscreen dialog header */

  /* The font-weight of the fullscreen dialog header */
}
/* topdoc
{{ dialog/dialog.yml }}
*/
.spectrum-Dialog {

  /* Be a flexbox to allow a full sized content area that scrolls */
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
      flex-direction: column;

  /* Centered by default */
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%) translateY(8px);

  /* Appear above underlay */
  z-index: 2;

  /* Allow 100% width, taking into account padding */
  box-sizing: border-box;

  /* Don't be bigger than the screen */
  max-height: 90%;

  /* Be no bigger than max-width, but also be 90% if the viewport is smaller than max-width */
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  max-width: 90%;
  min-width: 288px;

  padding: 24px;

  border-radius: 5px;
  outline: none;
}
/* Firefox shows outline */
.spectrum-Dialog.is-open {

    transform: translate(-50%, -50%);
  }
.spectrum-Dialog--alert {
  /* Smaller dialog for alerts */
  width: 90%;
  max-width: 400px;
}
.spectrum-Dialog-header {
  display: -ms-flexbox;
  display: flex;
  position: relative;
  box-sizing: border-box;
  width: 100%;

  /* Don't get small when the dialog does */
  -ms-flex-negative: 0;
      flex-shrink: 0;

  border-radius: 5px 5px 0 0;
  outline: none; /* Hide focus outline around header */

  padding-bottom: 30px;
}
/* The rule element */
.spectrum-Dialog-header::after {
    position: absolute;
    bottom: 16px;
    left: 0;
    right: 0;
    content: '';

    height: 2px;
  }
.spectrum-Dialog-typeIcon {
  display: block;
}
.spectrum-Dialog-content {
  display: block;
  box-sizing: border-box;

  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  -ms-flex: 1 1 auto;

      flex: 1 1 auto;

  /* Temporary IE 11 fix */
  max-height: 70vh;

  outline: none; /* Hide focus outline */

  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
}
.spectrum-Dialog-footer {
  border-radius: 0 0 5px 5px;
  margin-top: 40px;

  -ms-flex: 0 1 auto;

      flex: 0 1 auto;

  display: -ms-flexbox;

  display: flex;
  -ms-flex-pack: end;
      justify-content: flex-end;

  outline: none; /* Hide focus outline */
}
.spectrum-Dialog-title {
  -ms-flex: 1 1 auto;
      flex: 1 1 auto;

  margin: 0;

  font-size: 19px;
  font-weight: 700;
  line-height: 1.3;

  /* Truncate text when it's too long to fit */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  outline: none; /* Hide focus outline */
}
.spectrum-Dialog--fullscreen {
  left: 32px;
  top: 32px;
  right: 32px;
  bottom: 32px;

  transform: translate(0, 8px);
}
.spectrum-Dialog--fullscreen.is-open {
    transform: translate(0, 0);
  }
.spectrum-Dialog--fullscreen,
.spectrum-Dialog--fullscreenTakeover {
  width: auto;
  max-height: none;
  max-width: none;

  padding-top: 14px;
}
.spectrum-Dialog--fullscreen .spectrum-Dialog-header, .spectrum-Dialog--fullscreenTakeover .spectrum-Dialog-header {
    -ms-flex-negative: 0;
        flex-shrink: 0;
  }
.spectrum-Dialog--fullscreen .spectrum-Dialog-title, .spectrum-Dialog--fullscreenTakeover .spectrum-Dialog-title {
    font-size: 28px;
    font-weight: 100;
  }
.spectrum-Dialog--fullscreen .spectrum-Dialog-content, .spectrum-Dialog--fullscreenTakeover .spectrum-Dialog-content {
    max-height: none;
  }
.spectrum-Dialog--fullscreenTakeover {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  box-sizing: border-box;

  /* Remove the border since we've taken over */
  border: none;
  border-radius: 0;
}
.spectrum-Dialog--fullscreenTakeover,
  .spectrum-Dialog--fullscreenTakeover.is-open {
    transform: none;
  }`;
    }
}