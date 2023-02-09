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

    if (method === 'POST' || method === 'PUT') {
        options.body = JSON.stringify(body);
    }

    const response = await fetch(requestUrl, options);

    const contentType = response.headers.get('Content-Type');

    if (contentType.includes('application/json' || 'multipart/form-data')) {
        return response;
    } else {
        throw new Error('Не тот формат данных');
    }
};
