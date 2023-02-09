export const BASE_URL = 'http://178.172.138.15:8089';

export const sendRequest = async ({ path, method, body, headers }) => {
    const requestUrl = `${BASE_URL}/${path}`;
    const options = {
        method,
        headers: {
            ...headers,
        },
        body: body,
    };

    return await fetch(requestUrl, options);
};
