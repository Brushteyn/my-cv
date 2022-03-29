import s from './Description.module.scss';

function Description() {
  return (
    <div className={s.description}>
      <div className="container">
        <div className={s.inner}>
          <h2 className={s.title}>Кто я и чем занимаюсь?</h2>
          <p className={s.text}>Я Frontend-разработчик/HTML-верстальщик. Опыт коммерческой разработки
            почти 5 лет. Последние годы работал над
            большим B2B проектом в сфере туризма, в должности ведущего html верстальщика. И в киберспортивной площадке в должности верстальщика/фронтенд разработчика.</p>
        </div>
      </div>
    </div>
  );
}

export default Description;
