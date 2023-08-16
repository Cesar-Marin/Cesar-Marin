import React, { createContext, useContext, useState } from 'react';

interface Tab {
  key: string;
  title: string;

}

interface TabsContextType {
  tabs: Tab[];
  activeTab: number;
  setActiveTab: (index: string) => void;
  addTab: (tab: Tab) => void;
  removeTab: (index: number) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

export function TabsProvider({ children }: React.PropsWithChildren<{}>) {
  const [tabs, setTabs] = useState<Tab[]>([]);
  const [activeTab, setActiveTab] = useState<string>('home');

  const addTab = (tab: Tab) => {

    if (tabs.find((t) => t.key == tab.key))
    { 
        const changeLang = tabs.map((t) => {
            if (t.key === tab.key) {
                t.title = tab.title;
            }
            return t;
        });
    
        setTabs(changeLang);

        return;

    }
     
    setTabs((prevTabs) => [...prevTabs, tab]);

  };

  const removeTab = (index: number) => {
   
    setTabs((prevTabs) => {
      const newTabs = [...prevTabs];
      newTabs.splice(index, 1);
      return newTabs;
    });
  };

  return (
    <TabsContext.Provider value={{ tabs, activeTab, setActiveTab, addTab, removeTab }}>
      {children}
    </TabsContext.Provider>
  );
}

export function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('useTabsContext must be used within a TabsProvider');
  }
  return context;
}
