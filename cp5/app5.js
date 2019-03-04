const personPrototypes = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastName){
    this.lastName = newLastName;
  }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

mary.getsMarried('Thompson');

console.log(mary.greeting());

const arc = Object.create(personPrototypes, {
  firstName: {value: 'Arc'},
  lastName: {value: 'Rin'},
  age: {value: 36}
});

console.log(arc);

console.log(arc.greeting());

