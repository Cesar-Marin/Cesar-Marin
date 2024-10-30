import { useLanguage } from '../../hooks/Lang';
import './Proyects.css';

 
const Proyects = () => {
   
    const { language, translations } = useLanguage();

    return (
        <main className='main'>
        <section className="proyects">
            <h2>Portfolio Showcase: A Collection of My Projects</h2>
            <div className="proyects__container">
               
                 
                       
                     {translations[language].proyects.map((item: { img: string; title: string; description: string; page?: string; repo?: string }) => (
                         <div className="proyects__container__card"> 
   <div className="proyects__container__card__img">
    <img src={item.img} alt="proyects" />
    </div>
                    <div className="proyects__container__card__info">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <fieldset>
                            {item.page ?  
                        <a href={item.page} target="_blank"> {language ==='es' ? 'Ver Proyecto' : 'View Project'} </a> : 
                        <a className='disabled-link' href={item.page} target="_blank">{language ==='es' ? 'Ver Proyecto' : 'View Project'} </a>}
                         {item.repo ?
                        <a href={item.repo} target="_blank"> {language ==='es' ? 'Ver Repositorio' : 'View Repository'} </a> :
                        <a href={item.repo} className='disabled-link' target="_blank"> {language ==='es' ? 'Ver Repositorio' : 'View code'} </a>}
 
                        </fieldset>
                    </div>
                </div>
                     
                     ))}

                        
                   

            </div>

        </section>
    </main>
    )}

export default Proyects






