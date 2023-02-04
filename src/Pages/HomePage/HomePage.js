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

import image from '../../Shared/img/photo.png';

export const HomePage = () => {
    return (
        <>
            <MainFirstScreen />
            <figure>
                <img height="100%" width="100%" src={image} alt="" />
            </figure>
            <MainSecondScreen />
            <AccordionComponent />
            <MainThirdScreen />
            <MainFourthScreen />
            <TeachersScreen />
            <FeedbackComponent />
        </>
    );
};
