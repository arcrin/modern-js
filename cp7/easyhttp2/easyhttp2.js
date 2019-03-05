class EasyHTTP {
  get(url) {
    return new Promise(function(resolve, reject) {
      fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(reject(err))
    })
  }

  post(url, data) {
    return new Promise(function(resolve, reject) {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    })
  }

  put(url, data) {
    return new Promise(function(resolve, reject){
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolce(data))
      .catch(err => reject(err));
    })
  }

  delete(url) {
    return new Promise(function(resolve, reject) {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      })
      .then(res => {
        console.log(res);
        if(res.status === 200) {
          return res.json();
        } else {
          throw Error(res.status)
        }
      })
      .then((data) => resolve(data))
      .catch(err => reject(err));
    })
  }
}
