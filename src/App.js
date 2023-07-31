import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Contact from './components/Contact/Contact';
import Slide from './components/Slide/Slide';

function App() {
  return (
    <div className='background-theme'>
      <div className='panel-theme'>
        <Navigation/>
      </div>
      <div className='panel-theme'>
        <Header/>
      </div>
      <div className='panel-theme'>
        <Slide/>
      </div>
      <div className='panel-theme'>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
