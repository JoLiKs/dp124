import React from 'react';
import { socialLists } from '../config';
import { LinkComponent } from '../../../Shared';
import styles from './Social.module.scss';
import { classNames } from '../../../Shared/helpers';

export const Social = ({ className }) => {
    return (
        <div
            className={classNames({
                [styles.container]: true,
                [className]: className,
            })}
        >
            {socialLists.map(({ icon, link }, index) => (
                <LinkComponent hreaf={link} key={index}>
                    {icon}
                </LinkComponent>
            ))}
        </div>
    );
};
