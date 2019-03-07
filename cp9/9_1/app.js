const user = {email: 'test@testmail.com'};

try {
  // Produce a ReferenceError
  // myFunction();

  // Produce a TypeError
  // null.myFunction();

  // Will produce SyntaxError
  // eval('Hello World');

  // URIError
  decodeURIComponent('%');
} catch(e) {
  // console.log(`User Error: ${e.message}`);
  console.log(e);
  console.log(e.message);
  console.log(e.name);
  console.log(e instanceof TypeError);
} finally {
  console.log('Finally runs regardless of result');
}

console.log('Program continues');