import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  fade,
  CssBaseline,
} from '@material-ui/core';
import { faInbox, faCalendarAlt, faCalendarTimes } from '@fortawesome/free-solid-svg-icons';
import Main from 'components/Main';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

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
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -350,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export const Sidebar = (props) => {
  const classes = useStyles();

  const { open } = props;

  const [selectedTab, setSelectedTab] = useState('inbox');

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

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
            <ListItem
              button
              key={'inbox'}
              className={classes.button}
              onClick={() => handleTabChange('inbox')}
            >
              <ListItemIcon color='inherit'>
                <FontAwesomeIcon icon={faInbox} size='lg' />
              </ListItemIcon>
              <ListItemText>Inbox</ListItemText>
            </ListItem>
            <ListItem
              button
              key={'today'}
              className={classes.button}
              onClick={() => handleTabChange('today')}
            >
              <ListItemIcon>
                <FontAwesomeIcon icon={faCalendarTimes} size='lg' />
              </ListItemIcon>
              <ListItemText>Today</ListItemText>
            </ListItem>
            <ListItem
              button
              key={'upcoming'}
              className={classes.button}
              onClick={() => handleTabChange('upcoming')}
            >
              <ListItemIcon>
                <FontAwesomeIcon icon={faCalendarAlt} size='lg' />
              </ListItemIcon>
              <ListItemText>Upcoming</ListItemText>
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <CssBaseline />
        <Main tab={selectedTab} />
      </main>
    </div>
  );
};

export default Sidebar;
