import s from './Main.module.scss';
import { useTranslation } from "react-i18next";

function Main() {
  const { t } = useTranslation();

  return (
    <div className={s.Main}>
      <div className='container'>
        <div className={s.mainInner}>
          <div className={s.left}>
            <h2 className={s.title}>{t("name")}</h2>
            <h3 className={s.subtitle}><span className={s.blueSpan}>Frontend</span> {t("developer")} </h3>
            <p className={s.text}>{t("mainText")}</p>
            <div><a href="https://t.me/Timofey91" className={s.mainBtn}>{t("mainBtn")}</a>
            </div>
          </div>
          <div className={s.right}><img src={process.env.PUBLIC_URL + '/img/workspace.svg'} alt="img" /></div>
        </div>
      </div>
    </div>
  );
}

export default Main;
