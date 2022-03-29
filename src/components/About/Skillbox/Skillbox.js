import s from './Skillbox.module.scss';

function Skillbox() {
  return (
    <div className="container">
      <div className={s.skillBox}>
        <div className={s.column}>
          <div className={s.icon}>
            <img src={process.env.PUBLIC_URL + '/img/eye-design.svg'} alt="img"/>
          </div>
          <h3 className={s.title}>Frontend разработка</h3>
          <p className={s.text}>Современные стандарты верстки: блочная, кроссбраузерная, резиновая, адаптивная.</p>
          <div className={s.list}>
            <span className={s.listTitle}>Работаю с любыми типами задач:</span>
            <span className={s.listItem}>Создание новых страниц/проектов.</span>
            <span className={s.listItem}>Написание скриптов.</span>
            <span className={s.listItem}>Обновление существующих страниц/проектов.</span>
            <span className={s.listItem}>Редизайн сайта.</span>
            <span className={s.listItem}>Копирование сайтов.</span>
            <span className={s.listItem}>Адаптация под мобильные устройства.</span>
            <span className={s.listItem}>Правки, добавление контента.</span>
            <span className={s.listItem}>Разработка приложений на React/Redux</span>
          </div>
        </div>
        <div className={s.column}>
          <div className={s.icon}>
            <img src={process.env.PUBLIC_URL + '/img/tag.svg'} alt="img"/>
          </div>
          <h3 className={s.title}>HTML/CSS/JS</h3>
          <p className={s.text}>Быстрая и качественная верстка/разработка. Соответствующая современным
              стандартам.</p>
          <div className={s.list}>
            <span className={s.listTitle}>Какие технологии я использую:</span>
            <span className={s.listItem}>HTML5/Pug/CSS3/Sass</span>
            <span className={s.listItem}>React/Redux</span>
            <span className={s.listItem}>Базовый JS</span>
            <span className={s.listItem}>Верстка с использованием Flexbox, Grid, BEM</span>
            <span className={s.listItem}>Bootstrap 4</span>
            <span className={s.listItem}>Валидная и кроссбраузерная верстка</span>
            <span className={s.listItem}>WebPack/Gulp</span>
            <span className={s.listItem}>GitHub/GitLab</span>
            <span className={s.listItem}>Photoshop/Figma</span>
          </div>
        </div>
        <div className={s.column}>
          <div className={s.icon}>
            <img src={process.env.PUBLIC_URL + '/img/rocket.svg'} alt="img"/>
          </div>
          <h3 className={s.title}>Прочие навыки</h3>
          <p className={s.text}>Я заинтересован в командной работе, поскольку для меня важно
              всегда получать знания от окружающих людей.</p>
          <div className={s.list}>
            <span className={s.listTitle}>Качества, которыми я обладаю:</span>
            <span className={s.listItem}>Ответственность</span>
            <span className={s.listItem}>Самостоятельность</span>
            <span className={s.listItem}>Стремление к развитию</span>
            <span className={s.listItem}>Адекватное восприятие критики</span>
            <span className={s.listItem}>Отсутствие вредных привычек</span>
            <span className={s.listItem}>Английский язык - B1</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skillbox;
