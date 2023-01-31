import React from 'react';
import { classNames } from '../helpers';
import styles from './TeacherCard.module.scss';

export const TeacherCard = ({ firstName, lastName, teacher, title, photo, absolute, hover }) => {
    return (
        <div className={classNames({ [styles.hover]: hover, [styles.container]: true })}>
            <img
                width="278"
                height="333"
                className={classNames({ [styles.absolute]: absolute, [styles.photo]: true })}
                src={photo}
                alt={`${firstName} ${lastName}`}
            />
            <div className={styles.wrapper}>
                <h5 className={styles.teacherName}>{`${firstName} ${lastName}`}</h5>
                <p className={styles.teacherFaculty}>{teacher}</p>
                <p>{title}</p>
            </div>
        </div>
    );
};
