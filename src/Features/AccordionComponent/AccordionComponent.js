import React from 'react';
import { Accordion, coursesList, titleCoursesList } from '../../Shared';

export const AccordionComponent = () => {
    return (
        <div style={{ background: 'black', color: 'white' }}>
            {coursesList.map(({ id, courseName, titleKey }) => (
                <Accordion key={id} title={courseName} content={titleCoursesList[titleKey]} />
            ))}
        </div>
    );
};
