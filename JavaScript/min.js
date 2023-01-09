console.log(Math.min(3, 5));
// Exercise : write func to mimic above behavior

function myMin(a, b) {
    if (a < b) {
        return a
    }
    else {
        return b
    }
}

console.log(myMin(3, 5));