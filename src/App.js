import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Contact from './components/Contact/Contact';
import Slide from './components/Slide/Slide';
import Service from './components/Service/Service';

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
        <h1>Services</h1>
        <Service title="Event coverage"
                 price="40e/h"
                 description="Your event professional photographer. Focus on enjoying your time with your loved ones while we take care of putting these memories into pictures"
        />
        <Service title="Photoshoot"
                 price="25e"
                 description="Get your own portfolio"
        />
      </div>
      <div className='panel-theme'>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
