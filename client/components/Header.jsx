import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuButtonContained: {
    color: '#fff'
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          Quiz App
          </Typography>
        <Button color="inherit" variant="outlined" className={classes.menuButton}>Login</Button>
        <Button className={classes.menuButtonContained} variant="contained" color="secondary">Sign Up</Button>
      </Toolbar>
    </AppBar>
  );
}