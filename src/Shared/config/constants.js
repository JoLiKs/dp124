import { BagIcon, CakeIcon, CupIcon, FragmentIcon } from '../index';

export const routesPath = {
    basename: '/',
    java: '/java',
    python: '/python',
    frontend: '/frontend',
    testing: '/software-testing',
    teachers: '/teachers',
    courses: '/courses',
    online: '/online',
    offline: '/offline',
};

export const navBtnList = [
    { id: 5, btnName: 'Курсы' },
    { id: 6, btnName: 'Преподаватели' },
];

export const coursesList = [
    { id: 1, courseName: 'Факультет разработки на java ', titleKey: 'java' },
    { id: 2, courseName: 'Факультет разработки на python', titleKey: 'python' },
    { id: 3, courseName: 'Факультет frontend', titleKey: 'frontend' },
    { id: 4, courseName: 'Факультет тестирования ПО', titleKey: 'testing' },
];

export const accordionTitle = {
    text: `Мы отошли от типичного академического образования и сделали упор на практику, чтобы прокачать ваши знания до уровня junior в максимально краткие сроки. Мы гордимся нашим индивидуальным подходом к каждому ученику`,
};

export const titleCoursesList = {
    java: `Java – самый высокооплачиваемый язык, которым десятки лет пользуются IT-гиганты.
      Мы все практически каждый день используем продукты на Java – от простых приложений до сложнейших сайтов. Java славится мультиплатформенностью – код, однажды написанный на Java, будет работать на любом устройстве.
      На факультете Java разработки вы сможете стать web или android разработчиком со знанием языка Kotlin
      Вы незаменимый разработчик на Java через 6,5 месяца
      Количество свободных мест:`,
    python: `Python из года в год остаётся самым популярным языком программирования с синтаксисом, понятным даже школьнику. Python чаще всего применяется для веб-разработки, но также может быть отличным инструментом в Data Science и машинном обучении.
       На факультете Python разработки вы изучите основы языка, а затем приступите к написанию сложнейших, но коммерчески верных продуктов.
       Вы востребованный разработчик на Python через 6 месяцев
       Количество свободных мест:`,
    frontend: `Frontend разработчик занимается оформлением программных продуктов. Внешний вид сайтов и приложений не менее важен, чем их функционал, поэтому фронтендер – важнейший специалист в digital компании. Есть миф, что frontend проще, чем backend. Однако это не так, поскольку зачастую frontend разработчик должен знать больше, чем его коллеги.
       Уже с первых занятий на этом факультете вы сможете увидеть в браузере результаты своей работы и создавать простейшие сайты.
       Вы высокооплачиваемый frontend разработчик через 6,5 месяцев
       Количество свободных мест:`,
    testing: `Без тестов работа разработчиков напрасна, поэтому тестировщики нужны везде. Тестировщик – ответственная и важная должность, несмотря на то что тестирование – самый простой способ попасть в IT.
        На факультете тестирования вы научитесь как ручному, так и автоматизированному тестированию на одном из предложенных языков программирования.
        Вы квалифицированный тестировщик через 5 месяцев
        Количество свободных мест:`,
};

export const contacts = {
    witness: `ООО "Буизнес Кирилла" | УНП 1234567890 Свидетельство о государственной регистрации № 692033963 от 29.05.2020 выдано Узденским районным исполнительным комитетом`,
    address: `Адрес: 220035, Республика Беларусь, г. Минск, ул. Сурганова, д. 43, оф. 802 Режим работы: понедельник - пятница с 10:00 до 19:00`,
    phone: '+375(29) 000-00-00',
    email: 'nashapochta@gmail.com',
};

export const advertisementList = [
    {
        id: 7,
        icon: <CakeIcon />,
        title: `вы будете любить то, чем занимаетесь, и получать за это достойное вознаграждение, а не ходить каждый день в офис и ждать, когда этот день закончится`,
    },
    {
        id: 8,
        icon: <CupIcon />,
        title: `зарплатный потолок у IT-специалиста в РБ = 13000 BYN. Это реальные цифры, которых легко можно достичь за 4-6 лет работы в различных IT-компаниях`,
    },
    {
        id: 9,
        icon: <BagIcon />,
        title: `в IT можно чувствовать себя стабильно и безопасно – релокейт, full remote, особая поддержка IT во многих странах обеспечит вас заработком даже в кризис`,
    },
    {
        id: 10,
        icon: <FragmentIcon />,
        title: `IT – это удалённая работа из любой точки мира, гибкий график, лояльное руководство и максимальный комфорт в коллективе`,
    },
];

