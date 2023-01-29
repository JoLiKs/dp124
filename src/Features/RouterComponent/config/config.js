import { HomePage, TeachersPage } from '../../../Pages';

export const path = {
    basename: '/',
    java: '/java',
    python: '/python',
    softwareTesting: '/software-testing',
    teachers: '/teachers',
};

export const router = [
    {
        path: path.basename,
        element: <HomePage />,
    },
    {
        path: path.java,
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
    {
        path: path.teachers,
        element: <TeachersPage />,
    },
];
