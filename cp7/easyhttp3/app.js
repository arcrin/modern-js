const http = new EasyHTTP;
const url = 'https://jsonplaceholder.typicode.com/users'

// User Data
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email:'jd@testmail.com'
}

// Get Users
// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Post
// http.post(url, data)
//   .then(resData => console.log(resData))
//   .catch(err => console.log(err));

// PUT
// http.put(url + '/2', data)
//   .then(resData => {console.log(resData)})
//   .catch(err => console.log(err));

// Delete
http.delete('https://jsonplaceholder.typicode.com/users/2')
  .then(data => console.log(data))
  .catch(err => console.log(err));