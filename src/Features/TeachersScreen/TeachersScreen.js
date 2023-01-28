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
        <div>
            <h2>
                <OneStarIcon /> Преподаватели
            </h2>
            <p>
                Разработчики с 4+ годами опыта, которые уже помогли стать программистом сотням начинающих айтишников.
                Наши преподаватели работали в разных аутсорсинговых и продуктовых IT-компаниях, а также на фрилансе. Они
                используют оригинальные и проверенные на десятках студентов методики обучения.
            </p>
            <div style={{ display: 'flex' }}>
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
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {Object.keys(randomMizer).map((key) => {
                        if (key !== randomIndex) {
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
            <p>
                <LinkComponent color={'primary'} onClick={handleOpen}>
                    {isOpen ? 'Скрыть всех' : 'Посмотреть всех'}
                </LinkComponent>
            </p>
        </div>
    );
};

export default TeachersScreen;
