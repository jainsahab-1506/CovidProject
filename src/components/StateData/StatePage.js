import React, { useState, useEffect } from "react";
import axios from "axios";
import {requests} from "../../utils/requests";
import StateData from "./StateData";

export default function StatePage() {
    const [fetchdata,setfetchdata]=useState("");
    const getdata=async()=>{
      try{
        const resp=await axios.get(requests["getData"]);
         setfetchdata(resp.data);    
      }
      catch(err){
        console.log(err);
      }
    }
      useEffect(() => {
         getdata();
        }, []);
        if(fetchdata===""){
            return <div></div>
        }
        
    return (
        <div>
            <StateData
            statedata={fetchdata.statewise.filter((data,index)=>{if(index!==0 && data.state!=="State Unassigned")return true;})}
            />
        </div>
    )
}
