import React from 'react';

export const Tab = ({ title, content }) => {
    return (
        <div style={{ border: '1px solid black' }}>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
};
