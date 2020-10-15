import React from 'react';
import { AppBar, TextField, Toolbar, IconButton, InputBase, makeStyles, fade } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import 'components/Appbar.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
    // vertical padding + font size from searchIcon
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
  return (
    <div>
      <AppBar position='static' className={classes.root}>
        <Toolbar color='primary'>
          <IconButton edge='start' color='inherit'>
            <FontAwesomeIcon icon={faBars} size='lg' />
          </IconButton>
          <IconButton color='inherit'>
            <FontAwesomeIcon icon={faHome} size='lg' />
          </IconButton>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <InputBase placeholder='Find' classes={{ root: classes.root, input: classes.inputInput }} />
          </div>
          <div className={classes.root} />

          <IconButton color='inherit' edge='end'>
            <FontAwesomeIcon icon={faPlus} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Appbar;
