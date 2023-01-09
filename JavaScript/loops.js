// let account = 0;

// for (i = 10; i > 0; i -= 2) {
//     account += i 
// }
// console.log(account);

// let myArray = []
// // push prime numbers between 1 and 10 to myArray
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 == 1) {
//         myArray.push(i);
//     }
//   }
// console.log(myArray);

// function multiplyAll(arr) {
//     let product = 1;
//     // Only change code below this line
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < arr[i].length; j++) {
//         product *= arr[i][j];

//       }
//     }
//     // Only change code above this line
//     return product;
//   }
  
//  console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));
const myArray = [];
let i = 10;
do {
    myArray.push(i);
    i++;
  } while (i < 10 ) {
    myArray.push(i);
    i++;
  }

  console.log(myArray);
