import React from 'react';

export const CheckBox = ({ id, checked, onChange, label, children }) => {
    const handleChecked = () => {
        onChange(!checked);
    };
    return (
        <div>
            <input id={id} type="checkbox" checked={checked} onChange={handleChecked} />
            <label htmlFor={id}>{label}</label>
            {children}
        </div>
    );
};
