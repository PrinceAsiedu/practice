// Three-dot notation

function max(...numbers) {
    let result = 0;
    for (let number of numbers) {
        if (number > result) result = number;
    }
    return result;
}

let nums = [2,45,53,6,-8,6];
console.log(max(...nums));

let words = ["never", "fully"];
console.log(["will", ...words, "understand"]);