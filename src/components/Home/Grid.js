import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from "./Card";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container:{
      backgroundColor:"grey",
      height:"250px",
      width:"250px",
      textAlign: 'center',
  },
  Grid:{
    padding:"20px",
    margin:"10px 10px 10px 10px",
  },
  

}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{padding:"5%"}}>
      <Grid   container spacing={2}>
        <Grid  item lg>
          <Card  title="raghav"/>
        </Grid>
        <Grid  item lg>
            <Card title="raghav"/>
        </Grid>
        <Grid  item lg>
          <Card title="raghav"/>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid  item xs>
            <Card title="raghav"/>
        </Grid>
        <Grid item xs>
            <Card title="raghav"/>
        </Grid>
        <Grid item xs>
            <Card title="raghav"/>
        </Grid>
      </Grid>
    </div>
    
  );
}
