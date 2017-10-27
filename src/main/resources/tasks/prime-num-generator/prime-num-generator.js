var taskLib = require('/lib/xp/task');

exports.run = function (params) {

    var limit = params.count;
    var i = params.start;
    var found = [];

    taskLib.progress({info: 'Initializing task'});

    while (true) {

        if (isPrime(i)) {
            found.push(i);

            log.info("Found prime: " + i);

            taskLib.progress({
                info: 'Found' + found.length + ' primes',
                current: found.length,
                total: limit
            });
        }

        i++;

        if (found.length >= limit) {
            break;
        }
    }

    taskLib.progress({info: 'Task completed: ' + found});
    log.info("Found primes: " + found);
};


function isPrime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num !== 1;
}
