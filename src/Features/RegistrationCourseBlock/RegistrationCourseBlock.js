import React, { useState } from 'react';
import { Button, CheckBox, Input, InputPhone } from '../../Shared';
import styles from './RegistrationCourseBlock.module.scss';

export const RegistrationCourseBlock = ({ course }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const disabled = !name && !phone && !checkbox;

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className={styles.container}>
            <h3 className={styles.container__title}>Старт группы “JavaCull”</h3>
            <p className={styles.container__text}>20 февраля</p>
            <h3 className={styles.container__title}> Дни и время занятий </h3>
            <p className={styles.container__text}>Понедельник, 19:00-22:00 Четверг, 19:00-22:00</p>
            <h3 className={styles.container__title}>Кол-во свободных мест </h3>
            <p className={styles.container__text}>7 из 14</p>
            <form onSubmit={handleSubmit} className={styles.container__FormWrapper}>
                <Input value={name} onChange={setName} type="text" legend="Имя*" placeholder="Введите ваше имя" />
                <InputPhone
                    type="tel"
                    legend="Номер телефона*"
                    value={phone}
                    onChange={setPhone}
                    placeholder="375 (xx) xxx xx xx"
                />
                <CheckBox
                    checked={checkbox}
                    onChange={setCheckbox}
                    className={styles.container__FormWrapper__checkbox}
                    id="checkbox"
                >
                    Я ознакомился с <a href="#>"> договором оферты</a> и согласен на обработку персональных данных
                </CheckBox>
                <Button disabled={disabled} type="submit">
                    Записаться
                </Button>
            </form>
        </div>
    );
};
