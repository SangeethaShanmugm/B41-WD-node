console.log("Hello");

//console.log(document);
// console.log(window);
//console.log(global);

const double = (num) => num * 2;

// console.log(double(10));

//console.log(process.argv);

const [, , n] = process.argv;
console.log(process.argv);
console.log(double(n));
