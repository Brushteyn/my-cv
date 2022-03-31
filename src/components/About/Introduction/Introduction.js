import s from './Introduction.module.scss';
import { useTranslation } from "react-i18next";

function Introduction() {
  const { t, i18n } = useTranslation();

  let langLink = () => {
    if(i18n.language === "ru") {
      return "https://hh.ru/resume/2eba9a1bff06c6f3880039ed1f375748526859"
    } else {
      return "https://www.linkedin.com/in/timofey-brushteyn-38077319a/"
    }
  }

  return (
    <div className="container">
      <div className={s.introduction}>
        <h1 className={s.name}>{t("name")}</h1>
        <img src={process.env.PUBLIC_URL + '/img/guy.svg'} alt="img" className={s.introductionImg}/>
        <div className={s.introductionBtns}>
          <a className={s.introductionBtn} href="https://t.me/Timofey91">{t("mainBtn")}</a>
          <a className={`${s.introductionBtn} ${s.blueFilled}`} href={langLink()} target="_blank" rel="noreferrer">{t("secondBtn")}</a>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
