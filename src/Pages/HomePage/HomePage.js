import React from 'react';
import { MainFirstScreen } from '../../Features/MainFirstScreen/MainFirstScreen';
import { PhotoIcon } from '../../Shared';
import { AccordionComponent, MainThirdScreen } from '../../Features';
import { MainSecondScreen } from '../../Features/MainSecondScreen/MainSecondScreen';

export const HomePage = () => {
    return (
        <>
            <MainFirstScreen />
            <PhotoIcon />
            <MainSecondScreen />
            <AccordionComponent />
            <MainThirdScreen />
        </>
    );
};
