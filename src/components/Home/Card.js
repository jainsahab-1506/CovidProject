import { Container } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import React from 'react'

function Card({link,title}) {
    
const useStyles = makeStyles((theme) => ({
    container:{
        backgroundColor:"grey",
        height:"250px",
        width:"250px",
        textAlign: 'center',
    }
  }));
  const classes = useStyles();
    return (
        <Container className={classes.container}>{title}</Container>
    )
}

export default Card
