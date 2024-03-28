import './Header.css';
import Contact from './Contact/Contact'

function Header({ title }) {
    const reloadPage = () => {
        window.location.reload();
    };
    return (
        <div className='header'>
            <div className='header-title' onClick={reloadPage}>
                {title}
            </div>
            <div className='contact-box'>
                <Contact/>
            </div>
        </div>
    );
}

export default Header;