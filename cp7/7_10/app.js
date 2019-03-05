const posts = [
  {title: 'Post One', body:'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

function createPost(post) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      posts.push(post);

      const error = false;
      if(!error) {
        resolve();
      } else {
        reject("Error creating post");
      }
    }, 2000);
  })
}

function getPosts(){
  let output = '';
  posts.forEach(post => {
    output += `<li>${post.title}: ${post.body}</li>`;
  })
  document.getElementById('posts').innerHTML = output;
}


getPosts();
createPost({title: 'New post', body: 'meaningless emotional piece'})
  .then(getPosts)
  .catch((err) => {
    console.log(err);
  })