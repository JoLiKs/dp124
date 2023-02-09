import { sendRequest } from '../config';

export const getDateLessons = (path) => {
    return sendRequest({ path });
};
