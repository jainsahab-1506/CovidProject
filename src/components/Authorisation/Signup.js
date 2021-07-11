import React,{useState}from 'react'
import axios from "../../utils/axios.js";
import { requests } from "../../utils/requests";
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import {
  signInSuccess,
} from "../../store/modules/auth/auth.action";

export default function Signup() {
  const dispatch=useDispatch();
  const [username,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [phone,setPhone]=useState("");
  function HandleChange(e){
    console.log(e);
    const {name,value}=e.target;
        if(name==="name"){
           setName(value)
        }
        else if(name==="email"){
          setEmail(value)
        }
        else if(name==="password"){
          setPassword(value)
        }
        else{
          setPhone(value)
        }

  }
  function HandleSubmit(e){
   e.preventDefault();
   const senddata={
     username,
     email,
     password,
     phone
   }
   console.log(senddata);
   async function doSignup(){
     const request=await axios.post(requests["doRegister"],senddata);
     return request;
   }
   doSignup()
   .then((res)=>{
     console.log(res.data);
     alert("Successfully Registered");
     const {authToken:token,profile:userinfo}=res.data;
     dispatch(signInSuccess({token,userinfo}));
     setName("")
     setEmail("")
     setPassword("")
     setPhone("")
     window.location.href="/login";
     
   })
   .catch((err)=>{
     console.log(err);
     alert('Something went Wrong')
     window.location.href="/signup";
   })
  }
    return (
      <div className="signup-form">
       <form>
     <h2>Sign Up</h2>
     <p>Please fill in this form to create an account!</p>
     <hr />
     <div className="form-group">
       <div className="input-group">
         <div className="input-group-prepend">
           <span className="input-group-text">
             <span className="fa fa-user" />
           </span>                    
         </div>
         <input type="text" className="form-control" name="name" value={username} onChange={HandleChange} placeholder="name" required="required" />
        
       </div>
     </div>
     <div className="form-group">
       <div className="input-group">
         <div className="input-group-prepend">
           <span className="input-group-text">
             <i className="fa fa-paper-plane" />
           </span>                    
         </div>
         <input type="email" className="form-control" name="email" value={email} onChange={HandleChange}  placeholder="Email Address" 
        
         required="required" />
       </div>
     </div>
     <div className="form-group">
       <div className="input-group">
         <div className="input-group-prepend">
           <span className="input-group-text">
             <i className="fa fa-paper-plane" />
           </span>                    
         </div>
         <input type="tel" className="form-control" name="phone" value={phone} onChange={HandleChange}  placeholder="phone" 
        
         required="required" />
       </div>
     </div>
    

    
    <div className="form-group">
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-lock" />
          </span>                    
        </div>
        <input type="password" className="form-control" name="password" value={password} onChange={HandleChange}  placeholder="Password" 
        
        required="required" />
      </div>
    </div>
    
    

     <div className="form-group">
       <button type="submit" 
       className="btn btn-primary btn-lg" onClick={HandleSubmit}>Sign Up</button>
     </div>
   </form>
   <div className="text-center">Already have an account? <Link to="/login">log in</Link></div>
           </div>
        
    )
}
