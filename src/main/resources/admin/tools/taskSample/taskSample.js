var mustache = require('/lib/xp/mustache');
var portal = require('/lib/xp/portal');
var taskLib = require('/lib/xp/task');


exports.get = function (req) {

    var view = resolve('taskSample.html');

    var model = {
        assetsUrl: portal.assetUrl({path: ""}),
        taskStatusServiceUrl: portal.serviceUrl({service: 'task-status-service'})
    };

    var isRunning = taskLib.isRunning(app.name + ':prime-num-generator');
    if (!isRunning) {
        var taskId = taskLib.submitNamed({
            name: 'prime-num-generator',
            config: {
                count: 100,
                start: 921231
            }
        });
        log.info("Started task: %s", taskId);
    } else {
        log.info("Task already running");
    }

    return {
        contentType: 'text/html',
        body: mustache.render(view, model)
    };

};

var getServiceUrl = function (name) {

    return portal.serviceUrl({
        service: name
    })
};
