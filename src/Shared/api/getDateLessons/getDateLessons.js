import { sendRequest } from '../config';

const baseUrl = '';

export const getDateLessons = (path) => {
    return sendRequest({ baseUrl, path });
};
