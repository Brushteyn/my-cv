import React from "react";
import './App.scss';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import {Routes, Route} from "react-router-dom";

function App(props) {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/my-cv' element={<Main />} />
        <Route path='/my-cv/About' element={<About />} />
        <Route path='/my-cv/Portfolio' element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