export const teachersList = {
    java: [
        {
            firstName: 'Кирил',
            lastName: 'Лучезарный',
            teacher: 'Java-разработчик',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLY0ApLM3hy0uxr_2TET1gbrvLaDCLeyltKA&usqp=CAU',
            title: `Сто лет отработал в лучшей компании в РБ и наконец стал зарабатывать заветные 3500. Начал программировать раньше, чем перестал срать в штаны. Потому что у нас только самые одаренные программисты. `,
        },
        {
            firstName: 'Кирил',
            lastName: 'Лучезарный',
            teacher: 'Java-разработчик',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLY0ApLM3hy0uxr_2TET1gbrvLaDCLeyltKA&usqp=CAU',
            title: `Сто лет отработал в лучшей компании в РБ и наконец стал зарабатывать заветные 3500. Начал программировать раньше, чем перестал срать в штаны. Потому что у нас только самые одаренные программисты. `,
        },
        {
            firstName: 'Кирил',
            lastName: 'Лучезарный',
            teacher: 'Java-разработчик',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLY0ApLM3hy0uxr_2TET1gbrvLaDCLeyltKA&usqp=CAU',
            title: `Сто лет отработал в лучшей компании в РБ и наконец стал зарабатывать заветные 3500. Начал программировать раньше, чем перестал срать в штаны. Потому что у нас только самые одаренные программисты. `,
        },
        {
            firstName: 'Кирил',
            lastName: 'Лучезарный',
            teacher: 'Java-разработчик',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLY0ApLM3hy0uxr_2TET1gbrvLaDCLeyltKA&usqp=CAU',
            title: `Сто лет отработал в лучшей компании в РБ и наконец стал зарабатывать заветные 3500. Начал программировать раньше, чем перестал срать в штаны. Потому что у нас только самые одаренные программисты. `,
        },
        {
            firstName: 'Кирил',
            lastName: 'Лучезарный',
            teacher: 'Java-разработчик',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLY0ApLM3hy0uxr_2TET1gbrvLaDCLeyltKA&usqp=CAU',
            title: `Сто лет отработал в лучшей компании в РБ и наконец стал зарабатывать заветные 3500. Начал программировать раньше, чем перестал срать в штаны. Потому что у нас только самые одаренные программисты. `,
        },
    ],
    python: [
        {
            firstName: 'Кирил',
            lastName: 'Лучезарный',
            teacher: 'Python-разработчик',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLY0ApLM3hy0uxr_2TET1gbrvLaDCLeyltKA&usqp=CAU',
            title: `Сто лет отработал в лучшей компании в РБ и наконец стал зарабатывать заветные 3500. Начал программировать раньше, чем перестал срать в штаны. Потому что у нас только самые одаренные программисты. `,
        },
        {
            firstName: 'Кирил',
            lastName: 'Лучезарный',
            teacher: 'Python-разработчик',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLY0ApLM3hy0uxr_2TET1gbrvLaDCLeyltKA&usqp=CAU',
            title: `Сто лет отработал в лучшей компании в РБ и наконец стал зарабатывать заветные 3500. Начал программировать раньше, чем перестал срать в штаны. Потому что у нас только самые одаренные программисты. `,
        },
        {
            firstName: 'Кирил',
            lastName: 'Лучезарный',
            teacher: 'Python-разработчик',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLY0ApLM3hy0uxr_2TET1gbrvLaDCLeyltKA&usqp=CAU',
            title: `Сто лет отработал в лучшей компании в РБ и наконец стал зарабатывать заветные 3500. Начал программировать раньше, чем перестал срать в штаны. Потому что у нас только самые одаренные программисты. `,
        },
        {
            firstName: 'Кирил',
            lastName: 'Лучезарный',
            teacher: 'Python-разработчик',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLY0ApLM3hy0uxr_2TET1gbrvLaDCLeyltKA&usqp=CAU',
            title: `Сто лет отработал в лучшей компании в РБ и наконец стал зарабатывать заветные 3500. Начал программировать раньше, чем перестал срать в штаны. Потому что у нас только самые одаренные программисты. `,
        },
    ],
    frontend: [
        {
            firstName: 'Кирил',
            lastName: 'Лучезарный',
            teacher: 'Frontend-разработчик',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLY0ApLM3hy0uxr_2TET1gbrvLaDCLeyltKA&usqp=CAU',
            title: `Сто лет отработал в лучшей компании в РБ и наконец стал зарабатывать заветные 3500. Начал программировать раньше, чем перестал срать в штаны. Потому что у нас только самые одаренные программисты. `,
        },
        {
            firstName: 'Кирил',
            lastName: 'Лучезарный',
            teacher: 'Frontend-разработчик',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLY0ApLM3hy0uxr_2TET1gbrvLaDCLeyltKA&usqp=CAU',
            title: `Сто лет отработал в лучшей компании в РБ и наконец стал зарабатывать заветные 3500. Начал программировать раньше, чем перестал срать в штаны. Потому что у нас только самые одаренные программисты. `,
        },
        {
            firstName: 'Кирил',
            lastName: 'Лучезарный',
            teacher: 'Frontend-разработчик',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLY0ApLM3hy0uxr_2TET1gbrvLaDCLeyltKA&usqp=CAU',
            title: `Сто лет отработал в лучшей компании в РБ и наконец стал зарабатывать заветные 3500. Начал программировать раньше, чем перестал срать в штаны. Потому что у нас только самые одаренные программисты. `,
        },
        {
            firstName: 'Кирил',
            lastName: 'Лучезарный',
            teacher: 'Frontend-разработчик',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLY0ApLM3hy0uxr_2TET1gbrvLaDCLeyltKA&usqp=CAU',
            title: `Сто лет отработал в лучшей компании в РБ и наконец стал зарабатывать заветные 3500. Начал программировать раньше, чем перестал срать в штаны. Потому что у нас только самые одаренные программисты. `,
        },
    ],
    testing: [
        {
            firstName: 'Кирил',
            lastName: 'Лучезарный',
            teacher: 'QA-инженер',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLY0ApLM3hy0uxr_2TET1gbrvLaDCLeyltKA&usqp=CAU',
            title: `Сто лет отработал в лучшей компании в РБ и наконец стал зарабатывать заветные 3500. Начал программировать раньше, чем перестал срать в штаны. Потому что у нас только самые одаренные программисты. `,
        },
        {
            firstName: 'Кирил',
            lastName: 'Лучезарный',
            teacher: 'QA-инженер',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLY0ApLM3hy0uxr_2TET1gbrvLaDCLeyltKA&usqp=CAU',
            title: `Сто лет отработал в лучшей компании в РБ и наконец стал зарабатывать заветные 3500. Начал программировать раньше, чем перестал срать в штаны. Потому что у нас только самые одаренные программисты. `,
        },
        {
            firstName: 'Кирил',
            lastName: 'Лучезарный',
            teacher: 'QA-инженер',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLY0ApLM3hy0uxr_2TET1gbrvLaDCLeyltKA&usqp=CAU',
            title: `Сто лет отработал в лучшей компании в РБ и наконец стал зарабатывать заветные 3500. Начал программировать раньше, чем перестал срать в штаны. Потому что у нас только самые одаренные программисты. `,
        },
        {
            firstName: 'Кирил',
            lastName: 'Лучезарный',
            teacher: 'QA-инженер',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLY0ApLM3hy0uxr_2TET1gbrvLaDCLeyltKA&usqp=CAU',
            title: `Сто лет отработал в лучшей компании в РБ и наконец стал зарабатывать заветные 3500. Начал программировать раньше, чем перестал срать в штаны. Потому что у нас только самые одаренные программисты. `,
        },
    ],
};

