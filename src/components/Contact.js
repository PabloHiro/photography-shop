import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <div className="contact-icons">
        <a href="https://twitter.com/your_twitter_handle" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="icon" />
        </a>
        <a href="https://www.instagram.com/your_instagram_handle" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="icon" />
        </a>
        <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGoogle} className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Contact;

