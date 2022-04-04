import s from './Factbox.module.scss';
import { useTranslation } from "react-i18next";

function Factbox() {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className={s.factBox}>
        <div className={s.factItem}>
          <span className={s.factValue}>30</span>
          <span className={s.factName}>{t("factAge")}</span>
        </div>
        <div className={s.factItem}>
          <span className={s.factValue}>HTML/CSS/JS</span>
          <span className={s.factName}>{t("factInstruments")}</span>
        </div>
        <div className={s.factItem}>
          <span className={s.factValue}>100+</span>
          <span className={s.factName}>{t("factProjects")}</span>
        </div>
        <div className={s.factItem}>
          <span className={s.factValue}>5</span>
          <span className={s.factName}>{t("factExperience")}</span>
        </div>
      </div>
    </div>
  );
}

export default Factbox;
