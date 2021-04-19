import React from 'react';
// import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
    // <Router>
    <AppBar position="static">
      <Toolbar>

        <Typography variant="h5" className={classes.title}>
          Quiz App
          </Typography>
        {/* <Route path="/login"> */}
        <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
          <Button color="inherit" variant="outlined" className={classes.menuButton}>Login</Button>
          {/* </Route> */}
        </NavLink>
        <Button className={classes.menuButtonContained} variant="contained" color="secondary">
          <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/registration">
            Sign Up
              </NavLink>
        </Button>
        {/* <Switch>
          </Switch> */}
      </Toolbar>
    </AppBar>
    // </Router>
  );
}