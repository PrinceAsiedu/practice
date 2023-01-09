let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/ig; // Change this line
let result = hello.replace(wsRegex, ''); // Change this line