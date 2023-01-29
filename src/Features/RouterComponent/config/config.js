import { CoursesPage, HomePage, TeachersPage } from '../../../Pages';

export const path = {
    basename: '/',
    java: '/java',
    python: '/python',
    softwareTesting: '/software-testing',
    teachers: '/teachers',
    courses: '/courses',
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
    {
        path: path.courses,
        element: <CoursesPage />,
    },
];
