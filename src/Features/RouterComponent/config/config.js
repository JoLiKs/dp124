import { CoursePage, CoursesPage, HomePage, OnlineAndOfflinePage, TeachersPage } from '../../../Pages';
import { Suspense } from 'react';

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

        element: (
            <Suspense fallback={'Loading.....'}>
                <CoursePage course={'java'} />
            </Suspense>
        ),
    },
    {
        path: path.python,
        element: (
            <Suspense fallback={'Loading.....'}>
                <CoursePage course={'python'} />
            </Suspense>
        ),
    },
    {
        path: path.testing,
        element: (
            <Suspense fallback={'Loading.....'}>
                <CoursePage course={'testing'} />
            </Suspense>
        ),
    },
    {
        path: path.frontend,
        element: (
            <Suspense fallback={'Loading.....'}>
                <CoursePage course={'frontend'} />
            </Suspense>
        ),
    },
    {
        path: path.teachers,
        element: (
            <Suspense fallback={'Loading.....'}>
                <TeachersPage />
            </Suspense>
        ),
    },
    {
        path: path.courses,
        element: (
            <Suspense fallback={'Loading.....'}>
                <CoursesPage />
            </Suspense>
        ),
    },
    {
        path: path.online,
        element: (
            <Suspense fallback={'Loading.....'}>
                <OnlineAndOfflinePage typeCourse={'online'} />
            </Suspense>
        ),
    },
    {
        path: path.offline,
        element: (
            <Suspense fallback={'Loading.....'}>
                <OnlineAndOfflinePage typeCourse={'offline'} />
            </Suspense>
        ),
    },
];
