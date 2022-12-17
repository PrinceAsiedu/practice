// function reverseArray(list) {
//     let result = [];
//     for (let item of list) {
//         result.unshift(item);
//     } return result;
// }

function reverseArray(list) {
    let result = [];
    for (let i = list.length - 1; i >= 0; i--) {
        result.push(list[i]);
    } return result;
}

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
      let old = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = old;
    }
    return array;
  }

let a = [1, 2, 3, 4, 5, ], 
    ab = [6, 7, 8, 9, 10];

let b = reverseArray(a);
let c = reverseArrayInPlace(ab);

console.log(b);
console.log(c);