// Iterator Example
function nameIterator(names) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < names.length ?{value: names[nextIndex++], done: false} : {done: true}
    }
  }
}

// Create an array of names
// const namesArr = ['Jack', 'Jill', 'John'];

// Init iterator and pass in the names array
// const names = nameIterator(namesArr);

// console.log(names.next())
// console.log(names.next())
// console.log(names.next())
// console.log(names.next())
// console.log(names.next())

// Generator Example
// function* sayNames() {
//   yield 'Jack';
//   yield 'Jill';
//   yield 'John';
// }

// const name = sayNames();

// console.log(name.next());

// Id Creator
function* createIDs() {
  let index = 1;

  while(true) {
    yield index++;
  }
}

const gen = createIDs();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());