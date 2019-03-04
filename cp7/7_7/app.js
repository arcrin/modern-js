const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

// function createPost(post) {
//   setTimeout(function() {
//     posts.push(post);
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(function() {
//     let output = '';
//     posts.forEach(function(post){
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({title: 'Post Three', body: 'This is post three'});

// getPosts();

function createPost(post, timeout, callback) {
  setTimeout(function() {
    posts.push(post);
    callback();
  }, timeout);
}

function getPosts() {
  // setTimeout(function(){
  //   let output = '';
  //   posts.forEach(function(post){
  //     output += `<li>${post.title}</li>`;
  //   });
  //   document.body.innerHTML = output;
  // }, 1000);
  let output = '';
  posts.forEach(function(post) {
    output += `<li>${post.title}</li>`;
  });
  document.body.innerHTML = output;
}

createPost({title: 'Post Three', body: 'This is post three'}, 3000, getPosts);
createPost({title: 'Post Four', body: 'This is post four'}, 2000, getPosts);
createPost({title: 'Post Five', body: 'This is post five'}, 1000, getPosts);