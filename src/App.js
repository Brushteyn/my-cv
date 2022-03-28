import './App.scss';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
