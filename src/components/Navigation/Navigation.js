import './Navigation.css';
import Contact from '../Contact/Contact';

function NavigationButton( { name, href } ) {
  return (
     <div className="navigation-button">
        <a href={ href }>{ name }</a>
     </div>
  );
};

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="top">
      <NavigationButton name="Home" href="#home"/>
      <NavigationButton name="Contact" href="#contact"/>
      <NavigationButton name="Services" href="#services"/>
      <NavigationButton name="About" href="#about"/>
      </div>
      <div className="bottom">
        <Contact/>
      </div>
    </div>
  );
};

export default Navigation;