import React from 'react';

type TabNavigationProps = {
  activeTab: 'login' | 'signup';
  onTabChange: (tab: 'login' | 'signup') => void;
};

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex w-full rounded-t-lg overflow-hidden">
      <button
        className={`w-1/2 py-4 text-center transition-colors ${
          activeTab === 'login' 
            ? 'bg-black text-white font-medium' 
            : 'bg-gray-800 text-gray-400 hover:text-gray-200'
        }`}
        onClick={() => onTabChange('login')}
      >
        Log In
      </button>
      <button
        className={`w-1/2 py-4 text-center transition-colors ${
          activeTab === 'signup' 
            ? 'bg-black text-white font-medium' 
            : 'bg-gray-800 text-gray-400 hover:text-gray-200'
        }`}
        onClick={() => onTabChange('signup')}
      >
        Sign Up
      </button>
    </div>
  );
};

export default TabNavigation;