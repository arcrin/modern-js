let re;
re = /test/;
re = /test/i; // i = case insensitice

console.log(re);
console.log(re.source);

// exec() - Return result in an array or null
// let result = re.exec('hello world');

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() - Returns true or false
// result = re.test('Hello');
// console.log(result);

// match() - Return result array or null
let str = "Test String";
let result = str.match(re);
console.log(result);

// search() - Returns index of the first match if not found returns -1
str = 'placeholder placeholder test placeholder placeholder';
result = str.search(re);
console.log(result);

// replace() - Returns new string with some or all matches of a pattern
str = 'placeholder placeholder test placeholder placeholder';
const newStr = str.replace(re, 'whatever');
console.log(newStr);