import "./Header.css";
import Contact from "./Contact/Contact";

function Header({ title }) {
  const reloadPage = () => {
    window.location.reload();
  };
  return (
    <div className="header">
      <div className="header-title" onClick={reloadPage}>
        {title}
      </div>
      <Contact />
    </div>
  );
}

export default Header;
