import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

function ContactButton( { icon, href } ) {
  return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="contact-button">
        <FontAwesomeIcon className="contact-icon" 
          size="lg"
          icon={icon}/>
      </a>
  );
};

const Contact = () => {
  return (
    <div className="contact">
      <ContactButton icon={faInstagram} href="https://www.instagram.com/your_instagram_handle"/>
      <ContactButton icon={faFacebook} href="https://facebook.com/your_facebook_handle"/>
    </div>
  );
};

export default Contact;

