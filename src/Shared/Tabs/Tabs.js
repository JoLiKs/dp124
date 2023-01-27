import React from 'react';
import { Tab } from './Tab/Tab';

export const Tabs = ({ items }) => {
    const [active, setActive] = React.useState(null);

    const openTab = (e) => setActive(+e.target.dataset.index);
    return (
        <div>
            <div>
                {items?.map((n, i) => (
                    <button style={{ borderTop: 'none', borderRadius: '5px 5px 0 0' }} onClick={openTab} data-index={i}>
                        {n.tabName}
                    </button>
                ))}
            </div>
            {items[active] && <Tab {...items[active]} />}
        </div>
    );
};
