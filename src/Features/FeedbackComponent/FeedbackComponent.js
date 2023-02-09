import React, { useEffect, useState } from 'react';
import { BurstStarIcon, Button, CheckBox, Input, InputPhone } from '../../Shared';
import { classNames, validateFormData } from '../../Shared/helpers';
import { sendContactsService } from '../../Shared/api';
import styles from './feedBackComponent.module.scss';

export const FeedbackComponent = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [comment, setComment] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [messages, setMessages] = useState({ text: '', isError: true });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const validateError = validateFormData(name, phone);
        if (!validateError) {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('contact', phone);
            formData.append('comment', comment);
            setIsDisabled(true);
            const data = await sendContactsService('clients', formData);

            if (data?.status < 400) {
                setIsDisabled(false);
                setPhone('');
                setName('');
                setComment('');
                setCheckbox(false);
                setMessages({ text: 'Спасибо наши менеджеры свяжется с вами в ближайшее время', isError: false });
            }
        } else {
            setMessages({ text: validateError, isError: true });
        }
    };

    useEffect(() => {
        if (messages.isError) {
            setMessages({ text: '', isError: true });
        }
        if (!!name && !!phone && !!checkbox) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [name, phone, checkbox]);

    useEffect(() => {
        let clear = null;
        if (!messages.isError) {
            clear = setTimeout(() => {
                setMessages({ text: '', isError: false });
            }, 3000);
        }
        return () => clearTimeout(clear);
    }, [messages.isError]);

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
                {messages.text && (
                    <div
                        className={classNames({
                            [styles.errorMessage]: messages.isError,
                            [styles.successMessage]: !messages.isError,
                        })}
                    >
                        {messages.text}
                    </div>
                )}
                <div className={styles.wrapper__formSubmitWrapper}>
                    <CheckBox id="checkbox" checked={checkbox} onChange={setCheckbox}>
                        Я ознакомился с <a href="#>"> договором оферты</a> и согласен на обработку персональных данных
                    </CheckBox>
                    <Button className={styles.btnSubmit} disabled={isDisabled} type="submit">
                        Начать зарабатывать в IT
                    </Button>
                </div>
            </form>
        </section>
    );
};
