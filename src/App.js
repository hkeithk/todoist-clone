import React from 'react';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

export const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <Header />
        <Sidebar />
      </header>
    </div>
  );
};

export default App;
