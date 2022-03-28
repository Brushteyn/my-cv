import s from './Header.module.scss';
import React, { useState } from 'react';

function Header() {

  const [isActive, setActive] = useState(false);

  const openMenu = () => {
    setActive(!isActive);
  }

  return (
    <div className={s.Header}>
      <div className='container'>
        <div className={s.headerInner}>
            <div className={s.burger} onClick={openMenu}>
                <div className={s.burgerLine}></div>
                <div className={s.burgerLine}></div>
                <div className={s.burgerLine}></div>
            </div>
            <div className={`${s.inner} ${isActive ? `${s.innerShow}` : ""}`}>
                <div className={s.socials}>
                    <a target="_blank" rel="noreferrer" href="https://t.me/Timofey91" className={s.socialsLink}>
                      <img src={require("../../img/telegram.svg").default} alt="Телеграм" />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/Brushteyn" className={s.socialsLink}>
                      <img src={require("../../img/git.svg").default} alt="GitHub" />
                    </a>
                    <a href="mailto:brushteyntimofey@gmail.com" className={s.socialsLink}>
                      <img src={require("../../img/gmail.svg").default} alt="Gmail" />
                    </a>
                </div>
                <nav className={s.nav}>
                    <div className={s.langBtns}>
                      <button className={s.langBtn}>Ru /</button>
                      <button className={s.langBtn}>Eng</button>
                    </div>
                    <a href="#main" className={s.navLink}>Главная</a>
                    <a href="#about" className={s.navLink}>Обо мне</a>
                    <a href="#portfolio" className={s.navLink}>Портфолио</a>
                </nav>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
