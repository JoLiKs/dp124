import React from 'react';
import styles from './ToggleSwitch.module.scss';

export const ToggleSwitch = ({ isChecked, setIsChecked }) => {
    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className={styles.toggle_switch}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleToggle}
                className={styles.input}
                id="toggle-switch"
            />
            <label htmlFor="toggle-switch" className={styles.label}>
                <span>off</span>
                <span>on</span>
            </label>
        </div>
    );
};
