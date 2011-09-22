(function () {
    'use strict';
    // Uncomment the following line to enable first chance exceptions.
    // Debug.enableFirstChanceException(true);

    WinJS.Application.onmainwindowactivated = function (e) {
        if (e.detail.kind === Windows.ApplicationModel.Activation.ActivationKind.launch) {
            // TODO: startup code here
        }
    }

    WinJS.Application.start();


    $(document).ready(function () {
        $('#plainOldHtmlButton').click(function () {
            $('#plainOldHtmlDiv').html('Oh yes, you can!');
        });
    });


})();