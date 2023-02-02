import React from 'react';
import { Button, coursePageText, coursesList, tabsList } from '../../Shared';
import photoInfo from './../../Shared/img/photoInfo.svg';
import { Tabs } from '../../Shared/Tabs/Tabs';
import styles from './CoursePage.module.scss';

export const CoursePage = ({ course }) => {
    const titleCourse = coursesList.find(({ titleKey }) => titleKey === course);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex' }}>
                <div>
                    <h2>{titleCourse.courseName}</h2>
                    <p>{coursePageText[course].subTitle}</p>
                </div>
                <div> Блок для формы!</div>
            </div>
            <div>
                <h6>О чем этот курс</h6>
                <p>{coursePageText[course].courseAbout}</p>
            </div>
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
        </div>
    );
};
