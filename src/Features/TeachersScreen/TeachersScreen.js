import React, { useState } from 'react';
import { LinkComponent, OneStarIcon, TeacherCard, teachersList } from '../../Shared';
import { getRndInteger } from '../../Shared/helpers';
import { randomMizer } from './config';
import styles from './TeacherCard.module.scss';

const randomIndex = getRndInteger(1, 4);

const TeachersScreen = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className={styles.wrapper}>
            <h2 className={styles.wrapper__title}>
                Преподаватели
                <OneStarIcon className={styles.wrapper__title__icon} />
            </h2>
            <p className={styles.wrapper__text}>
                Разработчики с 4+ годами опыта, которые уже помогли стать программистом сотням начинающих айтишников.
                Наши преподаватели работали в разных аутсорсинговых и продуктовых IT-компаниях, а также на фрилансе. Они
                используют оригинальные и проверенные на десятках студентов методики обучения.
            </p>
            <div className={styles.wrapper__teachersBlock}>
                {teachersList[randomMizer[randomIndex]]?.map(({ firstName, lastName, teacher, title, photo }) => (
                    <TeacherCard
                        key={Math.random()}
                        absolute
                        hover
                        photo={photo}
                        firstName={firstName}
                        lastName={lastName}
                        teacher={teacher}
                        title={title}
                    />
                ))}
            </div>
            {isOpen && (
                <div className={styles.wrapper__teachersBlockHidden}>
                    {Object.keys(randomMizer).map((key) => {
                        if (+key !== randomIndex) {
                            return teachersList[randomMizer[key]]?.map(
                                ({ firstName, lastName, teacher, title, photo }) => (
                                    <TeacherCard
                                        key={Math.random()}
                                        photo={photo}
                                        firstName={firstName}
                                        lastName={lastName}
                                        teacher={teacher}
                                        title={title}
                                    />
                                )
                            );
                        }
                    })}
                </div>
            )}
            <p className={styles.wrapper__btn}>
                <LinkComponent color={'primary'} onClick={handleOpen}>
                    {isOpen ? 'Скрыть всех' : 'Посмотреть всех'}
                </LinkComponent>
            </p>
        </section>
    );
};

export default TeachersScreen;
