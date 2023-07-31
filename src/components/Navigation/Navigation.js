import './Navigation.css';

function NavigationButton( {name, href }) {
  return (
     <div className="navigation-button">
        <a href={href}>{name}</a>
     </div>
  );
};

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="navigation-left">
        <NavigationButton name="Home" href="#home"/>
      </div>
      <div className="navigation-right">
        <NavigationButton name="Contact" href="#contact"/>
        <NavigationButton name="Services" href="#services"/>
        <NavigationButton name="About" href="#about"/>
      </div>
    </nav>
  );
};

export default Navigation;