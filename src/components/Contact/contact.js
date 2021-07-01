import React,{useState} from 'react'
import axios from "../../utils/axios.js";
import { requests } from "../../utils/requests";
import { useDispatch } from 'react-redux';
export default function Contact() {
  const [name,setname]= useState("");
  const [phone,setphone]= useState("");
  const [email,setemail]= useState("");
  const [message,setmessage]= useState("");
  const handleChange = (e) =>{
    const {name,value}=e.target;
    if(name==="name"){
       setname(value)
    }
    else if(name==="email"){
      setemail(value)
    }
    else if(name==="phone"){
      setphone(value)
    }
    else{
      setmessage(value)
    }
  }
  const handleSubmit = async (e) =>{
    try{

      e.preventDefault();
      const senddata={
        name,
        email,
        message,
        phone
      }
      console.log(senddata);
      const res = await axios.post(requests["addContact"],senddata);
      alert("Successfully added");
      window.location.href="/";
    }
    catch(err)
    {
      console.log(err);
      alert('Something went Wrong')
      window.location.href="/";
    }
  }
    return (
            
        <div className="contact container-xl pt-=md-5" style={{backgroundColor:"#179b81"}}>
<div className="row">
<div className="col-md-8 " >
  <div className="contact-form" style={{paddingTop:"100px"}}>
    <h1>Contact Us</h1>
    <p className="hint-text">We'd love to hear from you, please drop us a line if you've any query.</p>
    <form  method="post">
      <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="inputFirstName">First Name</label>
            <input type="text" className="form-control" id="name" name="name" value={name} onChange={handleChange} required />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="phone">phone</label>
            <input type="tel" className="form-control" id="phone"  name="phone" value={phone} onChange={handleChange} required />
          </div>
        </div>
      </div>            
      <div className="form-group">
        <label htmlFor="inputEmail">Email Address</label>
        <input type="email" className="form-control" id="email" name="email" value={email} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="inputMessage">Message</label>
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
