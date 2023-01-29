import React, { Suspense } from 'react';
import { MainFirstScreen } from '../../Features/MainFirstScreen/MainFirstScreen';
import { PhotoIcon } from '../../Shared';
import {
    AccordionComponent,
    MainThirdScreen,
    MainFourthScreen,
    TeachersScreen,
    FeedbackComponent,
} from '../../Features';
import { MainSecondScreen } from '../../Features/MainSecondScreen/MainSecondScreen';

export const HomePage = () => {
    return (
        <>
            <MainFirstScreen />
            <PhotoIcon />
            <MainSecondScreen />
            <Suspense fallback={'Загрузка'}>
                <AccordionComponent />
                <MainThirdScreen />
                <MainFourthScreen />
                <TeachersScreen />
                <FeedbackComponent />
            </Suspense>
        </>
    );
};
