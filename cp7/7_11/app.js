document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click',getExternal);

function getText(){
  fetch('test.txt')
    .then(function(res){
      return res.text();
    })
    .then(function(text){
      console.log(text);
    })
    .catch(function(err){
      console.log(err);
    })
};

function getJson(){
  fetch('posts.json')
    .then((res) => {
      return res.json();
    })
    .then((json_data) => {
      console.log(json_data);
      let output = '';
      json_data.forEach((post) => {
        output += `<li>${post.title}: ${post.body}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch((err) => {
      console.log(err);
    })
};

function getExternal(){
  fetch('https://api.github.com/users')
    .then((res) => {
      return res.json();
    })
    .then((json_data) => {
      let output = '';
      json_data.forEach((user_info) => {
        output += `<li>${user_info.login}</li>`;
      })
      document.getElementById('output').innerHTML = output;
    })
    .catch((err) => {
      console.log(err);
    });
};