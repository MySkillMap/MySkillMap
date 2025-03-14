import React, { useState } from 'react';
import TabNavigation from './TabNavigation';
import LoginForm from './LoginForm';
import SignupForm from './SignupFrom';
import PathCard from './PathCard';
import './App.css';

const AuthPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  
  // Example path cards
  const pathCards = [
    {
      title: "Learning Path 1",
      description: "description",
      progress: 45,
      completed: 3,
      inProgress: 2,
      notStarted: 5
    },
    {
      title: "Learning Path 2",
      description: "description",
      progress: 70,
      completed: 7,
      inProgress: 1,
      notStarted: 2
    },
    {
      title: "Learning Path 3",
      description: "Description",
      progress: 30,
      completed: 2,
      inProgress: 3,
      notStarted: 8
    }
  ];

  const handleTabChange = (tab: 'login' | 'signup'): void => {
    setActiveTab(tab);
  };

  const handleLogin = (email: string, password: string): void => {
    // In a real app, you would validate credentials here
    console.log("Login attempted with:", email, password);
    
  
    setIsLoggedIn(true);
  };

  const handleSignup = (email: string, password: string, confirmPassword: string): void => {
  
    console.log("Signup attempted with:", email, password, confirmPassword);
    
   
    setActiveTab('login');
  };

  const handleLogout = (): void => {
    setIsLoggedIn(false);
  };

  // If logged in, show dashboard with path cards
  if (isLoggedIn) {
    return (
      <div className="dashboard">
        <div className="dashboard-header">
          <h1>Learning Dashboard</h1>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
        <div className="path-cards-grid">
          {pathCards.map((card, index) => (
            <PathCard
              key={index}
              title={card.title}
              description={card.description}
              progress={card.progress}
              completed={card.completed}
              inProgress={card.inProgress}
              notStarted={card.notStarted}
            />
          ))}
        </div>
      </div>
    );
  }

  
  return (
    <div className='container'>
      <div className='form-container'>
        <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />
        {activeTab === 'login' ? (
          <LoginForm onLogin={handleLogin} onSwitchToSignup={() => handleTabChange('signup')} />
        ) : (
          <SignupForm onSignup={handleSignup} />
        )}
      </div>
    </div>
  );
};

export default AuthPage;