import { lazy } from 'react';
export { Header } from './Header/Header';
export { TeachersBlock } from './TeachersBlock/TeachersBlock';
export const Footer = lazy(() => import('../Features/Footer/Footer'));
export const AccordionComponent = lazy(() => import('../Features/AccordionComponent/AccordionComponent'));
export const MainThirdScreen = lazy(() => import('../Features/MainThirdScreen/MainThirdScreen'));
export const MainFourthScreen = lazy(() => import('../Features/MainFourthScreen/MainFourthScreen'));
export const TeachersScreen = lazy(() => import('../Features/TeachersScreen/TeachersScreen'));
export const FeedbackComponent = lazy(() => import('../Features/FeedbackComponent/FeedbackComponent'));
