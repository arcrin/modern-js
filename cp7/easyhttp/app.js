const http = new easyHTTP;
let url = 'https://jsonplaceholder.typicode.com/posts';



const data = {
  title: 'Custome Post',
  body: 'This is a custom post'
};

// http.post(url, data, (err, response) => {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   }
// })

// http.put(url + '/2', data, function(err, response){
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   }
// })

http.delete(url + '/2', (err, response) => {
  console.log(this);
  if(err) {
    console.log(err);
  } else {
    console.log(response);
  }
})
