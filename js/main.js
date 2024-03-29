// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});


function getSliderValue(slider){


  if (parseInt(slider.value) >= 0 && parseInt(slider.value, 10) < 95){
    document.querySelector('.year').innerHTML = Math.round(1880 + 140 / 95 * parseInt(slider.value, 10));
    CABLES.patch.setVariable("frameGlacierOne", parseFloat(4.625 / 95 * parseFloat(slider.value)));
  }

  else if (parseInt(slider.value, 10) >= 95 && parseInt(slider.value, 10) < 235){
    document.querySelector('.year').innerHTML = Math.round(2020 + 60 / 140 * (parseInt(slider.value, 10) - 95));
    CABLES.patch.setVariable("frameGlacierOne", parseFloat( 4.625 + 6.816 / 140 * (parseFloat(slider.value)- 95)));
  }

  else if (parseInt(slider.value, 10) >=  235){
    document.querySelector('.year').innerHTML = Math.round(2080 + 40 / 45 * (parseInt(slider.value, 10) - 235));
    CABLES.patch.setVariable("frameGlacierOne", parseFloat( 11.441 + 2.191 / 45 * (parseFloat(slider.value) - 235)));
  }

}

/**
 * Called when there was a cables error.
 * @param {string} errId - ID of the error, e.g. 'NO_WEBGL' or 'NO_WEBAUDIO'
 *                         when the browser does not support the used APIs
 * @param {string} errMsg - The error message
 */
function showError(errId, errMsg) {
    alert('An error occured: ' + errId + ', ' + errMsg);
}

function patchInitialized() {
    // You can now access the patch object (CABLES.patch), register variable watchers and so on
}

function patchFinishedLoading() {
    getSliderValue(document.querySelector('.slider'));
    document.querySelector('.loading-screen').classList.add("finished");
    CABLES.patch.setVariable("playButton", 1);
}

function startApplication(){
    document.querySelector('.loading-screen').classList.add("closed");
}

document.addEventListener('DOMContentLoaded', function(event) {
    CABLES.patch = new CABLES.Patch({
        patch: CABLES.exportedPatch,
        prefixAssetPath: '',
        glCanvasId: 'glcanvas',
        glCanvasResizeToWindow: true,
        onError: showError,
        onPatchLoaded: patchInitialized,
        onFinishedLoading: patchFinishedLoading,
        canvas:{
            alpha:true,
            premultipliedAlpha:true
        }
    });
});
