import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

function ContactButton( {icon, href }) {
  return (
     <div className="contact-button">
        <a href={href} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={icon} className="icon" />
        </a>
     </div>
  );
};

const Contact = () => {
  return (
    <div className="contact">
      <ContactButton icon={faTwitter} href="https://twitter.com/your_twitter_handle"/>
      <ContactButton icon={faInstagram} href="https://www.instagram.com/your_instagram_handle"/>
      <ContactButton icon={faFacebook} href="https://facebook.com/your_facebook_handle"/>
    </div>
  );
};

export default Contact;

