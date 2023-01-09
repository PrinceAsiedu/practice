const sum = (...args) => args.reduce((a, b) => a + b, 0);

console.log(sum(24, 5, 6, 2, 5, 66, 23));