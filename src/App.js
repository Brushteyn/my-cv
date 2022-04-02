import React from "react";
import './App.scss';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import {Routes, Route, useLocation} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function App(props) {
  const location = useLocation();


  return (
    <div className="App">
      <Header />
        <TransitionGroup component={null}>
          <CSSTransition
          key={location.key}
          timeout={600}
          classNames="fade"
          >
            <Routes location={location}>
              <Route path='/my-cv' element={<Main />} />
              <Route path='/my-cv/About' element={<About />} />
              <Route path='/my-cv/Portfolio' element={<Portfolio />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>    
    </div>
  );
}

export default App;
