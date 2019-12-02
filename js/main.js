function getSliderValue(slider){


  if (parseInt(slider.value) >= 0 && parseInt(slider.value, 10) < 111){
    document.querySelector('.year').innerHTML = Math.round(1880 + 140 / 111 * parseInt(slider.value, 10));
    CABLES.patch.setVariable("frameGlacierOne", parseInt(Math.floor( parseInt(slider.value, 10)/ 328 * 111 ), 10));
  }

  else if (parseInt(slider.value, 10) >= 111 && parseInt(slider.value, 10) < 275){
    document.querySelector('.year').innerHTML = Math.round(2020 + 60 / 164 * (parseInt(slider.value, 10) - 111));
    CABLES.patch.setVariable("frameGlacierOne", parseInt(Math.floor( 111 + (parseInt(slider.value, 10)/328 * 164), 10)));
  }

  else if (parseInt(slider.value, 10) >=  275){
    document.querySelector('.year').innerHTML = Math.round(2080 + 40 / 53 * (parseInt(slider.value, 10) - 275));
    CABLES.patch.setVariable("frameGlacierOne", parseInt(Math.floor( 275 + (parseInt(slider.value, 10)/328 * 53), 10)));
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
    // The patch is ready now, all assets have been loaded
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
    });
});
