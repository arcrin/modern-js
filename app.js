const firstName = "William";
const lastName = "Johnson";
const age = 36;
const str = "Hello there the name is Arcia";
const tags = "web design, web development, programming";
<<<<<<< HEAD
const val1 = "This is the home master branch";

=======
const val1 = "This is the home arcia/home branch";
>>>>>>> arcia/home

let val;

val = firstName + lastName;

val = firstName + " " + lastName;

val = "Brad ";
val += "Traversy";

val = "Hello, the name is " + firstName + ' and I am ' + age;

val = "That's awesome, I can't wait";

val = firstName.length;

val = firstName.concat(" ", lastName);

val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0];

val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

val = firstName.charAt('2');

val = firstName.charAt(firstName.length - 1);

val = firstName.substring(0, 4);

val = firstName.slice(-3);

val = str.split(" ");

val = tags.split(",")

val = str.replace("Arcia", "Jack");

val = str.includes("foo");


console.log(val);