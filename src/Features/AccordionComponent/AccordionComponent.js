import React from 'react';
import { Accordion, accordionTitle, coursesList, titleCoursesList, TwoStarsIcon } from '../../Shared';

import styles from './accordeonComponent.module.scss';

const AccordionComponent = () => {
    return (
        <section className={styles.wrapper}>
            <TwoStarsIcon className={styles.wrapper__icon} />
            <h3 className={styles.wrapper__title}>
                Факультеты
                <TwoStarsIcon />
            </h3>
            <div className={styles.wrapper__accordeonContainer}>
                <p className={styles.wrapper__accordeonContainer__text}>{accordionTitle.text}</p>
                {coursesList.map(({ id, courseName, titleKey }) => (
                    <Accordion key={id} title={courseName} content={titleCoursesList[titleKey]} titleKey={titleKey} />
                ))}
            </div>
        </section>
    );
};

export default AccordionComponent;
