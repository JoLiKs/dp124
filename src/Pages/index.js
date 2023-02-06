import { lazy } from 'react';

export { HomePage } from './HomePage/HomePage';
export const TeachersPage = lazy(() => import('./TeachersPage/TeachersPage'));
export const CoursesPage = lazy(() => import('./CoursesPage/CoursesPage'));
export const CoursePage = lazy(() => import('./CoursePage/CoursePage'));
export const OnlineAndOfflinePage = lazy(() => import('./OnlineAndOfflinePage/OnlineAndOfflinePage'));
