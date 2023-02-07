import React from 'react';
import { MainFirstScreen } from '../../Features/MainFirstScreen/MainFirstScreen';
import {
    AccordionComponent,
    MainThirdScreen,
    MainFourthScreen,
    TeachersScreen,
    FeedbackComponent,
} from '../../Features';
import { MainSecondScreen } from '../../Features/MainSecondScreen/MainSecondScreen';
import { LazyImage } from '../../Shared';
import image from '../../Shared/img/photo.webp';

export const HomePage = () => {
    return (
        <>
            <MainFirstScreen />
            <LazyImage src={image} alt="твоя новая профессия в IT" />
            <MainSecondScreen />
            <AccordionComponent />
            <MainThirdScreen />
            <MainFourthScreen />
            <TeachersScreen />
            <FeedbackComponent />
        </>
    );
};
