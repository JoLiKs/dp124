import React from 'react';
import styles from './CourseCostBlock.module.scss';

export const CourseCostBlock = () => {
    return (
        <div className={styles.costContainer}>
            <h2 className={styles.courseCost}>Стоимость курса</h2>
            <h3 className={styles.cost}>3 150 BYN</h3>
            <ul>
                <strong>Оплата по системе внутренней рассрочки:</strong>
                <li>- 610 BYN / 250 USD до начала занятий</li>
                <li> - 610 BYN / 250 USD через 3 недели после начала обучения</li>
                <li> - 610 BYN / 250 USD через 6 недель после начала обучения</li>
                <li> - 610 BYN / 250 USD через 9 недель после начала обучения</li>
                <li> - 610 BYN / 250 USD через 12 недель после начала обучения</li>
            </ul>
            <p className={styles.installmentProgram}>
                Также в школе действуют <strong>программы рассрочки и кредитования</strong> БЕЗ процентов и переплат* с
                банками-партнерами на срок от 2 до 24 месяцев. Подробности <a href="#">здесь.</a>
            </p>
            <h3 className={styles.discount}>Наши спецпредложения:</h3>
            <div>
                При единовременной оплате действует скидка 10% Для студентов TeachMeSkills скидка 100 BYN. Приведи друга
                – учитесь со скидкой 100 BYN каждый.
                <p className={styles.inDetail}>
                    *Более подробную информацию по программам рассрочки и кредитования можно узнать у менеджеров.
                </p>
            </div>
        </div>
    );
};
