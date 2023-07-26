import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*< img src={logo} className="App-logo" alt="logo" />*/}
        <Navigation/>
        <Header/>
        <Contact/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
