import s from './Main.module.scss';

function Main() {
  return (
    <div className={s.Main}>
      <div className='container'>
        <div className={s.mainInner}>
          <div className={s.left}>
            <h2 className={s.title}>Бруштейн Тимофей</h2>
            <h3 className={s.subtitle}><span className={s.blueSpan}>Frontend</span> разработчик </h3>
            <p className={s.text}>Быстрая и качественная верстка. Работаю с любыми типами задач. Качественно и быстро
                анализирую задачу, даю точную оценку, веду полную отчётность о статусе задачи. Лояльно отношусь к
                изменениям/обновлениям ТЗ в процессе верстки.</p>
            <div><a href="https://t.me/Timofey91" className={s.mainBtn}>Связаться со мной</a>
            </div>
          </div>
          <div className={s.right}><img src={process.env.PUBLIC_URL + '/img/workspace.svg'} alt="img" /></div>
        </div>
      </div>
    </div>
  );
}

export default Main;
