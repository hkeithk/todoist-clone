import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, InputBase, makeStyles, fade } from '@material-ui/core';
import 'components/Appbar.css';
import Sidebar from 'components/Sidebar';
import { VscHome } from 'react-icons/vsc';
import { AiOutlineMenu, AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';
import { RiSearchLine } from 'react-icons/ri';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    zIndex: theme.zIndex.drawer + 1,
  },
  search: {
    position: 'relative',
    backgroundColor: fade(theme.palette.secondary.light, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.secondary.light, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export const Appbar = () => {
  const classes = useStyles();
  const [sideBarOpen, setSideBarOpen] = useState(true);

  const handleSideBar = () => {
    setSideBarOpen(!sideBarOpen);
  };

  return (
    <>
      <AppBar position='static' className={classes.root}>
        <Toolbar color='primary' className={classes.root}>
          <IconButton edge='start' color='inherit' onClick={handleSideBar}>
            <AiOutlineMenu />
          </IconButton>
          <IconButton color='inherit'>
            <VscHome />
          </IconButton>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <AiOutlineSearch />
            </div>
            <InputBase placeholder='Find' classes={{ root: classes.root, input: classes.inputInput }} />
          </div>
          <div className={classes.root} />

          <IconButton color='inherit' edge='end'>
            <AiOutlinePlus />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Sidebar open={sideBarOpen} />
    </>
  );
};

export default Appbar;
