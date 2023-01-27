import React from 'react';
import { Tab } from './Tab/Tab';

export const Tabs = ({ items }) => {
    const [active, setActive] = React.useState(null);

    const openTab = (e) => setActive(+e.target.dataset.index);
    return (
        <div>
            <div className="tab">
                {items?.map((n, i) => (
                    <button className={`tablinks ${i === active ? 'active' : ''}`} onClick={openTab} data-index={i}>
                        {n.title}
                    </button>
                ))}
            </div>
            {items[active] && <Tab {...items[active]} />}
        </div>
    );
};
