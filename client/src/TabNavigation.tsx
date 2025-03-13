import React from 'react';

interface TabNavigationProps {
  activeTab: 'login' | 'signup';
  onTabChange: (tab: 'login' | 'signup') => void;
}


const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className='form-toggle'>
      <button
        className={activeTab === 'login' ? 'active' : ""}
        onClick={() => onTabChange('login')}
        type="button"
      >
        Login
      </button>
      <button
        className={activeTab === 'signup' ? 'active' : ""}
        onClick={() => onTabChange('signup')}
        type="button"
      >
        Signup
      </button>
    </div>
  );
};

export default TabNavigation;