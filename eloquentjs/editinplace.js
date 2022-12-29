const s = [5, 7, 2];
s.reduce
function editInPlace() {
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid
  for (let i = 0; i < s.length - 1; i++) {
    let b = s.shift()
    s.push(b);
  }
  // Only change code above this line
}
console.log(editInPlace());
console.log(s);