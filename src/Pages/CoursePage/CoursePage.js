import React from 'react';
import {
    ArrowsIcon,
    BurstStarIcon,
    Button,
    coursePageText,
    coursesList,
    OneStarIcon,
    tabsList,
    TwoStarsIcon,
} from '../../Shared';
import photoInfo from './../../Shared/img/photoInfo.svg';
import cursesImgOne from './../../Shared/img/coursesImgOne.jpg';
import cursesImgTwo from './../../Shared/img/coursesImgTwo.jpg';
import { Tabs } from '../../Shared/Tabs/Tabs';
import { CourseCostBlock, RegistrationCourseBlock } from '../../Features';
import styles from './CoursePage.module.scss';

const CoursePage = ({ course }) => {
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
                    <p className={styles.wrapper__secondSection__rightBlock__text}>
                        {coursePageText[course].courseAboutSecond}
                    </p>
                </div>
            </section>
            <section
                className={styles.wrapper__thirdSection}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
                <h5 className={styles.wrapper__thirdSection__title}>
                    Как проходит
                    <span>
                        обучение
                        <BurstStarIcon className={styles.wrapper__thirdSection__title__icon} />
                    </span>
                </h5>
                <div className={styles.wrapper__thirdSection__infoWrapper}></div>
                <div className={styles.wrapper__thirdSection__infoWrapper__block}>
                    <h5 className={styles.wrapper__thirdSection__infoWrapper__block__title}>90% практики</h5>
                    <span>01.</span>
                    <p className={styles.wrapper__thirdSection__infoWrapper__block__text}>
                        Практически на каждом занятии вы будете писать код под наблюдением опытного ментора. После курса
                        у каждого студента будет полноценное портфолио.
                    </p>
                </div>
                <span className={styles.wrapper__thirdSection__infoWrapper__bord}></span>
                <div className={styles.wrapper__thirdSection__infoWrapper__block}>
                    <h5 className={styles.wrapper__thirdSection__infoWrapper__block__title}>
                        Домашние задания и диплом
                    </h5>
                    <span>02.</span>
                    <p className={styles.wrapper__thirdSection__infoWrapper__block__text}>
                        Домашние задания основаны на реальных задачах, с которыми вы столкнётесь на работе в IT. Диплом
                        – доказательство вашей квалификации.
                    </p>
                </div>
                <span className={styles.wrapper__thirdSection__infoWrapper__bord}></span>
                <div className={styles.wrapper__thirdSection__infoWrapper__block}>
                    <h5 className={styles.wrapper__thirdSection__infoWrapper__block__title}>Группы до 14 человек</h5>
                    <span>03.</span>
                    <p className={styles.wrapper__thirdSection__infoWrapper__block__text}>
                        Мы нацелены на качественное образование, поэтому заботимся о том, чтобы найти к каждому студенту
                        индивидуальный подход.
                    </p>
                </div>
                <span className={styles.wrapper__thirdSection__infoWrapper__bord}></span>
                <div className={styles.wrapper__thirdSection__infoWrapper__block}>
                    <h5 className={styles.wrapper__thirdSection__infoWrapper__block__title}>Кураторы и менторы</h5>
                    <span>04.</span>
                    <p className={styles.wrapper__thirdSection__infoWrapper__block__text}>
                        У наших менторов есть не только опыт в коммерческой разработке, но и 2+ года опыта в
                        преподавании. Мы работаем по эффективной и проверенной программе обучения.
                    </p>
                </div>
                <span className={styles.wrapper__thirdSection__infoWrapper__bord}></span>
                <div className={styles.wrapper__thirdSection__infoWrapper__block}>
                    <h5 className={styles.wrapper__thirdSection__infoWrapper__block__title}>
                        Трудоустройство и фриланс
                    </h5>
                    <span>05.</span>
                    <p className={styles.wrapper__thirdSection__infoWrapper__block__text}>
                        Помогаем проходить собеседования в зарубежные IT-компании, проводим тренинги по поиску работы на
                        фрилансе или удалённо, консультируем по визам, видам на жительство, разрешениям на работу за
                        границей
                    </p>
                </div>
            </section>
            <section className={styles.wrapper__fourthSection} style={{ display: 'flex' }}>
                <figure className={styles.wrapper__fourthSection__img}>
                    <img src={photoInfo} alt="После курса" />
                </figure>
                <div className={styles.wrapper__fourthSection__afterCourse}>
                    <ul>
                        После курса:
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
            </section>
            <section className={styles.wrapper__fifthSection}>
                <h5 className={styles.wrapper__fifthSection__title}>
                    Программа<span>КУРСА</span>
                </h5>
                <Tabs className={styles.wrapper__fifthSection__table} items={tabsList[course]} />
                <a
                    className={styles.wrapper__fifthSection__btn}
                    href="https://drive.google.com/file/d/15Mv8OzNhRKFDqlB-ZiOBGL7rX2v4g0m2/view?usp=sharing"
                    download
                    target="_blank"
                >
                    <Button color="secondary">Скачать всю программу</Button>
                </a>
            </section>
            <section className={styles.wrapper__sixthSection}>
                <TwoStarsIcon className={styles.wrapper__sixthSection__twoStarsIcon} />
                <OneStarIcon className={styles.wrapper__sixthSection__oneStarIcon} />
                <CourseCostBlock />
                <RegistrationCourseBlock course={course} />
            </section>
        </div>
    );
};

export default CoursePage;
