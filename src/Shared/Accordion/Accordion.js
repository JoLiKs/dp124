import { useState } from 'react';
import { LineIcon, PlusIcon } from '../index';
import { classNames } from '../helpers';
import styles from './Accordion.module.scss';

export const Accordion = ({ title, content, titleKey }) => {
    const [isActive, setIsActive] = useState(false);

    const handleOpen = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={styles.wrapper}>
            <LineIcon />
            <div className={styles.wrapper__accordeonItem} onClick={handleOpen}>
                <h5 className={styles.wrapper__accordeonItem__title}>
                    {title}
                    <span>{titleKey}</span>
                </h5>
                <span>
                    <PlusIcon
                        className={classNames({
                            [styles.plusIcon]: true,
                            [styles.rotateIcon]: !!isActive,
                        })}
                    />
                </span>
            </div>
            {isActive && <div className={styles.wrapper__hiddenInfo}>{content}</div>}
        </div>
    );
};
