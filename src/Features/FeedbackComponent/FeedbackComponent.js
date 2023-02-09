import React, { useState } from 'react';
import { BurstStarIcon, Button, CheckBox, Input, InputPhone } from '../../Shared';
import { validateFormData } from '../../Shared/helpers';
import { sendContactsService } from '../../Shared/api';
import styles from './feedBackComponent.module.scss';

export const FeedbackComponent = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [comment, setComment] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [error, setError] = useState(null);

    const disabled = !name && !phone && !checkbox;

    const handleSubmit = async (event) => {
        event.preventDefault();
        const validateError = validateFormData(name, phone);
        if (!validateError) {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('contact', phone);
            formData.append('comment', comment);
            //   sendContactsService('clients', formData);
        } else {
            setError(validateError);
        }

        // const data = await fetch('http://178.172.138.15:8089/clients', {
        //     method: 'POST',
        //     body: formData,
        //     headers: {
        //         'Content-Type': 'multipart/form-data',
        //         mode: 'no-cors',
        //     },
        // });
        // console.log(data);
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
                    <InputPhone
                        type="tel"
                        legend="Номер телефона*"
                        value={phone}
                        onChange={setPhone}
                        placeholder="375 (xx) xxx xx xx"
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
                    <Button className={styles.btnSubmit} disabled={disabled} type="submit">
                        Начать зарабатывать в IT
                    </Button>
                </div>
            </form>
        </section>
    );
};
