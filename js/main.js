function getSliderValue(slider){


  if (parseInt(slider.value) >= 0 && parseInt(slider.value, 10) < 95){
    document.querySelector('.year').innerHTML = Math.round(1880 + 140 / 95 * parseInt(slider.value, 10));
    CABLES.patch.setVariable("frameGlacierOne", Math.floor( 111 / 95 * parseInt(slider.value, 10)));
  }

  else if (parseInt(slider.value, 10) >= 95 && parseInt(slider.value, 10) < 235){
    document.querySelector('.year').innerHTML = Math.round(2020 + 60 / 140 * (parseInt(slider.value, 10) - 95));
    CABLES.patch.setVariable("frameGlacierOne", Math.floor( 111 + 164 / 140 * (parseInt(slider.value, 10)- 95)));
  }

  else if (parseInt(slider.value, 10) >=  235){
    document.querySelector('.year').innerHTML = Math.round(2080 + 40 / 45 * (parseInt(slider.value, 10) - 235));
    CABLES.patch.setVariable("frameGlacierOne", Math.floor( 275 + 53 / 45 * (parseInt(slider.value, 10) - 235)));
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
