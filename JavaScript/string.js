let a = 'coconuts', sentence = "Secretarybirds specialize in stomping";
//slice
console.log(a.slice(4, 7));
// indexOf 
console.log(a.indexOf('n'));
// trim
let b = '  Asiedu \n  '.trim()
console.log(b);
// padstart
console.log(String(6).padStart(3, "0"));
// split
let words = sentence.split(" ");
console.log(words);
// join
console.log(words.join("-"));
//repeat 
console.log(words.pop().repeat(3))
// length
console.log(a.length)