import React,{useState} from 'react'
import axios from "../../../utils/axios";
import { requests } from "../../../utils/requests";
import { useDispatch,useSelector} from 'react-redux';
export default function Contact() {
   const dispatch=useDispatch();
   const profile = useSelector(state => state.auth.userinfo);
  const [message,setmessage]= useState("");
  const handleChange = (e) =>{
    const {name,value}=e.target;
    setmessage(value);
  }
  const handleSubmit = async (e) =>{
    try{

      e.preventDefault();    
           
      const res = await axios.post(requests["CreateFinancePost"],{message:message});
      console.log(res.data);
      alert("Successfully added");
      window.location.href="/FinanceHelp";
    }
    catch(err)
    {
      console.log(err);
      alert('Something went Wrong')
      window.location.href="/FinancePost";
    }
  }
    return (
            
<div className="contact container-xl pt-=md-5" style={{backgroundColor:"#179b81"}}>
<div className="row">
<div className="col-md-8 " >
  <div className="contact-form" style={{paddingTop:"100px"}}>
    <h1>SHARE WITH OTHERS</h1>
    <p className="hint-text">SHARE EXPERIENCE ,NEWS,ARTICLE HERE</p>
    <form  method="post">
      <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="inputFirstName">Name</label>
            <input type="text" className="form-control" id="name" name="name" value={profile.username}  required />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" className="form-control" id="phone"  name="phone" value={profile.phone}  required />
          </div>
        </div>
      </div>            
      <div className="form-group">
        <label htmlFor="inputEmail">Email Address</label>
        <input type="email" className="form-control" id="email" name="email" value={profile.email} required />
      </div>
      <div className="form-group">
        <label htmlFor="inputMessage">BLOG</label>
        <textarea className="form-control" id="message" rows={5} name="message" value={message} onChange={handleChange} required defaultValue={""} />
      </div>
      <input type="submit" className="btn btn-primary" onClick={handleSubmit} defaultValue="Submit" />
    </form>
  </div>
</div>
</div>
</div>

    )
}
