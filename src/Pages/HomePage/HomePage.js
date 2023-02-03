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
import styles from './HomePage.module.scss';

export const HomePage = () => {
    return (
        <>
            <MainFirstScreen />
            <PhotoIcon className={styles.imageIcon} />
            <MainSecondScreen />
            <Suspense fallback="...Loading">
                <AccordionComponent />
                <MainThirdScreen />
                <MainFourthScreen />
                <TeachersScreen />
                <FeedbackComponent />
            </Suspense>
        </>
    );
};
