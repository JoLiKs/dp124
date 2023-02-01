import { CoursePage, CoursesPage, HomePage, OnlineAndOfflinePage, TeachersPage } from '../../../Pages';

export const path = {
    basename: '/',
    java: '/java',
    python: '/python',
    frontend: '/frontend',
    testing: '/software-testing',
    teachers: '/teachers',
    courses: '/courses',
    online: '/online',
    offline: '/offline',
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
    {
        path: path.online,
        element: <OnlineAndOfflinePage typeCourse={'online'} />,
    },
    {
        path: path.offline,
        element: <OnlineAndOfflinePage typeCourse={'offline'} />,
    },
];
