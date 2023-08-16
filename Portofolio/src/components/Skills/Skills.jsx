import { useLanguage } from '../../hooks/Lang';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Skills.css';

const Skills = () => {
    const { language, translations } = useLanguage();
  
    return (
        <main className="main"> 
        <section className="skills-container">
            <h2 className="skills-title">{language === 'es' ? 'Habilidades: Mi experiencia y conocimientos' : 'Skills Portfolio: My Expertise and Abilities' }</h2>
            <div className="skills">
               {translations[language].skills.map((skill, index) => (
                     <div className="skill" key={index}>
                        <h4 className="skill-title">{skill.title}</h4>
                        <p className="skill-description">{skill.description}</p>
                        <div className='skill-ico'> 

                          <FontAwesomeIcon icon={skill.ico} size="3x" color="#fff"  className={skill.className}/>



                        </div>
                    </div>
                ))}
            </div>
        </section>
                        

        </main>
    );
    }

export default Skills;
