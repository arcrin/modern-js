const http = new EasyHTTP;

// User Data
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com'
}

let url = 'https://jsonplaceholder.typicode.com/users';

// http.get(url)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));


// http.post(url, data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// http.put(url + '/2', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

http.delete(url, data)
  .then(data => console.log(data))
  .catch(err => console.log('client side error handling', err));
