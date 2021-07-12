import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Card from "./Card";
import "./Grid.css";
import React, { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import axios from "../../utils/axios";
import axios1 from "axios";
import {requests} from "../../utils/requests";
import { Link } from 'react-router-dom';
import {

  signInSuccess,
} from "../../store/modules/auth/auth.action";
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
  //const classes = useStyles();
  const dispatch=useDispatch();

  const token = useSelector((state) => state.auth.token);
  const [fetchdata,setfetchdata]=useState("");
    const getdata=async()=>{
      try{
        const resp=await axios1.get(requests["getData"]);
        console.log(resp);
         setfetchdata(resp.data);    
      }
      catch(err){
        setfetchdata({});
        console.log(err);
      }
    }

    useEffect(() => {
        if (!token) {
          // dispatch(logOutSuccess({}));
          window.location.href = "/login";
        }
        getdata();
        
            }, []);
    
      function handleSubscribe() {
        async function doSubscribe() {
          const request = await axios.put(requests["subscribe"]);
          console.log(request);
          return request;
        }
        doSubscribe()
          .then((res) => {
            console.log(res.data);
            const {profile: userinfo } = res.data;
            dispatch(signInSuccess({ token, userinfo }));
            alert("Done");
           
          
          })
          .catch((err) => {
            alert("Something Went Wrong");
            console.log(err);
            window.location.href = "/";
          });
      }



      

      if (fetchdata===""){
        return <div></div>;
      }
      console.log(fetchdata);
    
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
            <h2>{fetchdata.tested[fetchdata.tested.length-1]['totaldosesadministered']}</h2>
           </div>
        </div>
      </div>
      <div className="col-lg-6 mbr-col-md-10">
        <div className="wrap">
          <div className="text-wrap vcenter">
            <h6 class="mbr-fonts-style text1 mbr-text display-7">NEWS/ARTICLES</h6>
            <Link to="/NewsArticle"><h2>SHARE HERE</h2></Link>
           </div>
        </div>
      </div>
      <div className="col-lg-6 mbr-col-md-10">
        <div className="wrap">
          <div className="text-wrap vcenter">
            <h6 class="mbr-fonts-style text1 mbr-text display-7">NEED HELP</h6>
            <Link to="/help"><h2>SEARCH HERE</h2></Link>
           </div>
        </div>
      </div>
      <div className="col-lg-6 mbr-col-md-10">
        <div className="wrap">
          <div className="text-wrap vcenter">
            <h6 class="mbr-fonts-style text1 mbr-text display-7">SUBSCRIBE TO OUR NEWS LETTER</h6>
            <h2 onClick={handleSubscribe}>SUBSCRIBE HERE</h2>
           </div>
        </div>
      </div>
      <div className="col-lg-6 mbr-col-md-10">
        <div className="wrap">
          <div className="text-wrap vcenter">
          <h6 class="mbr-fonts-style text1 mbr-text display-7">WANNA A KNOW SOMETHING</h6>
            <Link to="/contact"><h2>CONTACT HERE</h2></Link>
            <h6> </h6>
           </div>
        </div>
      </div>
    </div>
  </div>
</section>



    
    
  );
}