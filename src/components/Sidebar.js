import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, fade } from '@material-ui/core';
import { faInbox, faCalendarAlt, faCalendarTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  button: {
    '&:hover': {
      backgroundColor: fade(theme.palette.secondary.light, 0.25),
    },
  },
}));

export const Sidebar = (props) => {
  const classes = useStyles();

  const { open } = props;

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
        <div className={classes.drawerContainer}>
          <List color='primary'>
            <ListItem button key={'inbox'} className={classes.button}>
              <ListItemIcon color='inherit'>
                <FontAwesomeIcon icon={faInbox} size='lg' />
              </ListItemIcon>
              <ListItemText>Inbox</ListItemText>
            </ListItem>
            <ListItem button key={'today'} className={classes.button}>
              <ListItemIcon>
                <FontAwesomeIcon icon={faCalendarTimes} size='lg' />
              </ListItemIcon>
              <ListItemText>Today</ListItemText>
            </ListItem>
            <ListItem button key={'upcoming'} className={classes.button}>
              <ListItemIcon>
                <FontAwesomeIcon icon={faCalendarAlt} size='lg' />
              </ListItemIcon>
              <ListItemText>Upcoming</ListItemText>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default Sidebar;
