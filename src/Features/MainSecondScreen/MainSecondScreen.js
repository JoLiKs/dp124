import React, { Fragment } from 'react';
import { advertisementList } from '../../Shared/config/constants';

export const MainSecondScreen = () => {
    return (
        <div>
            <h2>Разработчик в 2023 – перспективно, востребовано, интересно</h2>;
            <div>
                <p>
                    в среднем около <span>$1920</span>в месяц получает специалист уже через 1,5 года работы
                </p>
                <div>
                    {advertisementList.map(({ id, icon, title }) => (
                        <Fragment key={id}>
                            {icon}
                            <p>{title}</p>
                        </Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};
