import React from 'react';
import { TeacherCard, teachersList } from '../../Shared';

export const TeachersBlock = ({ courseName, facultyKey }) => {
    return (
        <div>
            <h2>{courseName}</h2>
            <div style={{ display: 'flex' }}>
                {teachersList[facultyKey].map(({ firstName, lastName, teacher, title, photo }) => (
                    <TeacherCard
                        key={Math.random()}
                        photo={photo}
                        firstName={firstName}
                        lastName={lastName}
                        teacher={teacher}
                        title={title}
                    />
                ))}
            </div>
        </div>
    );
};