export const coursePageText = {
    java: {
        courseAbout: `На факультете вы изучите Java – самый высокооплачиваемый язык, которым десятки лет пользуются IT-гиганты. Существует множество областей применения Java: от сайтов до Android-приложений и игр. У нас вы получить самые важные практические знания На факультете Java вы изучите Java или Kotlin с нуля, фреймворки Spring, Hibernate, а также технологии Firebase, SQL, Docker. Под руководством опытного ментора вы научитесь находить реальные заказы на фрилансе от простейших телеграмм ботов до сложнейших клиент-серверных приложений. А наш HR-специалист научит вас, как грамотно составлять резюме и CV и 100% понравиться рекрутеру на интервью.`,
        subTitle:
            'Научим с нуля разработке web-приложений на Java за 5,5 месяцев и покажем самые актуальные технологии.',
        afterCourse: {
            one: 'Изучите Java с нуля',
            two: 'Будете писать чистый код и знать все тонкости Git',
            three: 'Будете работать web или android разработчиком со знанием языка Kotlin',
            four: 'Станете junior+ JAVA/ANDROID разработчиком',
        },
        during: {
            one: 'Телеграм бот для конверсии валют',
            two: 'Интернет-магазин либо каталог товаров',
            three: 'Социальная сеть по типу Instagram',
            four: 'Приложение по заказу с биржи фриланса',
        },
    },
    python: {
        courseAbout: `На факультете Python вы освоите самый популярный язык программирования. Python чаще всего применяется для веб-разработки, но также может быть отличным инструментом в Data Science и машинном обучении Вы изучите основы языка, а затем приступите к написанию сложнейших, но коммерчески верных продуктов. Менторы покажут, как зарабатывать на фрилансе. А наш HR-специалист научит вас, как грамотно составлять резюме и CV и 100% понравиться рекрутеру на интервью`,
        subTitle: 'Научим с нуля разработке на Python за 5,5 месяцев и покажем самые актуальные технологии.',
        afterCourse: {
            one: 'Изучите Python с нуля',
            two: 'Будете писать чистый код и знать все тонкости Git',
            three: 'Сможете выполнять заказы на фрилансе любой сложности',
            four: 'Станете junior+ PYTHON разработчиком',
        },
        during: {
            one: 'Телеграмм бот по заказу с биржи фриланса',
            two: 'Сайт знакомств (совместно со студентами факультета Frontend)',
            three: 'Сервер для университета',
            four: 'Парсер по заказу с биржи фриланса',
        },
    },
    frontend: {
        courseAbout: `Frontend-разработчики создают пользовательские интерфейсы. Это значит, что именно от фронтендера зависит внешний вид сайтов и приложений. Всё, что видят пользователи в интернете, написано фронтендерами На факультете Frontend вы изучите HTML, CSS и JavaScript – кроссплатформенный язык для браузеров. Вы научитесь верстать сайты, напишете своё приложение, освоите популярный фреймворк React. Опытный спикер расскажет, как брать заказы на фрилансе, обучит специфике работы в сфере frontend, объяснит тонкости прохождения технических собеседований. А наш HR-специалист научит вас, как грамотно составлять резюме и CV и 100% понравиться рекрутеру на интервью`,
        subTitle:
            'Научим с нуля разработке web-приложений на JavaScript и React за 5,5 месяцев и покажем самые актуальные технологии.',
        afterCourse: {
            one: 'Изучите JavaScript и фреймворк React с нуля – напишете на них своё первое приложение',
            two: 'Будете писать чистый код и знать все тонкости Git',
            three: 'Устроитесь на работу и будете верстать адаптивные и кроссбраузерные IT-продукты',
            four: 'Станете junior+ Frontend разработчиком',
        },
        during: {
            one: 'сайты-визитки',
            two: 'блог с подключением реального back-end',
            three: 'сайт для просмотра погоды',
            four: 'сайт по заказу с биржи фриланса',
        },
    },
    testing: {
        courseAbout: `Тестировщик – ответственная и важная должность, несмотря на то что тестирование – самый простой способ попасть в IT. Вы будете писать тесты, чтобы проверить работоспособность IT-продуктов, корректность и отсутствие багов. Благодаря вам пользователям интернета будут доступны качественные приложения и сайты На факультете тестирования вы научитесь как ручному, так и автоматизированному тестированию на одном из предложенных языков программирования - java либо python Изучите фреймворки Pytest, allure, Jenkins, Unittest. В конце курса вы станете востребованным специалистом по автоматизированному тестированию, то есть будете писать код для тестирования других программ. А наш HR-специалист научит вас, как грамотно составлять резюме и CV и 100% понравиться рекрутеру на интервью`,
        subTitle: 'Научим с нуля тестировать web-приложений за 5,5 месяцев и покажем самые актуальные технологии.',
        afterCourse: {
            one: 'Сможете тестировать IT-продукты любой сложности',
            two: 'Будете писать чистый код и знать все тонкости Git',
            three: 'Изучите популярный язык программирования и фреймворки',
            four: '',
        },
        during: {
            one: 'Оттестированный реальный веб проект',
            two: 'Тестирование приложения с фриланса',
            three: '',
            four: '',
        },
    },
};

