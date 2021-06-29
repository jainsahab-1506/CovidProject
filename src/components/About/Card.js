import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'

function Card({link,title}) {
    
const useStyles = makeStyles((theme) => ({
    container:{
        backgroundColor:"green",
        height:"250px",
        width:"250px",
        padding:"100px 100px 100px 100px",
        fontsize:"100px",
        margin:"10px",

    },
    
  }));
  const classes = useStyles();
    return (
        <Container style={{fontsize:"100000px"}} className={classes.container}>{title}</Container>
    )
}

export default Card
