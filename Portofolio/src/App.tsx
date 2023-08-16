import React, { useEffect, useState } from 'react';
import Nav from './components/Nav/Nav';
import TabsHeader from './components/Header/TabsHeader';
import Home from './components/Home/Home';
import Proyects from './components/Proyects/Proyects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Me from './components/About/Me';
import { useTabsContext } from './hooks/activeTab';
import { useLanguage } from './hooks/Lang';

import './App.css';

function App() {
  const { language, translations } = useLanguage();
  const { tabs, addTab, activeTab } = useTabsContext();
  const [activeItems, setActiveItems] = useState<string>('home');
  const [tabsHeader, setTabsHeader] = useState<string[]>([]);

  useEffect(() => {
   
    setActiveItems(activeTab);
  }, [activeTab]);

  useEffect(() => {
     
    const actualTabs = [...tabs]  ;
    translations[language].navigation.forEach((item) => {
      for (let i = 0; i < actualTabs.length; i++) {
        if (actualTabs[i].key === item.key) {
           addTab({
            key: item.key,
            title: item.label,
          });
        }
      }
    });
 
  }, [language]);

  
  return (
    <div className="App">
      <TabsHeader tabs={tabs} />
      <Nav />
      {activeItems === 'home' ? <Home /> 
      : activeItems === 'about' ? <Me/>
      : activeItems === 'skills' ? <Skills />
      : activeItems === 'projects' ? <Proyects />
      : activeItems === 'contact' ? <Contact />
      : null}
      <Footer />
    </div>
  );
}

export default App;
