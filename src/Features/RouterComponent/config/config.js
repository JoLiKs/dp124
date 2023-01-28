import { HomePage } from '../../../Pages';

export const path = {
    basename: '/',
    java: '/java',
    python: '/python',
    softwareTesting: '/software-testing',
};

export const router = [
    {
        path: path.basename,
        element: <HomePage />,
    },
    {
        path: path.python,
        element: <h1>java</h1>,
    },
    {
        path: path.python,
        element: <h1>python</h1>,
    },
    {
        path: path.softwareTesting,
        element: <h1>softwareTesting</h1>,
    },
];
