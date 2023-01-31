import React from 'react';
import { BurstStarIcon, TeacherCard, teachersList } from '../../Shared';
import styles from './TheachersBlock.module.scss';

export const TeachersBlock = ({ courseName, facultyKey, index }) => {
    const titleName = facultyKey === 'testing' ? 'тестирования ПО' : facultyKey;
    const indexWord = courseName.indexOf(titleName);

    const titleContent =
        index % 2 === 0 ? (
            <>
                <BurstStarIcon /> {`${courseName.slice(0, indexWord)} ${titleName.toUpperCase()}`}
            </>
        ) : (
            <>
                {`${courseName.slice(0, indexWord)} ${titleName.toUpperCase()}`} <BurstStarIcon />
            </>
        );

    return (
        <div>
            <h2 className={styles.facultyName}>{titleContent}</h2>
            <div className={styles.cardBlock}>
                {teachersList[facultyKey].map(({ firstName, lastName, teacher, title, photo }) => (
                    <TeacherCard
                        key={Math.random()}
                        photo={photo}
                        firstName={firstName}
                        lastName={lastName}
                        teacher={teacher}
                        title={title}
                    />
                ))}
            </div>
        </div>
    );
};
