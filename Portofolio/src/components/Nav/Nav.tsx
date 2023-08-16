import logo from '../../assets/logo.svg';
import { useState, useId } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLanguage } from '../../hooks/Lang';
import { useTabsContext } from '../../hooks/activeTab';


import './Nav.scss';

export default function Nav() {
  const id = useId();

  const { setActiveTab, addTab } = useTabsContext();
  const [activeItems, setActiveItems] = useState<string[]>([]);
  const { language, translations } = useLanguage();

  const newTab = (key: string) => {
    setActiveTab(key);
    addTab({
        key: key,
        title: translations[language].navigation.find(item => item.key === key)?.label || ''
        });
    }

  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    const itemId = event.currentTarget.id;
    const itemKey = itemId.split('-')[1];
    newTab(itemKey);
    if (activeItems.includes(itemId)) {
      setActiveItems(prevActiveItems => prevActiveItems.filter(item => item !== itemId));
    } else {
      setActiveItems(prevActiveItems => [...prevActiveItems, itemId]);
    }
  }

  const isItemActive = (itemId: string) => activeItems.includes(itemId);

  return (
    <nav>
      <div className='nav-container'>
        <div className='nav__space' />

        <div className='nav__icons'>
          <ul>
            {translations[language].navigation.map(item => (
              <li key={item.key} onClick= {()=> newTab(item.key)}>
                <a href={`#${item.key}`}>
                  <span>
                    <FontAwesomeIcon icon={item.icon} />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className='nav__icon-user'>
          <ul>
            <li onClick={ ()=> newTab('about')}>
              <a href="#about">
                <span>
                  <FontAwesomeIcon icon={['far', 'user']} />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='nav-container'>
        <div className='nav__logo'>
          <img src={logo} alt="logo" /> <h4> Cesar Marin </h4>
        </div>
        <div className='nav__menu'>
          <div className='nav__titel'>
            <span>&gt;</span><span>{translations[language].spaceWork.portofolio} </span>
          </div>

          <ul className='nav__list'>
            {translations[language].navigation.map((item, index) => (<>
              <li
                key={item.key}
                id={`${id}-${item.key}`}
                onClick={handleClick}
                className={`nav__list-item${isItemActive(`${id}-${item.key}`) ? '--active' : ''}`}>
                <a href={`#${item.key}`}>
                  <span>&gt;</span> <span>{item.label}</span>
                </a>

                
              </li>
              {item.subItems && (
                  <ul className='nav__list-item--sub' key={index}  onClick={ ()=> newTab(item.key)}>
                    {item.subItems.map(subItem => (
                      <li key={subItem.key} >
                        <a href={`#${subItem.key}`}>
                          <span>
                            <FontAwesomeIcon icon={subItem.icon} className={subItem.className} />
                          </span>
                          <span>{subItem.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
