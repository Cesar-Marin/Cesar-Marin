
import { useTabsContext } from '../../hooks/activeTab'; 
import './TabsHeader.css';

interface TabsHeaderProps {
  tabs: Tab[];
}

const TabsHeader: React.FC<TabsHeaderProps> = ({ tabs }) => {
  const { activeTab, setActiveTab, removeTab } = useTabsContext(); 


  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {tabs.map((tab, index) => (
          <div key={index} className={`tab ${activeTab === tab.key ? 'active' : ''}`} onClick={() => setActiveTab(tab.key)}>
            <span >{tab.title}</span>
            <button onClick={() => removeTab(index)}>&#215;</button> {/* Botón de eliminación */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabsHeader;
