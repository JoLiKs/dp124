import React, { useState } from 'react';
import { BurstStarIcon, Button, CheckBox, Input } from '../../Shared';

const FeedbackComponent = () => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const disabled = !name && !comment && !checkbox;

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    // function setCursorPosition(pos, elem) {
    //     elem.focus();
    //
    //     if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    //     else if (elem.createTextRange) {
    //         var range = elem.createTextRange();
    //
    //         range.collapse(true);
    //
    //         range.moveEnd('character', pos);
    //
    //         range.moveStart('character', pos);
    //
    //         range.select();
    //     }
    // }
    // function mask(event) {
    //     var matrix = '+7 (___) ___ ____',
    //         i = 0,
    //         def = matrix.replace(/\D/g, ''),
    //         val = this.value.replace(/\D/g, '');
    //
    //     if (def.length >= val.length) val = def;
    //
    //     this.value = matrix.replace(/./g, function (a) {
    //         return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    //     });
    //
    //     if (event.type == 'blur') {
    //         if (this.value.length == 2) this.value = '';
    //     } else setCursorPosition(this.value.length, this);
    // }

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

                <input value="" id="tel" />
            </form>
        </div>
    );
};

export default FeedbackComponent;
