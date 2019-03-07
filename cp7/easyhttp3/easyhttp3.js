class EasyHTTP {
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }

  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      boyd: JSON.stringify(data)
    });
    console.log(response);
    const resData = await response.json();
    return resData;
  }

  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    console.log(response);
    const resData = response.json();
    return resData;
  }

  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
    });

    console.log(response);
    const resData = await 'Resource Deleted';
    return resData;
  }
}