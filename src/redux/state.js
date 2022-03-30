let posts = [
    {
        id: 1,
        img: `${process.env.PUBLIC_URL + '/img/mockup-pantogam.png'}`,
        title: "My Amic",
        tags: {
            year: "2017",
            techno1: "Html",
            techno2: "Css",
            techno3: "Js"
        },
        text: "Разработка сайта для программы лояльности и скидочных карт Amic в Украине.",
        link: "https://my.amicenergy.com.ua/index"
    },
    {
        id: 2,
        img: `${process.env.PUBLIC_URL + '/img/mockup-pantogam-2.png'}`,
        title: "Landing",
        tags: {
            year: "2017",
            techno1: "Html",
            techno2: "Css",
            techno3: "Js"
        },
        text: "Разработка лендинга для веб студии.",
        link: "https://brushteyn.github.io/landing/index.html"
    },
    {
        id: 3,
        img: `${process.env.PUBLIC_URL + '/img/mockup-pantogam-9.png'}`,
        title: "Сайт Российского посольства в Китае",
        tags: {
            year: "2017",
            techno1: "Html",
            techno2: "Css",
            techno3: "Js"
        },
        text: "Разработка сайта Российского посольства в Китае.",
        link: "http://www.russia.org.cn/en/"
    },
    {
        id: 4,
        img: `${process.env.PUBLIC_URL + '/img/mockup-pantogam-3.png'}`,
        title: "Tech-Service",
        tags: {
            year: "2018",
            techno1: "Html",
            techno2: "Css",
            techno3: "Js"
        },
        text: "Разработка лендинга для заказчика который занимается ремонтом бытовой техники.",
        link: "https://brushteyn.github.io/tehno-service/index.html"
    },
    {
        id: 5,
        img: `${process.env.PUBLIC_URL + '/img/mockup-pantogam-4.png'}`,
        title: "Landing",
        tags: {
            year: "2018",
            techno1: "Html",
            techno2: "Css",
            techno3: "Js"
        },
        text: "Разработка лендинга для веб студии.",
        link: "https://brushteyn.github.io/template/index.html"
    },
    {
        id: 6,
        img: `${process.env.PUBLIC_URL + '/img/mockup-pantogam-5.png'}`,
        title: "Momat Rino",
        tags: {
            year: "2018",
            techno1: "Html",
            techno2: "Css",
            techno3: "Js"
        },
        text: "Разработка сайта рекламы препарата Момат Рино от насморка.",
        link: "https://brushteyn.github.io/momat-rino/index.html"
    },
    {
        id: 7,
        img: `${process.env.PUBLIC_URL + '/img/mockup-pantogam-6.png'}`,
        title: "Walking Dead",
        tags: {
            year: "2018",
            techno1: "Html",
            techno2: "Css",
            techno3: "Js"
        },
        text: "Разработка промосайта для нового сезона сериала Walking Dead.",
        link: "https://brushteyn.github.io/walking-dead/index.html"
    },
    {
        id: 8,
        img: `${process.env.PUBLIC_URL + '/img/mockup-pantogam-7.png'}`,
        title: "Isec Management",
        tags: {
            year: "2019",
            techno1: "Html",
            techno2: "Css",
            techno3: "Js"
        },
        text: "Разработка лендинга для веб студии.",
        link: "https://brushteyn.github.io/isec/index.html"
    },
    {
        id: 9,
        img: `${process.env.PUBLIC_URL + '/img/mockup-pantogam-10.png'}`,
        title: "TourHunter.com",
        tags: {
            year: "2019",
            techno1: "Html",
            techno2: "Css",
            techno3: "Js"
        },
        text: "Мощная онлайн-платформа B2B, где поставщики туров и мероприятий могут торговать с агентами, привлекать и знакомиться с новыми партнерами по всему миру и получать больше онлайн-заказов.",
        link: "https://pro.tourhunter.com/"
    },
    {
        id: 10,
        img: `${process.env.PUBLIC_URL + '/img/mockup-pantogam-8.png'}`,
        title: "Orangerie",
        tags: {
            year: "2020",
            techno1: "Html",
            techno2: "Css",
            techno3: "Js"
        },
        text: "Разработка лендинга для оранжереи в Нью-Йорке.",
        link: "https://brushteyn.github.io/orangerie/index.html"
    },
    {
        id: 11,
        img: `${process.env.PUBLIC_URL + '/img/mockup-pantogam-11.png'}`,
        title: "Resanta.ru",
        tags: {
            year: "2020",
            techno1: "Html",
            techno2: "Css",
            techno3: "Js"
        },
        text: "РЕСАНТА - лидер рынка сварочных инверторов и стабилизаторов напряжения в России.",
        link: "https://resanta.ru/"
    },
    {
        id: 12,
        img: `${process.env.PUBLIC_URL + '/img/mockup-pantogam-12.png'}`,
        title: "Cents & Homes",
        tags: {
            year: "2020",
            techno1: "Html",
            techno2: "Css",
            techno3: "Js"
        },
        text: "Cents'n'Homes - молодая Мюнхенская компания. Наша миссия - упростить инвестиции в недвижимость для людей во всей Европе.",
        link: "https://centsnhomes.com/ru"
    },
    {
        id: 13,
        img: `${process.env.PUBLIC_URL + '/img/mockup-pantogam-14.png'}`,
        title: "Lan Game",
        tags: {
            year: "2021",
            techno1: "Html",
            techno2: "Css",
            techno3: "Js"
        },
        text: "Игровой компьютерный клуб в 1000 кв.м. в центре Москвы.",
        link: "https://brushteyn.github.io/langame/index.html"
    },
    {
        id: 14,
        img: `${process.env.PUBLIC_URL + '/img/mockup-pantogam-13.png'}`,
        title: "Watch Town",
        tags: {
            year: "2021",
            techno1: "Html",
            techno2: "Css",
            techno3: "Js"
        },
        text: "Интернет магазин часов.",
        link: "https://brushteyn.github.io/watchtown/index.html"
    },
    {
        id: 15,
        img: `${process.env.PUBLIC_URL + '/img/mockup-pantogam-15.png'}`,
        title: "ISEC Wealth Management",
        tags: {
            year: "2021",
            techno1: "Html",
            techno2: "Css",
            techno3: "Js"
        },
        text: "Сайт для компании по предоставлению услуг в финансовой сфере.",
        link: "https://brushteyn.github.io/isec-management/index.html"
    },
    {
        id: 16,
        img: `${process.env.PUBLIC_URL + '/img/mockup-pantogam-16.png'}`,
        title: "OOOGR",
        tags: {
            year: "2021",
            techno1: "Html",
            techno2: "Scss",
            techno3: "Js"
        },
        text: "Киберспортивная платформа для геймеров от геймеров.",
        link: "https://ooogr.com/"
    },
    {
        id: 17,
        img: `${process.env.PUBLIC_URL + '/img/mockup-pantogam-22.png'}`,
        title: "IGM",
        tags: {
            year: "2021",
            techno1: "Html",
            techno2: "Scss",
            techno3: "Js"
        },
        text: "Сайт самого крупного игрового сообщества на просторах СНГ.",
        link: "https://igm.gg/"
    },
    {
        id: 18,
        img: `${process.env.PUBLIC_URL + '/img/mockup-pantogam-17.png'}`,
        title: "mars.po.co",
        tags: {
            year: "2021",
            techno1: "Html",
            techno2: "Scss",
            techno3: "Js"
        },
        text: "Игра кликер созданная в честь выхода нового телефона компании РОСО.",
        link: "http://poco.igm.gg/"
    },
    {
        id: 19,
        img: `${process.env.PUBLIC_URL + '/img/mockup-pantogam-18.png'}`,
        title: "Xiaomi 11T",
        tags: {
            year: "2021",
            techno1: "Html",
            techno2: "Scss",
            techno3: "Js"
        },
        text: "Серия игр созданная в честь выхода нового телефона компании Xiaomi.",
        link: "https://igm.gg/"
    },
    {
        id: 20,
        img: `${process.env.PUBLIC_URL + '/img/mockup-pantogam-21.png'}`,
        title: "Call of Duty: Vanguard",
        tags: {
            year: "2021",
            techno1: "Html",
            techno2: "Scss",
            techno3: "Js"
        },
        text: "Промо сайт посвященный выходу игры Call of Duty: Vanguard и раздаче бета ключей.",
        link: "https://igm.gg/"
    },
    {
        id: 21,
        img: `${process.env.PUBLIC_URL + '/img/mockup-pantogam-19.jpg'}`,
        title: "Fikselburg",
        tags: {
            year: "2022",
            techno1: "Html",
            techno2: "Scss",
            techno3: "Js"
        },
        text: "Самое крупное предприятие Ленинградской области в сфере производства металлоконструкций и металлообработки.",
        link: "http://fikselburg.ru/"
    },
    {
        id: 22,
        img: `${process.env.PUBLIC_URL + '/img/mockup-pantogam-20.png'}`,
        title: "Poco",
        tags: {
            year: "2022",
            techno1: "Html",
            techno2: "Scss",
            techno3: "Js"
        },
        text: "Промо игра посвященная выходу нового телефона компании Poco.",
        link: "https://poco-ace.igm.gg/"
    },
];

export default posts;