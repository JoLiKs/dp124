import React from 'react';
import { classNames } from '../helpers';
import styles from './TeacherCard.module.scss';

export const TeacherCard = ({ firstName, lastName, teacher, title, photo, absolute, hover }) => {
    return (
        <div className={classNames({ [styles.hover]: hover, [styles.container]: true })}>
            <img className={classNames({ [styles.absolute]: absolute })} src={photo} alt={`${firstName} ${lastName}`} />
            <div className={styles.wrapper}>
                <h5>{`${firstName} ${lastName}`}</h5>
                <p>{teacher}</p>
                <p>{title}</p>
            </div>
        </div>
    );
};
