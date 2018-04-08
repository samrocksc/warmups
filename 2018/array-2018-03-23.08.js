console.log('array Reduce');

var arr = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];

console.log('array.length', arr.length);


const added = arr.reduce((a, b) => {
  return a + b;
});
console.log('added', added);

const alphabetize = arr.sort();
console.log('alphabetize', alphabetize);
