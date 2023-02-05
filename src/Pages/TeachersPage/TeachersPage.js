import React from 'react';
import { coursesList, OneStarIcon } from '../../Shared';
import { FeedbackComponent, TeachersBlock } from '../../Features';
import styles from './TeashersPage.module.scss';

export const TeachersPage = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                Преподаватели <OneStarIcon />
            </h2>
            <p className={styles.subtitle}>
                Разработчики с 4+ годами опыта, которые уже помогли стать программистом сотням начинающих айтишников.
                Наши преподаватели работали в разных аутсорсинговых и продуктовых IT-компаниях, а также на фрилансе. Они
                используют оригинальные и проверенные на десятках студентов методики обучения.
            </p>

            <div>
                {coursesList.map(({ titleKey, courseName }, index) => (
                    <TeachersBlock
                        key={titleKey}
                        courseName={courseName}
                        facultyKey={titleKey}
                        index={index}
                        teacherPage
                    />
                ))}
            </div>

            <FeedbackComponent />
        </div>
    );
};
