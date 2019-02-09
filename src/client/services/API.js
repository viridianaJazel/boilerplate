/**
  * API perfoms API calls to the backend
*/
class API {
  /**
    * construct Constructor of  API Service
    * @param {json} props props of the component
    * @returns {json} this value of the component
  */
  constructor() {
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    };
    this.version = 'v1';
  }

  /**
  * Performs a get request to the API
  * @param {string} path - the path where the request will be send
  * @param {Object} extraHeaders - Extra request Headers (optional)
  * @returns {Promise} - dbaas response
  */
  static get(path, extraHeaders) {
    return this.request(path, 'GET', {}, extraHeaders)
      .then((response) => {

        if (!response.ok) { // Error
          return new Promise((resolve, reject) => {
            reject(new Error(response.statusText));
          });
        }

        return response.json();
      });
  }

  /**
  * Performs a post request to the API
  * @param {string} path - the path where the request will be send
  * @param {json} body - body to send in the request
  * @param {Object} extraHeaders - Extra request Headers (optional)
  * @returns {Promise} - dbaas response
  */
  static post(path, body, extraHeaders) {
    return this.request(path, 'POST', body, extraHeaders);
  }

  /**
  * Performs a delete request to the API
  * @param {string} path - the path where the request will be send
  * @param {json} body - body to send in the request
  * @param {Object} extraHeaders - Extra request Headers (optional)
  * @returns {Promise} - dbaas response
  */
  static delete(path, body, extraHeaders) {
    return this.request(path, 'DELETE', body, extraHeaders);
  }

  /**
  * Performs an update request to the API
  * @param {string} path - the path where the request will be send
  * @param {json} body - body to send in the request
  * @param {Object} extraHeaders - Extra request Headers (optional)
  * @returns {Promise} - dbaas response
  */
  static patch(path, body, extraHeaders) {
    return this.request(path, 'PATCH', body, extraHeaders);
  }

  /**
  * Performs an update request to the API
  * @param {string} path - the path where the request will be send
  * @param {json} body - body to send in the request
  * @param {Object} extraHeaders - Extra request Headers (optional)
  * @returns {Promise} - dbaas response
  */
  static put(path, body, extraHeaders) {
    return this.request(path, 'PUT', body, extraHeaders);
  }

  /**
   * Performs an HTTP request
   * @param {string} path - the path where the request will be send
   * @param {string} method - HTTP method(POST, PUT, DELETE, GET)
   * @param {Object} body - JSON body
   * @param {Object} extraHeaders - Extra request Headers (optional)
  * @returns {Promise} - dbaas response
   */
  static request(path, method, body, extraHeaders) {
    // Set headers
    let headers = this.defaultHeaders;
    if (extraHeaders) {
      headers = Object.assign({}, extraHeaders, headers);
    }

    // Set settings
    const settings = {};
    settings.method = method;
    settings.headers = headers;

    if (method !== 'GET') {
      settings.body = JSON.stringify(body);
    }

    // Performs a request to the  API
    return fetch(`api/v1${path}`, settings)
      .then(response => response);
  }
}

export default API;
