console.log('// Iteration loop to find all even numbers between 1-100 //');
let i;
for (i = 0; i <= 20; i++) {
  if(i%2 === 0) {
    console.log(i);
  }
}

console.log('// COMMON CONSTRUCTOR PATTERN //');
class Box {
  constructor(opts) {
    this.model = opts.model;
    this.length = opts.length;
    this.width = opts.width;
    this.height = opts.height;
  }
}
