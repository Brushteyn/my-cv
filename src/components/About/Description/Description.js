import s from './Description.module.scss';
import { useTranslation } from "react-i18next";

function Description() {
  const { t } = useTranslation();

  return (
    <div className={s.description}>
      <div className="container">
        <div className={s.inner}>
          <h2 className={s.title}>{t("descTitle")}</h2>
          <p className={s.text}>{t("descText")}</p>
        </div>
      </div>
    </div>
  );
}

export default Description;
