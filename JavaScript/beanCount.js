function countBs(str) {
    let numOfB = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "B") {
            numOfB += 1;
        }
    }
    return numOfB;
}


function countChar(str, char) {
    let numOf = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            numOf += 1;
        }
    } return numOf;
}

console.log(countBs('BBC'));
console.log(countChar('I love my life', 'y'));