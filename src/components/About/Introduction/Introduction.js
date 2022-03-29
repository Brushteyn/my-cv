import s from './Introduction.module.scss';

function Introduction() {
  return (
    <div className="container">
      <div className={s.introduction}>
        <h1 className={s.name}>Бруштейн Тимофей</h1>
        <img src={process.env.PUBLIC_URL + '/img/guy.svg'} alt="img" className={s.introductionImg}/>
        <div className={s.introductionBtns}>
          <a className={s.introductionBtn} href="https://t.me/Timofey91">Связаться со мной</a>
          <a className={`${s.introductionBtn} ${s.blueFilled}`} href="https://hh.ru/resume/2eba9a1bff06c6f3880039ed1f375748526859" target="_blank" rel="noreferrer">Смотреть резюме</a>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
