export const BASE_URL = 'http://178.172.138.15:8089';

export const sendRequest = async ({ path, method, body, headers }) => {
  return await axios.post(`${BASE_URL}/${path}`, {
    proxy: {
      host: '203.28.9.238',
      port: 80
    }, params: body, headers: headers
  });
}

/*export const sendRequest = async ({ path, method, body, headers }) => {
    const requestUrl = `${BASE_URL}/${path}`;
    const options = {
        method,
        headers: {
            ...headers,
        },
        body: body,
    };

    return await fetch(requestUrl, options);
};*/
