const http = new easyHTTP;

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

const data = {
  title: 'Custome Post',
  body: 'This is a custom post'
};

// Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
  if(err) {
    console.log(err);
  } else {
    console.log(response);
  }
})