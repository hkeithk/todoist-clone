import React from 'react';

export const Sidebar = () => {
  return (
    <div className='sidebar' data-testid='sidebar'>
      <section>
        <button>Inbox</button>
        <button>Today</button>
        <button>Upcoming</button>
      </section>
    </div>
  );
};

export default Sidebar;
