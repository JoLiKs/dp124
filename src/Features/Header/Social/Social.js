import React from 'react';
import { socialLists } from '../config';
import { LinkComponent } from '../../../Shared';
import styles from './Social.module.scss';

export const Social = () => {
    return (
        <div className={styles.container}>
            {socialLists.map(({ icon, link }, index) => (
                <LinkComponent hreaf={link} key={index}>
                    {icon}
                </LinkComponent>
            ))}
        </div>
    );
};
