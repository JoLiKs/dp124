import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DeveloperTitleBlock.module.scss';

export const DeveloperTitleBlock = ({ developer, titleJob, pathName, imgList, index, filtredTypesArray }) => {
    const dateStart = filtredTypesArray.find(({ faculty }) => faculty === developer.split(' ')[0].toLowerCase());

    const content =
        index % 2 === 0 ? (
            <>
                <figure className={styles.imageLeft}>
                    <img src={imgList[index]} alt={titleJob} />
                </figure>
                <div className={styles.textBlock}>
                    <h3 className={styles.title}>{developer}</h3>
                    <p className={styles.description}>{titleJob}</p>
                    <h4>Старт ближайшего курса: {dateStart?.start || 'Уточняйте по телефону'}</h4>
                    <span className={styles.link}>
                        <Link to={pathName}>Подробнее</Link>
                    </span>
                </div>
            </>
        ) : (
            <>
                <div className={styles.textBlock}>
                    <h3 className={styles.title}>{developer}</h3>
                    <p className={styles.description}>{titleJob}</p>
                    <h4>Старт ближайшего курса: {dateStart?.start || 'Уточняйте по телефону'}</h4>
                    <span className={styles.link}>
                        <Link to={pathName}>Подробнее</Link>
                    </span>
                </div>
                <figure className={styles.imageRight}>
                    <img src={imgList[index]} alt={titleJob} />
                </figure>
            </>
        );

    return <div className={styles.container}>{content}</div>;
};
