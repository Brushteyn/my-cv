import s from './Skillbox.module.scss';
import { useTranslation } from "react-i18next";

function Skillbox() {
  const { t } = useTranslation();
  
  return (
    <div className="container">
      <div className={s.skillBox}>
        <div className={s.column}>
          <div className={s.icon}>
            <img src={process.env.PUBLIC_URL + '/img/eye-design.svg'} alt="img"/>
          </div>
          <h3 className={s.title}>{t("skillFirst.title")}</h3>
          <p className={s.text}>{t("skillFirst.text")}</p>
          <div className={s.list}>
            <span className={s.listTitle}>{t("skillFirst.listTitle")}</span>
            <span className={s.listItem}>{t("skillFirst.listItem1")}</span>
            <span className={s.listItem}>{t("skillFirst.listItem2")}</span>
            <span className={s.listItem}>{t("skillFirst.listItem3")}</span>
            <span className={s.listItem}>{t("skillFirst.listItem4")}</span>
            <span className={s.listItem}>{t("skillFirst.listItem5")}</span>
            <span className={s.listItem}>{t("skillFirst.listItem6")}</span>
            <span className={s.listItem}>{t("skillFirst.listItem7")}</span>
          </div>
        </div>
        <div className={s.column}>
          <div className={s.icon}>
            <img src={process.env.PUBLIC_URL + '/img/tag.svg'} alt="img"/>
          </div>
          <h3 className={s.title}>{t("skillSecond.title")}</h3>
          <p className={s.text}>{t("skillSecond.text")}</p>
          <div className={s.list}>
            <span className={s.listTitle}>{t("skillSecond.listTitle")}</span>
            <span className={s.listItem}>{t("skillSecond.listItem1")}</span>
            <span className={s.listItem}>{t("skillSecond.listItem2")}</span>
            <span className={s.listItem}>{t("skillSecond.listItem3")}</span>
            <span className={s.listItem}>{t("skillSecond.listItem4")}</span>
            <span className={s.listItem}>{t("skillSecond.listItem5")}</span>
            <span className={s.listItem}>{t("skillSecond.listItem6")}</span>
            <span className={s.listItem}>{t("skillSecond.listItem7")}</span>
            <span className={s.listItem}>{t("skillSecond.listItem8")}</span>
          </div>
        </div>
        <div className={s.column}>
          <div className={s.icon}>
            <img src={process.env.PUBLIC_URL + '/img/rocket.svg'} alt="img"/>
          </div>
          <h3 className={s.title}>{t("skillThird.title")}</h3>
          <p className={s.text}>{t("skillThird.text")}</p>
          <div className={s.list}>
            <span className={s.listTitle}>{t("skillSecond.listTitle")}</span>
            <span className={s.listItem}>{t("skillThird.listItem1")}</span>
            <span className={s.listItem}>{t("skillThird.listItem2")}</span>
            <span className={s.listItem}>{t("skillThird.listItem3")}</span>
            <span className={s.listItem}>{t("skillThird.listItem4")}</span>
            <span className={s.listItem}>{t("skillThird.listItem5")}</span>
            <span className={s.listItem}>{t("skillThird.listItem6")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skillbox;
