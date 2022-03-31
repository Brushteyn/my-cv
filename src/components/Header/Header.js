import s from './Header.module.scss';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";

function Header() {

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setActive(!isActive);
  };

  const [isActive, setActive] = useState(false);

  const openMenu = () => {
    setActive(!isActive);
  }

  const closeMenu = () => {
    setActive(!isActive);
  }

  return (
    <div className={s.Header}>
      <div className='container'>
        <div className={s.headerInner}>
            <div className={`${s.burger} ${isActive ? `${s.burgerActive}` : ""}`} onClick={openMenu}>
                <div className={s.burgerLine}></div>
                <div className={s.burgerLine}></div>
                <div className={s.burgerLine}></div>
            </div>
            <div className={`${s.inner} ${isActive ? `${s.innerShow}` : ""}`}>
                <div className={s.socials}>
                    <a target="_blank" rel="noreferrer" href="https://t.me/Timofey91" className={s.socialsLink}>
                      <img src={process.env.PUBLIC_URL + '/img/telegram.svg'} alt="Телеграм" />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/Brushteyn" className={s.socialsLink}>
                      <img src={process.env.PUBLIC_URL + '/img/git.svg'} alt="GitHub" />
                    </a>
                    <a href="mailto:brushteyntimofey@gmail.com" className={s.socialsLink}>
                      <img src={process.env.PUBLIC_URL + '/img/gmail.svg'} alt="Gmail" />
                    </a>
                </div>
                <nav className={s.nav}>
                    <div className={s.langBtns}>
                      <button className={s.langBtn} onClick={() => changeLanguage("ru")} disabled={i18n.language === 'ru'}>Ru /</button>
                      <button className={s.langBtn} onClick={() => changeLanguage("en")} disabled={i18n.language === 'en'}>Eng</button>
                    </div>
                    <NavLink className={navData => navData.isActive ? s.navLinkActive + ' ' + s.navLink : s.navLink} onClick={closeMenu} to="/my-cv/">{t("navMain")}</NavLink>
                    <NavLink className={navData => navData.isActive ? s.navLinkActive + ' ' + s.navLink : s.navLink} onClick={closeMenu} to="/my-cv/about">{t("navAbout")}</NavLink>
                    <NavLink className={navData => navData.isActive ? s.navLinkActive + ' ' + s.navLink : s.navLink} onClick={closeMenu} to="/my-cv/portfolio">{t("navPortfolio")}</NavLink>
                </nav>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
