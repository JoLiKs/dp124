import { sendRequest } from '../config';

export const sendContactsService = (path, data) => {
    return sendRequest({
        path,
        method: 'POST',
        body: data,
    });
};
