$(function () {

    getTaskStatus();

    console.log("Starting stuff");

    setInterval(getTaskStatus, 4000);
});


var getTaskStatus = function () {

    console.log("Getting status....");

    jQuery.ajax({
        url: taskStatusServiceUrl,
        cache: false,
        type: 'GET',
        success: function (result) {
            renderProgress(result);
        }
    });
};


var renderProgress = function (result) {

    console.log("status result:", result);


    $('#progress').html("IsRunning: " + result.isRunning);
};

