import React, { useState } from 'react';
import { BurstStarIcon, Button, CheckBox, Input } from '../../Shared';

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
        <div>
            <h3>
                Хотите стать программистом, но нужна помощь с выбором? <BurstStarIcon />
            </h3>
            <p>
                Оставьте, пожалуйста, ваши контактные данные. Мы бесплатно проконсультируем вас и поможем стать
                программистом
            </p>
            <form onSubmit={handleSubmit}>
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
                <CheckBox id="checkbox" checked={checkbox} onChange={setCheckbox}>
                    Я ознакомился с <a href="#>"> договором оферты</a> и согласен на обработку персональных данных
                </CheckBox>
                <Button type="submit" disabled={disabled}>
                    Начать зарабатывать в IT
                </Button>

                {/*<input value="" id="tel" />*/}
            </form>
        </div>
    );
};

export default FeedbackComponent;
