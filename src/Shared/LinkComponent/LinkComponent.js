import React from 'react';
import styles from './Link.module.scss';

export const LinkComponent = ({ href, blank, onClick, children, className, download, color = 'default' }) => {
    if (!href) {
        return (
            <span className={`${styles.link} ${styles[color]} ${className || ''}`} onClick={onClick}>
                {children}
            </span>
        );
    }

    return (
        <a
            className={`${styles.link} ${styles[color]} ${className || ''}`}
            href={href}
            target={blank ? '_blank' : '_self'}
            onClick={onClick}
            rel="noreferrer"
            download={download}
        >
            {children}
        </a>
    );
};