export const tabsList = {
    java: [
        {
            tabName: 'Модуль 1',
            title: 'Введение в программирование',
            content: [
                'Введение в Java',
                'JDK, JRE, JVM',
                'Первые программы',
                'Что такое java и где применяется',
                'Установить Intelij Idea',
                'Логические и арифметические операторы',
                'Примитивные типы данных',
                'Условные операторы',
                'Циклы',
            ],
        },
        {
            tabName: 'Модуль 2',
            title: 'Продвинутая JAVA',
            content: [
                'Массивы одномерные',
                'Линейный поиск',
                'Массивы многомерные',
                'Основные принципы работы с матрицами',
                'Алгоритмы для работы с массивами',
                'Методы/функции',
                'Класс Math',
                'Строки',
                'Автоупаковка, автораспаковка',
                'Работа с классами обертками',
            ],
        },
        {
            tabName: 'Модуль 3',
            title: 'ООП и коллекции',
            content: [
                'Основные принципы',
                'ООП ООП в Java',
                'Полиморфизм и статические методы',
                'Ключевые слова static, final',
                'Написание первого проект',
                'Интерфейсы',
                'Методы класса Object',
                'Абстрактные классы',
                'Исключения и ошибки',
                'Коллекции: List Set Map',
            ],
        },
        {
            tabName: 'Модуль 4',
            title: 'Разработка, Sql, многопоточность',
            content: [
                'Заказ с фриланса',
                'Написание проекта Телеграм бота',
                'Особенности работы с Java 8',
                'Особенности работы с Java 9 - 19',
                'Что такое поток',
                'Зачем нужна многопоточность',
                'Паттерны проектирования',
                'Основы xml',
                'Sql',
                'Jdbc',
                'Query set',
            ],
        },
        {
            tabName: 'Модуль 5',
            title: 'Введение в веб-разработку',
            content: [
                'Введение в html',
                'Введение в css',
                'Spring Core',
                'Понятия DI и IOC',
                'Java Persistence API',
                'Spring Data',
                'JpaRepositry',
                'Themleaf',
            ],
        },
        {
            tabName: 'Модуль 6',
            title: 'Spring, разработка веб приложений',
            content: [
                'Заказ с фриланса',
                'Занятие с hr специалистом',
                'Spring Security',
                'REST API Documentation',
                'Spring RESTful API',
                'Подготовка в тех собеседованию',
                'Docker',
            ],
        },
    ],
    frontend: [
        {
            tabName: 'Модуль 1',
            title: 'Введение в верстку',
            content: [
                'Введение в html',
                'Введение в css',
                'Структура html документа',
                'Создание формы',
                'Универсальные атрибуты',
                'Работа с мультимедиа Введение в git',
                'Создание изображений и анимации посредством тега',
            ],
        },
        {
            tabName: 'Модуль 2',
            title: 'Продвинутая верстка',
            content: [
                'Заказ с фриланса',
                'Адаптивная верстка для мобильных устройств',
                'Создание меню',
                'Псевдоклассы Псевдоэлементы',
                'Flexbox, Grid',
                'Формы',
                'Введение в Bootstrap',
                'Tailwind',
            ],
        },
        {
            tabName: 'Модуль 3',
            title: 'JavaScript',
            content: [
                'Переменные',
                'Типизация',
                'Типы данных',
                'Логические операторы в avaScript',
                'Функции',
                'Циклы',
                'Строки',
                'Массивы',
                'Свойства и методы String',
            ],
        },
        {
            tabName: 'Модуль 4',
            title: 'Продвинутый JavaScript и не только',
            content: [
                'Объекты',
                'Объект Object',
                'Ключевое слово new',
                'Понятие свойства',
                'Основные принципы ООП',
                'Сторонние библиотеки',
                'Популярные библиотеки на выбор преподавателя',
                'Запросы на api',
                'Парсинг json',
                'Парсинг xml',
            ],
        },
        {
            tabName: 'Модуль 5',
            title: 'Веб разработка и асинхронность',
            content: [
                'События',
                'Браузерное окружение',
                'Продолжение BOM и DOM',
                'Использование Cookie',
                'Промисы',
                'Асинхронность',
                'Продвинутая работа с сетевыми запросами',
                'Особенности DOM в HTML5',
                'Знакомство с сетевыми запросами',
                'Fetch API',
                'Обработка ошибок · Async / await',
            ],
        },
        {
            tabName: 'Модуль 6',
            title: 'TypeSctipt',
            content: [
                'Отличия от JavaScript',
                'Базовые типы',
                'Массивы, кортежи, перечисления',
                'Интерфейсы (свойства, расширения)',
                'Объединённые и пересекающиеся типы',
                'Функции',
                'наследование, модификаторы доступа',
                'Generics',
            ],
        },
        {
            tabName: 'Модуль 7',
            title: 'React',
            content: [
                'Введение в React',
                'Особенности React',
                'Компоненты React',
                'Жизненный цикл компонентов',
                'Хуки в react',
                'React Context',
                'useContext',
                'Навигация',
                'Способы авторизации(OAuth2 JWT tokens)',
                'Многопользовательские приложения',
            ],
        },
    ],
    python: [
        {
            tabName: 'Модуль 1',
            title: 'Введение в программирование',
            content: [
                'Установка интерпретатора Python и среды разработки PyCharm.',
                'Написание первой программы',
                'Функции print(), input(), type()',
                'Типы данных integer и float.',
                'Арифметические операции.',
                'Логические опперации',
                'Циклы for',
                'Цикл while',
                'Операторы break, continue и pass.',
                'Строки',
                'Срезы',
            ],
        },
        {
            tabName: 'Модуль 2',
            title: 'Продвинутая разработка',
            content: [
                'Система контроля версий git',
                'Работа с терминалом',
                'Списки',
                'Кортежи',
                'Множества',
                'Словари',
                'Функции',
                'Методы для работы с коллекциями',
                'Алгоритмы для работы с коллекциями',
                'Telegram Bot Api',
                'Работа с файлами и различными кодировками',
            ],
        },
        {
            tabName: 'Модуль 3',
            title: 'ООП и базы данных',
            content: [
                'Заказ с фриланса',
                'Основные принципы ООП',
                'Класс как основной инструмент ООП.',
                'Объекты',
                'Конструкторы',
                'Аксессеры',
                'Перегрузка операторов',
                'Перегрузка методов',
                'Принципы solid',
                'Введение в базы данных',
                'Транзакции',
                'Связи между таблицами',
            ],
        },
        {
            tabName: 'Модуль 4',
            title: 'Введение в веб-программирование',
            content: [
                'Знакомство с html',
                'Знакомство с css',
                'Знакомство с bootstrap',
                'Установка django',
                'Модели Django, миграции',
                'Маршрутизация, контроллеры',
                'QuerySet',
                'Формы',
                'Административная панель Django',
                'Итераторы, генераторы, декораторы',
            ],
        },
        {
            tabName: 'Модуль 5',
            title: 'Django rest и docker',
            content: [
                'Django Rest Framework (DRF)',
                'Сериализаторы',
                'Docker',
                'Celery',
                'Асинхронное программирование.',
                'Docker Compose',
                'Написание docker-compose.yml.',
                'Введение в DRF.',
                'Принципы REST.',
                'Основы построения веб-API',
                'Swagger',
            ],
        },
    ],
    testing: [
        {
            tabName: 'Модуль 1',
            title: 'Введение в python',
            content: [
                'Настройки окружения',
                'Переменные',
                'Типы данных',
                'Операторы',
                'Система контроля версий GitHub',
                'Формы операторов присваивания',
                'Форматирование строк',
                'Операторы ветвления',
                'Логика',
                'Циклы',
                'Коллекционные типы данных',
            ],
        },
        {
            tabName: 'Модуль 2',
            title: 'Продвинутый python',
            content: [
                'Функциональное программирование',
                'Понятие функции',
                'Область видимости функций',
                'Ключевые слова',
                'Lambda функции',
                'args',
                'kwargs',
                'ООП',
                'Классы и объекты',
                'Принципы ООП',
                'Метаклассы',
                'Работа с файлами',
            ],
        },
        {
            tabName: 'Модуль 3',
            title: 'Введение в тестирование ПО',
            content: [
                'Введение в тестирование ПО',
                'Основы тестирования ПО',
                'Чек-листы',
                'Уровни тестирования',
                'Тест-кейсы',
                'Техники тест-дизайн',
                'Unittest',
                'Pytest',
                'Вызов расширенных фикстур',
                'Уровень фикстуры',
            ],
        },
        {
            tabName: 'Модуль 4',
            title: 'Автоматизированное тестирование',
            content: [
                'Что такое автоматизированное тестирование',
                'Настройка необходимых инструментов',
                'Первые автоматизированные тесты',
                'Selenium WebDriver',
                'Управления браузером',
                'Python client library',
                'Драйвера',
                'Подключение alure к python проекту',
                'Allure-Testng',
                'PageObjects',
                'Сборка html-отчета',
            ],
        },
        {
            tabName: 'Модуль 5',
            title: 'Rest тестирование',
            content: [
                'Автоматизация REST API',
                'Базы данных',
                'JMeter',
                'Виды баз данных',
                'Подключение к базе данных',
                'Основы языка SQL',
                'Докер',
                'Нагрузочное тестирование',
            ],
        },
    ],
};

