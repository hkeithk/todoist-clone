import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: '20px',
  },
  paper: {
    background: '#363636',
    width: 350,
    marginTop: '64px',
  },
  drawer: {
    width: 500,
    flexShrink: 0,
  },
  drawerContainer: {
    overflow: 'auto',
  },
}));

export const Sidebar = (open) => {
  const classes = useStyles();

  return (
    <div className={classes.root} data-testid='sidebar'>
      <Drawer
        className={classes.drawer}
        classes={{ paper: classes.paper }}
        variant='persistent'
        anchor='left'
        open={open}
        color='primary'
      >
        {/* <Toolbar /> */}
        <div className={classes.drawerContainer}>
          <List color='primary'>
            <ListItem>
              <ListItemIcon></ListItemIcon>
              <ListItemText>Inbox</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon></ListItemIcon>
              <ListItemText>Today</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon></ListItemIcon>
              <ListItemText>Upcoming</ListItemText>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default Sidebar;
