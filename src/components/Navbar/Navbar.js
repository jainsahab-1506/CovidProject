import React from 'react';
import { makeStyles, responsiveFontSizes } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  arpan:{
    margin:"10px",
    fontSize:"15px",
  }
  
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense"  >
          <Typography class={classes.arpan} variant="h6" color="inherit" >
            HOME |
          </Typography>
          <Typography class={classes.arpan} variant="h6" color="inherit" >
              CASES |
          </Typography>
          <Typography class={classes.arpan} variant="h6" color="inherit" >
              VACCINE |
          </Typography>
          <Typography class={classes.arpan} variant="h6" color="inherit">
              REVEIW
          </Typography>

          
        </Toolbar>
      </AppBar>
      
    </div>
  );
}
