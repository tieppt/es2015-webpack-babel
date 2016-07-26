function version() {
    console.log('version: 1.1.0');
}

function add() {
    let result = 0;
    Array.prototype.forEach.call(arguments, function (value) {
        result += value;
    });
    return result;
}

export {add};