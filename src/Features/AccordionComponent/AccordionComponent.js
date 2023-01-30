import React from 'react';
import { Accordion, coursesList, titleCoursesList } from '../../Shared';
import styles from './accordeonComponent.module.scss';
import { accordeonTitle } from '../../Shared/config/constants';

const AccordionComponent = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.wrapper__titleBlock}>
                <h3 className={styles.wrapper__titleBlock__title}>Факультеты</h3>
                <p className={styles.wrapper__titleBlock__text}>{accordeonTitle.text}</p>
            </div>
            <div className={styles.wrapper__accordeonContainer}>
                {coursesList.map(({ id, courseName, titleKey }) => (
                    <Accordion key={id} title={courseName} content={titleCoursesList[titleKey]} titleKey={titleKey} />
                ))}
            </div>
        </section>
    );
};

export default AccordionComponent;
