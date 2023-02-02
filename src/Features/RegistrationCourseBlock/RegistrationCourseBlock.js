import React from 'react';
import { Button, CheckBox, Input } from '../../Shared';
import styles from './RegistrationCourseBlock.module.scss';

export const RegistrationCourseBlock = ({ course }) => {
    return (
        <div className={styles.container}>
            <h3>Старт группы “JavaCull”</h3>
            <p>20 февраля</p>
            <h3> Дни и время занятий </h3>
            <p>Понедельник, 19:00-22:00 Четверг, 19:00-22:00</p>
            <h3>Кол-во свободных мест </h3>
            <p>7 из 14</p>
            <Input type="text" legend="Имя*" placeholder="Введите ваше имя" />
            <Input type="text" legend="Номер или E-mail*" placeholder="Введите Номер или E-mail" />
            <Input
                type="text"
                legend="Комментарий"
                placeholder="Здесь вы  можете оставить детали по способу связи или вопрос"
            />
            <CheckBox id="checkbox">
                Я ознакомился с <a href="#>"> договором оферты</a> и согласен на обработку персональных данных
            </CheckBox>
            <Button>Записаться</Button>
        </div>
    );
};
