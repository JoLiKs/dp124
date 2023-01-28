import React from 'react';
import { Button, ComfortIcon, DevelopmentIcon, FreeIcon, ProspectsIcon } from '../../Shared';

const MainThirdScreen = () => {
    return (
        <div>
            <ComfortIcon />
            <DevelopmentIcon style={{ float: 'right' }} />
            <h2>Освойте самую перспективную профессию и измените свою жизнь</h2>
            <p>Ваши усилия, мотивированность и трудолюбие будут оценены и вознаграждены в IT-сфере</p>
            <Button color={'secondary'}>Занять место на курсе</Button>
            <FreeIcon />
            <ProspectsIcon style={{ float: 'right' }} />
        </div>
    );
};

export default MainThirdScreen;
