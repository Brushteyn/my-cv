import s from './Factbox.module.scss';

function Factbox() {
  return (
    <div className="container">
      <div className={s.factBox}>
        <div className={s.factItem}>
          <span className={s.factValue}>30</span>
          <span className={s.factName}>Возраст, лет</span>
        </div>
        <div className={s.factItem}>
          <span className={s.factValue}>React/Redux</span>
          <span className={s.factName}>Основные инструменты</span>
        </div>
        <div className={s.factItem}>
          <span className={s.factValue}>100+</span>
          <span className={s.factName}>Разработанных проектов</span>
        </div>
        <div className={s.factItem}>
          <span className={s.factValue}>5</span>
          <span className={s.factName}>Опыт работы, лет</span>
        </div>
      </div>
    </div>
  );
}

export default Factbox;
