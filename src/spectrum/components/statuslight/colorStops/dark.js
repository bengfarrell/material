export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
/* generated from dna-version: 5.3.0 */
/* Temporary skin variables that need to be moved into origins */
:root {
  /* Icon Button*/

  /* Button */

  /* Shell */

  /* haha remove this */

  /* Custom selection color for placeholders using global blue-500 at 30% opacity. Should be updated in Spectrum-DNA */
}
.spectrum-StatusLight {
  color: rgb(205, 205, 205);
}
.spectrum-StatusLight[disabled],
  .spectrum-StatusLight.is-disabled {
    color: rgb(92, 92, 92);
  }
.spectrum-StatusLight[disabled]::before, .spectrum-StatusLight.is-disabled::before {
      background-color: rgb(77, 77, 77);
    }
.spectrum-StatusLight--negative::before {
  background-color: rgb(227, 72, 80);
}
.spectrum-StatusLight--notice::before {
  background-color: rgb(230, 134, 25);
}
.spectrum-StatusLight--positive::before {
  background-color: rgb(45, 157, 120);
}
.spectrum-StatusLight--info::before,
/** @depreacted */.spectrum-StatusLight--active::before {
  background-color: rgb(38, 128, 235);
}
.spectrum-StatusLight--neutral {
  color: rgb(157, 157, 157);
}
.spectrum-StatusLight--neutral::before {
    background-color: rgb(92, 92, 92);
  }
.spectrum-StatusLight--celery::before {
  background-color: rgb(68, 181, 86);
}
.spectrum-StatusLight--yellow::before {
  background-color: rgb(223, 191, 0);
}
.spectrum-StatusLight--fuchsia::before {
  background-color: rgb(192, 56, 204);
}
.spectrum-StatusLight--indigo::before {
  background-color: rgb(103, 103, 236);
}
.spectrum-StatusLight--seafoam::before {
  background-color: rgb(27, 149, 154);
}
.spectrum-StatusLight--chartreuse::before {
  background-color: rgb(133, 208, 68);
}
.spectrum-StatusLight--magenta::before {
  background-color: rgb(216, 55, 144);
}
.spectrum-StatusLight--purple::before {
  background-color: rgb(146, 86, 217);
}`;
    }
}