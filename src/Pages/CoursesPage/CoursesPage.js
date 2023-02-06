import React from 'react';
import { FeedbackComponent } from '../../Features';
import { ArrowButtonIcon, OneStarIcon } from '../../Shared';
import { Link } from 'react-router-dom';
import { path } from '../../Features/RouterComponent/config/config';
import onLinePhoto from '../../Shared/img/offlineCoursesPhoto.svg';
import offLinePhoto from '../../Shared/img/onlineCoursesPhoto.svg';
import styles from './CoursesPage.module.scss';

export const CoursesPage = () => {
    return (
        <section style={{ display: 'flex', flexDirection: 'column' }}>
            <h2 className={styles.title}>Курсы</h2>
            <p className={styles.description}>
                Наша программа разработана ведущими IT-специалистами, которые 4+ года работали с новичками в IT
            </p>
            <div className={styles.wrapper_type_course}>
                <h3 className={styles.typeCourse}>
                    <span className={styles.color}>ОНЛАЙН</span> <span>ОБУЧЕНИЕ</span>
                    <OneStarIcon className={styles.star} />
                </h3>
            </div>
            <div className={styles.wrapper_title_list}>
                <ul className={styles.list_title}>
                    <span>Почему нужно выбрать</span>
                    <li>удобный график</li>
                    <li>экономия времени и денег</li>
                    <li>учёба с комфортом</li>
                    <li>преподаватель из иностранной IT-компании</li>
                    <li>постоянная поддержка личного ментора</li>
                    <li>учёба в любой точке мира</li>
                </ul>
            </div>

            <div className={styles.arrowLink}>
                <Link to={path.online}>
                    <ArrowButtonIcon />
                </Link>
            </div>
            <figure className={styles.image}>
                <img src={onLinePhoto} alt="онлайн обучение" />
            </figure>
            <div className={styles.wrapper_type_course}>
                <h3 className={styles.typeCourse}>
                    <span className={styles.color}>ОФЛАЙН</span> <span>ОБУЧЕНИЕ</span>
                    <OneStarIcon className={styles.star} />
                </h3>
            </div>
            <div className={styles.wrapper_title_list}>
                <ul className={styles.list_title_offline}>
                    <span>Почему вам это подойдет</span>
                    <li>живое взаимодействие с группой</li>
                    <li>больше дисциплины</li>
                    <li>мотивирующая обстановка</li>
                    <li>комфортный офис в шаговой доступности от метро (рядом есть парковка)</li>
                    <li>постоянная поддержка личного ментора</li>
                </ul>
            </div>
            <div className={styles.arrowLink}>
                <Link to={path.offline}>
                    <ArrowButtonIcon />
                </Link>
            </div>
            <figure style={{ width: '100%' }}>
                <img src={offLinePhoto} alt="офлайн обучение" />
            </figure>
            <FeedbackComponent />
        </section>
    );
};
