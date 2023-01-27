import { useState } from 'react';
import { LineIcon, PlusIcon } from '../index';
import { classNames } from '../helpers';
import styles from './Accordion.module.scss';

export const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    const handleOpen = () => {
        setIsActive(!isActive);
    };

    return (
        <div style={{ width: '800px', margin: '0 50px' }}>
            <LineIcon />
            <div style={{ display: 'flex' }} onClick={handleOpen}>
                <div>{title}</div>
                <span>
                    <PlusIcon
                        className={classNames({
                            [styles.plusIcon]: true,
                            [styles.rotateIcon]: !!isActive,
                        })}
                    />
                </span>
            </div>
            {isActive && <div>{content}</div>}
        </div>
    );
};
