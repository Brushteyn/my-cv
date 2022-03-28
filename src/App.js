import './App.scss';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/About' element={<About />} />
        <Route path='/Portfolio' element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
