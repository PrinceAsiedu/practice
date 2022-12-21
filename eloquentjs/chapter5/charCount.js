const SCRIPTS = require('./scripts.js');
require('./reduce.js')


function charCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to - from);
    }, 0)
}

console.log(SCRIPTS.reduce((a, b) => {
    return charCount(a) < charCount(b) ? b : a;
}))