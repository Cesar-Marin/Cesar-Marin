import './Home.css'
import logo from '../../assets/cm.svg'
import img from '../../assets/porfile.jpg'
import { useLanguage } from '../../hooks/Lang';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home ( ) {
    const { language, translations } = useLanguage();
    return (
        <main className='main'>
            <section>
            <div className='main__logo' >
                    <object type="image/svg+xml" data={logo} className='main__logo'/>
                    </div>
             <div> 
            <div className='main__container'>
             <div className='main__pic'>
                    <img src={img} alt="Cesar Marin" />

                    </div>
                <div className='main__content'>
                
                    <div className='main__title'>
                   
                    <div>
                        <h1>{translations[language].home.first.title}</h1>
                        <span>{translations[language].home.first.subtitle}</span>
                        </div>
                  
                    
                    </div>
                </div>

               
            </div>

            {translations[language].home.sub.map((item: { title: string; subtitle: string }) => (
            <div className='main__container'>
             <div className='main__pic'>
             <FontAwesomeIcon icon={['fas', 'laptop-code']} />
                    </div>
                <div className='main__content'>
                
                    <div className='main__title'>
                   
                    <div>
                        <h1>{item.title}</h1>
                        <span>{item.subtitle}</span>
                        </div>
                  

                    </div>
                </div>

         
                </div>
                ))}
            </div>
            </section>
        </main>
    )
}
