var taskLib = require('/lib/xp/task');

exports.get = function (req) {

    var isRunning = taskLib.isRunning(app.name + ":prime-num-generator");




    return {
        contentType: 'application/json',
        body: {
            isRunning: isRunning
        }
    }
};
