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
import Main from 'components/Main';
import Projects from 'components/Projects';
import clsx from 'clsx';
import { VscInbox } from 'react-icons/vsc';
import { AiOutlineCalendar } from 'react-icons/ai';
import { RiCalendar2Line } from 'react-icons/ri';
import { useSelectedProjectValue } from 'context';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: '20px',
  },
  paper: {
    background: '#363636',
    width: 300,
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
  const { setSelectedProject } = useSelectedProjectValue();
  const [active, setActive] = useState('inbox');
  const [selectedTab, setSelectedTab] = useState('inbox');
  const [showProjects, setShowProjects] = useState(true);

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
              <ListItemIcon color='inherit' fontSize='large' style={{ color: '#5297ff', fontSize: 20 }}>
                <VscInbox />
              </ListItemIcon>
              <ListItemText>Inbox</ListItemText>
            </ListItem>
            <ListItem
              button
              key={'today'}
              className={classes.button}
              onClick={() => handleTabChange('today')}
            >
              <ListItemIcon style={{ color: '#25b84c', fontSize: 20 }}>
                <AiOutlineCalendar />
              </ListItemIcon>
              <ListItemText>Today</ListItemText>
            </ListItem>
            <ListItem
              button
              key={'upcoming'}
              className={classes.button}
              onClick={() => handleTabChange('upcoming')}
            >
              <ListItemIcon style={{ color: '#a970ff', fontSize: 20 }}>
                <RiCalendar2Line />
              </ListItemIcon>
              <ListItemText>Upcoming</ListItemText>
            </ListItem>
          </List>
        </div>

        {/* ADD DROPDOWN AND PROJECTS COMPONENT HERE */}
        <div>{/* <Projects /> */}</div>
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
