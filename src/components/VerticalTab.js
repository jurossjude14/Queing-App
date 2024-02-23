import React, { useState } from 'react';

const VerticalTab = () => {
    const [currentTab, setCurrentTab] = useState(0);
    const handleTabClick = (tabIndex) => {
        setCurrentTab(tabIndex);
    }; 

    const tabs = [
        { id: 1, label: 'Tab 1' },
        { id: 2, label: 'Tab 2' },
        { id: 3, label: 'Tab 3' },
      ];

    const tabContent = (
        <div className="tab-content">
          {currentTab === 1 && <p>Content for Tab 1</p>}
          {currentTab === 2 && <p>Content for Tab 2</p>}
          {currentTab === 3 && <p>Content for Tab 3</p>}
        </div>
      );  
  return (
    <div className="vertical-tabs">
    <div className="tab-buttons">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab-button ${currentTab === tab.id ? 'active' : ''}`}
          onClick={() => handleTabClick(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
    {tabContent}
  </div>
  )
}

export default VerticalTab
