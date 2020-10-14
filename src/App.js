import React from 'react';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import Tasks from 'components/Tasks';

export const App = () => {
  return (
    <div className='App'>
      <section className='App-header'>
        <Sidebar />
        <Tasks />
      </section>
    </div>
  );
};

export default App;
