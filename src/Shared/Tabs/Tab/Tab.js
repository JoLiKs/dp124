import React from 'react';
import styles from './../Tabs.module.scss';

export const Tab = ({ title, content }) => {
    return (
        <div className={styles.tabContentBlock}>
            <h3 className={styles.title}>{title}</h3>
            <ul className={styles.description}>
                {content.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
};
