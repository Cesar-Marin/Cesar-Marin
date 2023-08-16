import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLanguage } from '../../hooks/Lang';
import './Contact.css'

export default function Contact() {


    
    const { language, translations } = useLanguage();
    const [send, setSend] = useState(false);
    const [name, setName] = useState('');

    const capture = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = document.getElementById('contactForm') as HTMLFormElement;
        const formData = new FormData(form);
        const names = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        setName(names);
        setSend(true);
      }
      

    return (
        <main className='main'>
            <section className='contact'>
                <h2 className='contact__title'>{translations[language].contact.title}</h2>
                <div className='contact__container'>
                    <div className='contact__container__info'>
                        <div className='contact__container__info__item'>
                         <span>{translations[language].contact.text}</span>
                          </div>
                    </div>
                   
                    <div className='contact__container__info'>
                        <div className='contact__container__info__item'>
                            <h3>{translations[language].contact.socialtxt}</h3>
                            <ul>
                            {translations[language].contact.social.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a href={item.link} target='_blank' rel="noreferrer">
                                            <FontAwesomeIcon className='contact__container__info__item__icon' icon={item.icon} />
                                            <span>{item.label}</span>
                                        </a>
                                    </li>
                                )
                                  
                                  

                            })}
                            </ul>
                        </div>
                        
                    </div>
                  
                    <div className='contact__container__form'>
                        <form action="" id="contactForm">
                            <fieldset>
                                <label htmlFor="name">{translations[language].contact.form.name}</label>
                                <input type="text" name='name' id='name' placeholder={translations[language].contact.form.namePlaceholder} required />
                            </fieldset>
                            <fieldset>
                                <label htmlFor="email">{translations[language].contact.form.email}</label>
                                <input type="email" name='email' id='email'  placeholder={translations[language].contact.form.emailPlaceholder} required  />
                            </fieldset>
                            <fieldset>
                                <label htmlFor="message">{translations[language].contact.form.message}</label>
                                <textarea name="message" id="message" cols={30} rows={10} placeholder={translations[language].contact.form.messagePlaceholder} required ></textarea>
                            </fieldset>
                            <fieldset>
    <button type='submit' onClick={capture}>
      {send === false
        ? translations[language].contact.form.submit
        : `${translations[language].contact.form.submited}, ${name}`}
    </button>
  </fieldset>
                        </form>
                    </div>
                    <div className='contact__container__info'>
                        <div className='contact__container__info__item'>
                            <div>
                            <FontAwesomeIcon className='contact__container__info__item__icon' icon={['fas', 'map-marker-alt']} />
                            <span>{translations[language].contact.location}</span>
                            </div>
                        </div>
                        <div className='contact__container__info__item'>
                            <div>
                            <FontAwesomeIcon className='contact__container__info__item__icon' icon={['fas', 'phone-alt']} />
                            <span>{translations[language].contact.phone}</span>
                            </div>
                        </div>
                        <div className='contact__container__info__item'>
                        <div>
                            <FontAwesomeIcon className='contact__container__info__item__icon' icon={['fas', 'envelope']} />
                            <span>{translations[language].contact.email}</span>
                            </div>
                        </div>
                        
                    </div>  
                </div>
            </section>
        </main>
    )
}


