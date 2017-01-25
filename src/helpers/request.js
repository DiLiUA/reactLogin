export default class RequestHelper {
  static _url = 'http://localhost:8080';

  static _checkStatus(response) {
    const status = response.status;

    if ( status >= 200 && status < 300 ) {
      return response.json();
    } else {
      return response.json().then(data => {
        throw data
      });
    }
  };

  static _post(url, data) {
    return fetch(`${RequestHelper._url}${url}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify(data)
    })
      .then(RequestHelper._checkStatus)
      .then(data => data)
      .catch(error => {
        throw error;
      })
  }
};