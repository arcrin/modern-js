const name1 = 'Jeff';
const name2 = new String('Jeff');


name2.foo = 'bar';
// console.log(name2);


// if(name2.toString() === 'Jeff'){
//   console.log('YES');
// } else {
//   console.log('NO');
// }

// Number
const num1 = 5;
const num2 = new Number(5);

// Boolean
const bool1 = true;
const bool2 = Boolean(true);

// Function
const getSum1 = function(x, y){
  return x + y;
}

console.log(bool2);