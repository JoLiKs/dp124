import { CoursePage, CoursesPage, HomePage, TeachersPage } from '../../../Pages';

export const path = {
    basename: '/',
    java: '/java',
    python: '/python',
    frontend: '/frontend',
    testing: '/software-testing',
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
        element: <CoursePage course={'java'} />,
    },
    {
        path: path.python,
        element: <CoursePage course={'python'} />,
    },
    {
        path: path.testing,
        element: <CoursePage course={'testing'} />,
    },
    {
        path: path.frontend,
        element: <CoursePage course={'frontend'} />,
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
