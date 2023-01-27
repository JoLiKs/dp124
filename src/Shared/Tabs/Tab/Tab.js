import React from 'react';

export const Tab = ({ title, content }) => {
    return (
        <div className="tabcontent">
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
};
