import React from 'react';
import Inbox from 'components/Inbox';
import Today from 'components/Today';
import Upcoming from 'components/Upcoming';

export const Main = (props) => {
  const { tab } = props;

  switch (tab) {
    case 'inbox': {
      return <Inbox />;
    }
    case 'today': {
      return <Today />;
    }
    case 'upcoming': {
      return <Upcoming />;
    }
    default:
      return <Inbox />;
  }
};

export default Main;
