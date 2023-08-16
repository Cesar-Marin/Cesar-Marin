import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLanguage } from '../../hooks/Lang';
import './Me.css'

export default function Me() {

    const { language, translations } = useLanguage();

    return (
        <main className='main'>
            <section className='me'>
            <div className='me__container__img'>
            <div className="mask">
        </div>
                        
                    </div>
                <h2 className='me__title'>{translations[language].about.title}</h2>

                <div className='me__container'>
                    <div className='me__container__info'>
                        <div className='me__container__info__item'>
                            {translations[language].about.text.map((item, index) => {
                                return (
                                    <p key={index}>{item.text}</p>
                                )
                            })} 
                        </div>
                    </div>
                  
                </div>
                <div className='me__container__hobbies'>
                    <h3>{translations[language].about.hobbies.label}  <FontAwesomeIcon icon={translations[language].about.hobbies.icon}/> </h3> 
                    <ul>
                        {translations[language].about.hobbies.subItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <FontAwesomeIcon className='me__container__hobbies__icon' icon={item.icon} />
                                    <span>{item.label}</span>
                                </li>
                            )
                        }
                        )}
                    </ul>
                </div>


               
            </section>
        </main>
    )
}