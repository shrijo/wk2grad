function getSliderValue(slider){
  document.querySelector('.year').innerHTML = Math.round(1880 + 240 / 100 * parseInt(slider.value, 10));
  CABLES.patch.setVariable("frameGlacierOne", parseInt(Math.floor( 1 + 321 / 100 * parseInt(slider.value, 10)), 10));
  CABLES.patch.setVariable("frameGlacierTwo", parseInt(Math.floor( 1 + 270 / 100 * parseInt(slider.value, 10)), 10));
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
