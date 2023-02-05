import { useState } from 'react';
import { LineIcon, PlusIcon } from '../index';
import { classNames } from '../helpers';
import { Link } from 'react-router-dom';
import styles from './Accordion.module.scss';
import { path } from '../../Features/RouterComponent/config/config';

export const Accordion = ({ title, content, titleKey }) => {
    const [isActive, setIsActive] = useState(false);

    const handleOpen = () => {
        setIsActive(!isActive);
    };

    const titleName = titleKey === 'testing' ? 'тестирования ПО' : titleKey;
    const indexWord = title.indexOf(titleName);

    return (
        <div className={styles.wrapper}>
            <LineIcon className={styles.lineIcon} />
            <div className={styles.wrapper__accordeonItem} onClick={handleOpen}>
                <h5 className={styles.wrapper__accordeonItem__title}>
                    {title.slice(0, indexWord)}
                    <span>{titleName}</span>
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
            {isActive && (
                <div className={styles.wrapper__hiddenInfo}>
                    {content}
                    <p className={styles.link}>
                        <Link to={path[titleKey]}>
                            Узнать подробнее про <strong>офлайн</strong>
                        </Link>
                    </p>
                    <p className={styles.link}>
                        <Link to={path[titleKey]}>
                            Узнать подробнее про <strong>онлайн</strong>
                        </Link>
                    </p>
                </div>
            )}
        </div>
    );
};
