import React from 'react';
import { Tab } from './Tab/Tab';

export const Tabs = ({ items }) => {
    const [active, setActive] = React.useState(1);

    const openTab = (e) => setActive(+e.target.dataset.index);
    return (
        <div>
            <div>
                {items?.map((n, i) => (
                    <button
                        key={n + i}
                        style={{ borderTop: 'none', borderRadius: '5px 5px 0 0' }}
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
