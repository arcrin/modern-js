const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

document.getElementById('create').addEventListener('click',
() => {
  createPost({title: 'New Post', body: 'This is a new post'}, getPosts);
})

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback()
  }, 2000);
};

function getPosts() {
  setTimeout(() => {
    let output ='';
    posts.forEach(post => {
      output += `<li>${post.title}: ${post.body}`;
      document.getElementById('posts').innerHTML = output;
    })
  });
}

getPosts();
// createPost({title: 'New Post', body: 'This is a new post'}, getPosts);