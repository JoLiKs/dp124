import React from 'react';
import { ArrowsIcon, Button, coursePageText, coursesList, tabsList, TwoStarsIcon } from '../../Shared';
import photoInfo from './../../Shared/img/photoInfo.svg';
import cursesImgOne from './../../Shared/img/coursesImgOne.jpg';
import cursesImgTwo from './../../Shared/img/coursesImgTwo.jpg';
import { Tabs } from '../../Shared/Tabs/Tabs';
import { CourseCostBlock, JobOpeningsBlock, RegistrationCourseBlock } from '../../Features';
import styles from './CoursePage.module.scss';

export const CoursePage = ({ course }) => {
    const titleCourse = coursesList.find(({ titleKey }) => titleKey === course);

    return (
        <div className={styles.wrapper}>
            <section className={styles.wrapper__firstSection}>
                <div className={styles.wrapper__firstSection__leftBlock}>
                    <h2 className={styles.wrapper__firstSection__leftBlock__title}>{titleCourse.courseName}</h2>
                    <p className={styles.wrapper__firstSection__leftBlock__text}>{coursePageText[course].subTitle}</p>
                </div>
                <div className={styles.wrapper__firstSection__rightBlock}>
                    <RegistrationCourseBlock course={course} />
                </div>
                <ArrowsIcon className={styles.wrapper__firstSection__arrowsIcon} />
                <TwoStarsIcon className={styles.wrapper__firstSection__twoStarsIcon} />
            </section>
            <section className={styles.wrapper__secondSection}>
                <div className={styles.wrapper__secondSection__leftBlock}>
                    <figure>
                        <img src={cursesImgOne} alt="about curse" />
                    </figure>
                    <figure>
                        <img src={cursesImgTwo} alt="about curse" />
                    </figure>
                </div>
                <div className={styles.wrapper__secondSection__rightBlock}>
                    <h6 className={styles.wrapper__secondSection__rightBlock__title}>О чем этот курс</h6>
                    <p className={styles.wrapper__secondSection__rightBlock__text}>
                        {coursePageText[course].courseAbout}
                    </p>
                </div>
            </section>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h5>Как проходит обучение</h5>
                <div style={{ display: 'flex' }}>
                    <p>90% практики 01</p>
                    <p>
                        Практически на каждом занятии вы будете писать код под наблюдением опытного ментора. После курса
                        у каждого студента будет полноценное портфолио.
                    </p>
                </div>
                <div style={{ display: 'flex' }}>
                    <p>Домашние задания и диплом 02</p>
                    <p>
                        Домашние задания основаны на реальных задачах, с которыми вы столкнётесь на работе в IT. Диплом
                        – доказательство вашей квалификации.
                    </p>
                </div>
                <div style={{ display: 'flex' }}>
                    <p>Группы до 14 человек 03</p>
                    <p>
                        Мы нацелены на качественное образование, поэтому заботимся о том, чтобы найти к каждому студенту
                        индивидуальный подход.
                    </p>
                </div>
                <div style={{ display: 'flex' }}>
                    <p>Кураторы и менторы 04</p>
                    <p>
                        У наших менторов есть не только опыт в коммерческой разработке, но и 2+ года опыта в
                        преподавании. Мы работаем по эффективной и проверенной программе обучения.
                    </p>
                </div>
                <div style={{ display: 'flex' }}>
                    <p>Трудоустройство и фриланс 05</p>
                    <p>
                        Помогаем проходить собеседования в зарубежные IT-компании, проводим тренинги по поиску работы на
                        фрилансе или удалённо, консультируем по визам, видам на жительство, разрешениям на работу за
                        границей
                    </p>
                </div>
                <div style={{ display: 'flex' }}>
                    <figure>
                        <img src={photoInfo} alt="После курса" />
                    </figure>
                    <div>
                        <ul>
                            После курса
                            <li>{coursePageText[course].afterCourse.one}</li>
                            <li>{coursePageText[course].afterCourse.two}</li>
                            <li>{coursePageText[course].afterCourse.three}</li>
                            <li>{coursePageText[course].afterCourse.four}</li>
                        </ul>
                        <ul>
                            В течение курса вы пополните портфолио проектами:
                            <li>{coursePageText[course].during.one}</li>
                            <li>{coursePageText[course].during.two}</li>
                            <li>{coursePageText[course].during.three}</li>
                            <li>{coursePageText[course].during.four}</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.tabsBlock}>
                    <h5>Программа КУРСА</h5>
                    <Tabs items={tabsList[course]} />
                    <Button color="secondary">Скачать всю программу</Button>
                </div>
            </div>
            <div className={styles.CostBlock}>
                <CourseCostBlock />
                <RegistrationCourseBlock course={course} />
            </div>
        </div>
    );
};
