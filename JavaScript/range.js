function myrange(start, end, step = start < end ? 1 : -1) {
    let arr = [];
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            arr.push(i);
        } 
    } else {
        for (let i = start; i >= end; i += step) {
            arr.push(i);
        }
    }
    return arr;
}

function mysum(list) {
    let counter = 0;
    for (let number of list) {
        counter += number;
    } return counter;
}

console.log(myrange(5, 2, -1));
console.log(mysum(myrange(1, 10)));