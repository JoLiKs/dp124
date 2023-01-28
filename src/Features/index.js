import { lazy } from 'react';
export { Header } from './Header/Header';
export const Footer = lazy(() => import('../Features/Footer/Footer'));
export const AccordionComponent = lazy(() => import('../Features/AccordionComponent/AccordionComponent'));
export const MainThirdScreen = lazy(() => import('../Features/MainThirdScreen/MainThirdScreen'));
