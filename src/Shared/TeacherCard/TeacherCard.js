import React from 'react';
import styles from './TeacherCard.module.scss';

export const TeacherCard = ({ firstName, lastName, teacher, title, photo, teacherPage }) => {
    return (
        <>
            {!teacherPage && (
                <div className={styles.container}>
                    <img
                        width="278"
                        height="333"
                        className={styles.container__photo}
                        src={photo}
                        alt={`${firstName} ${lastName}`}
                    />
                    <div className={styles.container__wrapper}>
                        <h5 className={styles.container__wrapper__teacherName}>{`${firstName} ${lastName}`}</h5>
                        <p className={styles.container__wrapper__teacherFaculty}>{teacher}</p>
                        <p>{title}</p>
                    </div>
                </div>
            )}
            {teacherPage && (
                <div className={styles.container}>
                    <img className={styles.container__photoTwo} src={photo} alt={`${firstName} ${lastName}`} />
                    <div>
                        <h5 className={styles.container__wrapper__teacherName}>{`${firstName} ${lastName}`}</h5>
                        <p className={styles.container__wrapper__teacherFaculty}>{teacher}</p>
                        <p>{title}</p>
                    </div>
                </div>
            )}
        </>
    );
};
