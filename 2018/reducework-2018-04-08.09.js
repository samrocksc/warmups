// Example Fruits
// example data taken from https://medium.freecodecamp.org/reduce-f47a7da511a9
const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];

const sortedFruits = fruitBasket.reduce((total, item) => {
  total[item] = (total[item] || 0) + 1;
  return total;
}, {});

console.log('sortedFruits', sortedFruits);

// Example Color Codes AC's
// I want to return an array of objects
// Each object will have a key of the color name
// Each object will contain Data
const colors = [
  {
    color: 'red',
    value: '#f00'
  },
  {
    color: 'green',
    value: '#0f0'
  },
  {
    color: 'blue',
    value: '#00f'
  },
  {
    color: 'cyan',
    value: '#0ff'
  },
  {
    color: 'magenta',
    value: '#f0f'
  },
  {
    color: 'yellow',
    value: '#ff0'
  },
  {
    color: 'black',
    value: '#000'
  },
];

const availableColors = Object.keys(colors).reduce((total, key) => {
  // in es6 we can set this key by using square brackets to eval it.
  const newObj = {[colors[key].color]: colors[key]};
  total.push(newObj);
  return total;
}, []);

console.log('Available Colors', availableColors);
