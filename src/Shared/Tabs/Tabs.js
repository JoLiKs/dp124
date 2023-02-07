import React from 'react';
import { Tab } from './Tab/Tab';
import { classNames } from '../helpers';
import styles from './Tabs.module.scss';

export const Tabs = ({ items, className }) => {
    const [active, setActive] = React.useState(0);

    const openTab = (e) => setActive(+e.target.dataset.index);
    return (
        <div className={className}>
            <div>
                {items?.map((n, i) => (
                    <button
                        key={n + i}
                        className={classNames({
                            [styles.tabBtn]: true,
                            [styles.activeTab]: active === i,
                        })}
                        onClick={openTab}
                        data-index={i}
                    >
                        {n.tabName}
                    </button>
                ))}
            </div>
            {items[active] && <Tab {...items[active]} />}
        </div>
    );
};
