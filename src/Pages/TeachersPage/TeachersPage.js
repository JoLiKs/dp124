import React from 'react';
import { coursesList, OneStarIcon } from '../../Shared';
import { FeedbackComponent, TeachersBlock } from '../../Features';

export const TeachersPage = () => {
    return (
        <div>
            <h2>
                Преподаватели <OneStarIcon />
            </h2>
            <p>
                Разработчики с 4+ годами опыта, которые уже помогли стать программистом сотням начинающих айтишников.
                Наши преподаватели работали в разных аутсорсинговых и продуктовых IT-компаниях, а также на фрилансе. Они
                используют оригинальные и проверенные на десятках студентов методики обучения.
            </p>

            <div>
                {coursesList.map(({ titleKey, courseName }) => (
                    <TeachersBlock key={titleKey} courseName={courseName} facultyKey={titleKey} />
                ))}
            </div>

            <FeedbackComponent />
        </div>
    );
};
