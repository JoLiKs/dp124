import { lazy } from 'react';

export { Header } from './Header/Header';
export { TeachersBlock } from './TeachersBlock/TeachersBlock';
export { DeveloperTitleBlock } from './DeveloperTitleBlock/DeveloperTitleBlock';
export { RegistrationCourseBlock } from './RegistrationCourseBlock/RegistrationCourseBlock';
export { CourseCostBlock } from './CourseCostBlock/CourseCostBlock';
export { JobOpeningsBlock } from './JobOpeningsBlock/JobOpeningsBlock';
export { AccordionComponent } from '../Features/AccordionComponent/AccordionComponent';
export { MainThirdScreen } from './HomePageScreen/MainThirdScreen/MainThirdScreen';
export { MainFourthScreen } from './HomePageScreen/MainFourthScreen/MainFourthScreen';
export { TeachersScreen } from './HomePageScreen/TeachersScreen/TeachersScreen';
export { FeedbackComponent } from '../Features/FeedbackComponent/FeedbackComponent';
export { BurgerMenu } from '../Features/BurgerMenu/BurgerMenu';

export const Footer = lazy(() => import('./Footer/Footer'));
