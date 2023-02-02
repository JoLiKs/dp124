import React, { useState } from 'react';
import { BurstStarIcon, Button, CheckBox, Input } from '../../Shared';
import styles from './feedBackComponent.module.scss';

const FeedbackComponent = () => {
    const [name, setName] = useState('');
    const [phoneOrEmail, setPhoneOrEmail] = useState('');
    const [comment, setComment] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const disabled = !name && !phoneOrEmail && !checkbox;

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <section className={styles.wrapper}>
            <h3 className={styles.wrapper__title}>
                Хотите стать программистом, но нужна помощь с выбором? <BurstStarIcon />
            </h3>
            <p className={styles.wrapper__text}>
                Оставьте, пожалуйста, ваши контактные данные. Мы бесплатно проконсультируем вас и поможем стать
                программистом
            </p>
            <form onSubmit={handleSubmit}>
                <div className={styles.wrapper__formInputWrapper}>
                    <Input type="text" legend="Имя*" placeholder="Введите ваше имя" value={name} onChange={setName} />
                    <Input
                        type="text"
                        legend="Номер или E-mail*"
                        placeholder="Введите Номер или E-mail"
                        value={phoneOrEmail}
                        onChange={setPhoneOrEmail}
                    />
                    <Input
                        type="text"
                        legend="Комментарий"
                        placeholder="Здесь вы  можете оставить детали по способу связи или вопрос"
                        value={comment}
                        onChange={setComment}
                    />
                </div>
                <div className={styles.wrapper__formSubmitWrapper}>
                    <CheckBox id="checkbox" checked={checkbox} onChange={setCheckbox}>
                        Я ознакомился с <a href="#>"> договором оферты</a> и согласен на обработку персональных данных
                    </CheckBox>
                    <Button type="submit" disabled={disabled}>
                        Начать зарабатывать в IT
                    </Button>
                </div>
            </form>
        </section>
    );
};

export default FeedbackComponent;