export const onlineAndOfflinePagesContent = {
    online: {
        title: 'Онлайн обучение',
        description:
            'Для тех, кто предпочитает учиться с комфортом и находиться в любой точке мира. Самостоятельно составляйте свой график, занимайтесь с преподавателем из иностранной IT-компании и экономьте время.',
    },
    offline: {
        title: 'Офлайн обучение',
        description:
            'Живое взаимодействие с группой в комфортном офисе в шаговой доступности от метро. Для тех, кому нужны дисциплина, мотивирующая обстановка и поддержка ментора.',
    },
    coursesBlock: [
        {
            developer: 'Front End разработчик',
            titleJob: `Frontend-разработчики создают пользовательские интерфейсы. Это значит, что именно от фронтендера зависит внешний вид сайтов и приложений. Всё, что видят пользователи в интернете, написано фронтендерами.`,
            pathName: routesPath.frontend,
        },
        {
            developer: 'Python разработчик',
            titleJob: `На факультете Python вы освоите самый популярный язык программирования. Python чаще всего применяется для веб-разработки, но также может быть отличным инструментом в Data Science и машинном обучении.`,
            pathName: routesPath.python,
        },
        {
            developer: 'Java разработчик',
            titleJob: `На факультете вы изучите Java – самый высокооплачиваемый язык, которым десятки лет пользуются IT-гиганты. Существует множество областей применения Java: от сайтов до Android-приложений и игр. У нас вы получить самые важные практические знания.`,
            pathName: routesPath.java,
        },
        {
            developer: 'QA тестировщик',
            titleJob: `Тестировщик – ответственная и важная должность, несмотря на то что тестирование – самый простой способ попасть в IT. Вы будете писать тесты, чтобы проверить работоспособность IT-продуктов, корректность и отсутствие багов. Благодаря вам пользователям интернета будут доступны качественные приложения и сайты.`,
            pathName: routesPath.testing,
        },
    ],
};
