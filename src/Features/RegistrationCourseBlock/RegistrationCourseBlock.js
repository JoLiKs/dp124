import React from 'react';
import { Button, CheckBox, Input } from '../../Shared';
import styles from './RegistrationCourseBlock.module.scss';

export const RegistrationCourseBlock = ({ course }) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.container__title}>Старт группы “JavaCull”</h3>
            <p className={styles.container__text}>20 февраля</p>
            <h3 className={styles.container__title}> Дни и время занятий </h3>
            <p className={styles.container__text}>Понедельник, 19:00-22:00 Четверг, 19:00-22:00</p>
            <h3 className={styles.container__title}>Кол-во свободных мест </h3>
            <p className={styles.container__text}>7 из 14</p>
            <div className={styles.container__FormWrapper}>
                <Input type="text" legend="Имя*" placeholder="Введите ваше имя" />
                <Input type="text" legend="Номер или E-mail*" placeholder="Введите Номер или E-mail" />
                <CheckBox className={styles.container__FormWrapper__checkbox} id="checkbox">
                    Я ознакомился с <a href="#>"> договором оферты</a> и согласен на обработку персональных данных
                </CheckBox>
                <Button>Записаться</Button>
            </div>
        </div>
    );
};
