function greaterThan(n) {
    return m => m > n;
}

let greaterThan10 = greaterThan(10)
console.log(greaterThan10(9));

function noisy(f) {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result)
}