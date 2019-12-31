

const getJSON = url => {
  const promise = new Promise((resolve, reject) => {
    const handler = () => {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open('GET', url);
    client.onreadystatechange = handler.bind(client);
    client.responseType = 'json';
    client.setRequestHeader('Accept', 'application/json');
    client.send();
  });
  return promise;
}

const url = `https://api.doctoroyy.net/book/getAll?page=1&&pageSize=20`

// getJSON(url)
//   .then((res, error) => {
//     if (!error) {
//       console.log(res);
//     } else {
//       console.log(error)
//     }
//   })

fetch(url)
  .then(response => response.json())
  .then(res => console.log(res))