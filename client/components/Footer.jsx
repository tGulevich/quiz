import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => {
  return {
    footer: {
      background: theme.palette.primary.main,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    ghWrap: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    ghImage: {
      height: '25px',
      width: 'auto',
    },
    ghLink: {
      color: '#fff',
      paddingTop: '5px'
    }
  }
});

export default function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.footer} component="footer" p={2}>
      <Typography color="textSecondary">&copy; 2021 Footer Widget. All Rights Reserved.</Typography>
      <Box className={classes.ghWrap}>
        <img className={classes.ghImage} src='../github.png' />
        <Link className={classes.ghLink} underline='hover' href='https://github.com/tGulevich'>@tGulevich</Link>
      </Box>
    </Box>
  );

}