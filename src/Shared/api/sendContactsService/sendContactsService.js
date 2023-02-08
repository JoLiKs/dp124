import { sendRequest } from '../config';

export const sendContactsService = (path, post) => {
    return sendRequest({
        //  baseUrl,
        path,
        method: 'POST',
        body: post,
        headers: {
            'Content-Type': 'application/json',
        },
    });
};
