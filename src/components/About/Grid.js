//import { makeStyles } from '@material-ui/core/styles';
//import Grid from '@material-ui/core/Grid';
//import Card from "./Card";
import "./Grid.css";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import {requests} from "../../utils/requests";
import { Link } from 'react-router-dom';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   container:{
//       backgroundColor:"grey",
//       height:"250px",
//       width:"250px",
//       textAlign: 'center',
//   },
//   Grid:{
//     padding:"20px",
//     margin:"10px 10px 10px 10px",
//   },
  

// }));

export default function AutoGrid() {
  //const classes = useStyles();


  const authToken = useSelector((state) => state.auth.token);
  const [fetchdata,setfetchdata]=useState("");
    useEffect(() => {
        if (!authToken) {
          // dispatch(logOutSuccess({}));
          window.location.href = "/login";
        }
        async function fetchData() {
          const request = await axios.get(requests["getData"]);
         
          return request;
        }
        fetchData()
        .then((res) => {
          setfetchdata(res.data);
        })
        .catch((e) => {
          setfetchdata({});
        });
    

        
      }, []);
    
      if (fetchdata===""){
        return <div></div>;
      }
    
  return (
<section>
  <div className="container">
    <div className="row mbr-justify-content-center">
      <div className="col-lg-6 mbr-col-md-10">
        <div className="wrap">
          <div className="text-wrap vcenter">
            <h6 class="mbr-fonts-style text1 mbr-text display-7">TOTAL CASES IN INDIA</h6>
            <Link to="/statepage"><h2>{fetchdata.statewise[0].confirmed}</h2></Link>
           </div>
        </div>
      </div>
      <div className="col-lg-6 mbr-col-md-10">
        <div className="wrap">
          <div className="text-wrap vcenter">
      
            <h6 class="mbr-fonts-style text1 mbr-text display-7">.......TOTAL VACCINATED.....</h6>
            <h2>{fetchdata.tested[fetchdata.tested.length-1]['registration18-45years']}</h2>
           </div>
        </div>
      </div>
      <div className="col-lg-6 mbr-col-md-10">
        <div className="wrap">
          <div className="text-wrap vcenter">
            <h6 class="mbr-fonts-style text1 mbr-text display-7">TOTAL CASES IN INDIA</h6>
            <Link to="/statepage"><h2>{fetchdata.statewise[0].confirmed}</h2></Link>
           </div>
        </div>
      </div>
      <div className="col-lg-6 mbr-col-md-10">
        <div className="wrap">
          <div className="text-wrap vcenter">
            <h6 class="mbr-fonts-style text1 mbr-text display-7">TOTAL CASES IN INDIA</h6>
            <Link to="/statepage"><h2>{fetchdata.statewise[0].confirmed}</h2></Link>
           </div>
        </div>
      </div>
      <div className="col-lg-6 mbr-col-md-10">
        <div className="wrap">
          <div className="text-wrap vcenter">
            <h6 class="mbr-fonts-style text1 mbr-text display-7">TOTAL CASES IN INDIA</h6>
            <Link to="/statepage"><h2>{fetchdata.statewise[0].confirmed}</h2></Link>
           </div>
        </div>
      </div>
      <div className="col-lg-6 mbr-col-md-10">
        <div className="wrap">
          <div className="text-wrap vcenter">
            <h6 class="mbr-fonts-style text1 mbr-text display-7">TOTAL CASES IN INDIA</h6>
            <Link to="/statepage"><h2>{fetchdata.statewise[0].confirmed}</h2></Link>
           </div>
        </div>
      </div>
    </div>
  </div>
</section>



    // <div className={classes.root} >
    //   <Grid   container spacing={2}>
    //     <Grid  item lg>
    //       {/* <h1 onClick={()=>console.log(fetchdata)}>India</h1> */}
    //    <Link to="/statepage"><Card  title={`India ${fetchdata.statewise[0].confirmed}`}/></Link>

    //     </Grid>
    //     <Grid  item lg>
    //         <Card title="raghav"/>
    //     </Grid>
    //     <Grid  item lg>
    //       <Card title="raghav"/>
    //     </Grid>
    //   </Grid>
    //   <Grid container spacing={2}>
    //     <Grid  item xs>
    //         <Card title={`Vaccination Above18 Years: ${fetchdata.tested[fetchdata.tested.length-1]['registration18-45years']} Above 45 Years:${fetchdata.tested[fetchdata.tested.length-1].registrationabove45years}`}/>
    //     </Grid>
    //     <Grid item xs>
    //         <Card title="raghav"/>
    //     </Grid>
    //     <Grid item xs>
    //         <Card title="raghav"/>
    //     </Grid>
    //   </Grid>
    
  );
}