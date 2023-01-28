import React from 'react';
import { MainFirstScreen } from '../../Features/MainFirstScreen/MainFirstScreen';
import { PhotoIcon } from '../../Shared';
import { AccordionComponent } from '../../Features/AccordionComponent/AccordionComponent';

export const HomePage = () => {
    return (
        <>
            <MainFirstScreen />
            <PhotoIcon />
            <AccordionComponent />
        </>
    );
};
