import { makeStyles, StylesProvider } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  footer:{
      backgroundColor:"Green",
      margin:"100px",
  }
}));

export default function AutoGrid() {
    const classes=useStyles();
  return (
    <div >
<footer>
  <div className="container-fluid" style={{paddingLeft:"500px"}}>
      <p >© Copyright COVID APP ,INDIA</p>
  </div>
</footer>
</div>
  );
}
