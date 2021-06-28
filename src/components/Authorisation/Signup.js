import React from 'react'

export default function Signup() {
    return (
        <div>
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
        <input type="text" className="form-control" name="name"  placeholder="name" required="required" />
        
      </div>
    </div>
    <div className="form-group">
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-paper-plane" />
          </span>                    
        </div>
        <input type="email" className="form-control" name="email" placeholder="Email Address" 
        
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
        <input type="tel" className="form-control" name="phone" placeholder="phone" 
        
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
        <input type="work" className="form-control" name="work" placeholder="work" 
        
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
        <input type="text" className="form-control" name="password" placeholder="Password" 
        
        required="required" />
      </div>
    </div>
    <div className="form-group">
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-lock" />
            <i className="fa fa-check" />
          </span>                    
        </div>
        <input type="text" className="form-control" name="cpassword" placeholder="CPassword" 
        
        required="required" />
      </div>
    </div>
    

    <div className="form-group form-button">
      <input type="submit" name="signup" id="signup" value="register" className="btn btn-primary btn-lg"  />
    </div>
  </form>
  <div className="text-center">Already have an account? <a href="/login">Login here</a></div>
</div>
        </div>
    )
}
