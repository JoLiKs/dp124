import React, { useContext, useEffect, useState } from 'react';
import { Button, CheckBox, Input, InputPhone, ToggleSwitch } from '../../Shared';
import { CoursesContext } from '../../App';
import { validateFormData } from '../../Shared/helpers';
import { sendContactsService } from '../../Shared/api';
import styles from './RegistrationCourseBlock.module.scss';

const objMap = {
    java: 'java',
    python: 'python',
    testing: 'qa',
    frontend: 'front',
};

export const RegistrationCourseBlock = ({ course }) => {
    const courses = useContext(CoursesContext);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [messages, setMessages] = useState({ text: '', isError: true });

    const [isChecked, setIsChecked] = useState(false);

    const courseFormat = isChecked ? 'online' : 'ofline';

    const findCourse = courses.flat().filter(({ faculty }) => faculty === objMap[course]);
    const onOrOff = findCourse.find(({ format }) => format === courseFormat);

    const graphic = onOrOff?.grafic?.split(' ');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const validateError = validateFormData(name, phone);
        if (!validateError) {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('contact', phone);
            formData.append('comment', `${course}, ${courseFormat}`);
            setIsDisabled(true);
            const data = await sendContactsService('clients', formData);

            if (data?.status < 400) {
                setIsDisabled(false);
                setPhone('');
                setName('');
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
    //Понедельник, 19:00-22:00 Четверг, 19:00-22:00
    return (
        <div className={styles.container}>
            <h3 className={styles.container__title}>
                Старт группы “JavaCull” <ToggleSwitch isChecked={isChecked} setIsChecked={setIsChecked} />
            </h3>
            <p className={styles.container__text}>{onOrOff?.start || ''}</p>
            <h3 className={styles.container__title}> Дни и время занятий </h3>
            <p
                className={styles.container__text}
            >{`${graphic[0]} ${graphic[2]}${graphic[3]}${graphic[4]} ${graphic[1]} ${graphic[2]}${graphic[3]}${graphic[4]}`}</p>
            <h3 className={styles.container__title}>Кол-во свободных мест </h3>
            <p className={styles.container__text}>{onOrOff?.places || ''}</p>
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
                <Button disabled={isDisabled} type="submit">
                    Записаться
                </Button>
            </form>
        </div>
    );
};
