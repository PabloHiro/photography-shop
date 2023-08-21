import './App.css';
import Logo from './components/Logo/Logo';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Slide from './components/Slide/Slide';
import Service from './components/Service/Service';

function App() {
  return (
    <div className='background-theme'>
      <div className='logo-theme'>
        <Logo/>
      </div>
      <div className='fixed-theme'>
        <Navigation/>
      </div>
      <div className='panel-theme'>
        <Header/>
        {/*<Slide/>*/}
        <h1>Services</h1>
        <Service title="Event coverage"
                 price="40e/h"
                 description="Your event professional photographer. Focus on enjoying your time with your loved ones while we take care of putting these memories into pictures"
        />
        <Service title="Photoshoot"
                 price="25e"
                 description="Get your own portfolio"
        />
        <Service title="Photoshoot"
                 price="35e"
                 description="Get your own portfolio"
        />
      </div>
    </div>
  );
}

export default App;
