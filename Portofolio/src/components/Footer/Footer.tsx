import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';
import { useLanguage } from '../../hooks/Lang'; 

export default function Footer() {
  const { language, setLanguageHandler, translations } = useLanguage();

  const handleLanguageChange = (event) => {
    setLanguageHandler(event.target.value);
  };

  return (
    <footer>
      <div className='footer-container'>
        <div className='footer__icons'>
          <ul>
          <li><a href="https://github.com/Cesar-Marin" target="_blank" rel="noopener noreferrer"><span><FontAwesomeIcon icon={['fab', 'github']} /></span></a></li>
                        <li><a href="https://www.linkedin.com/in/cesar-marin-2a1447238/" target="_blank" rel="noopener noreferrer"><span><FontAwesomeIcon icon={['fab', 'linkedin']} /></span></a></li>
                        <li><a href="https://www.instagram.com/rock_oneiric/" target="_blank" rel="noopener noreferrer"><span><FontAwesomeIcon icon={['fab', 'instagram']} /></span></a></li>
          </ul>
        </div>
        <div className='footer__lang'>
          <FontAwesomeIcon icon={['fas', 'globe']} />
          <span>{translations.language} &nbsp;</span>
          <select title='lang' value={language} onChange={handleLanguageChange}>
            <option value="en">{translations.english}</option>
            <option value="es">{translations.spanish}</option>
          </select>
        </div>
        <div className='footer__copy'>
          <p>© 2023 Cesar Marin</p>
        </div>
      </div>
    </footer>
  );
}
