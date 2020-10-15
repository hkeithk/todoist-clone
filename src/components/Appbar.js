import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const Appbar = () => {
  return (
    <div>
      <AppBar position='static'>
        <FontAwesomeIcon icon={faBars} />
      </AppBar>
    </div>
  );
};

export default Appbar;
