import React from 'react';
import { Button, ComfortIcon, DevelopmentIcon, FreeIcon, GroupStars, ProspectsIcon } from '../../Shared';
import styles from './mainThirdScreen.module.scss';

const MainThirdScreen = () => {
    return (
        <section className={styles.wrapper}>
            <ComfortIcon className={styles.wrapper__comfortIcon} />
            <DevelopmentIcon className={styles.wrapper__develomentIcon} />
            <GroupStars className={styles.wrapper__groupStarsIconOne} />
            <h2 className={styles.wrapper__title}>Освойте самую перспективную профессию и измените свою жизнь</h2>
            <p className={styles.wrapper__text}>
                Ваши усилия, мотивированность и трудолюбие будут оценены и вознаграждены в IT-сфере
            </p>
            <Button className={styles.wrapper__btn} color={'secondary'}>
                Занять место на курсе
            </Button>
            <GroupStars className={styles.wrapper__groupStarsIconTwo} />
            <FreeIcon className={styles.wrapper__freeIcon} />
            <ProspectsIcon className={styles.wrapper__prospectsIcon} />
        </section>
    );
};

export default MainThirdScreen;
