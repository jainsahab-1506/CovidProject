import React from 'react'

export default function Contact() {
    return (
            
        <div className="container-xl pt-=md-5">
<div className="row">
<div className="col-md-8 " >
  <div className="contact-form" style={{paddingTop:"100px"}}>
    <h1>Contact Us</h1>
    <p className="hint-text">We'd love to hear from you, please drop us a line if you've any query.</p>
    <form action="/examples/actions/confirmation.php" method="post">
      <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="inputFirstName">First Name</label>
            <input type="text" className="form-control" id="inputFirstName" required />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="phone">phone</label>
            <input type="tel" className="form-control" id="phone" required />
          </div>
        </div>
      </div>            
      <div className="form-group">
        <label htmlFor="inputEmail">Email Address</label>
        <input type="email" className="form-control" id="inputEmail" required />
      </div>
      <div className="form-group">
        <label htmlFor="inputMessage">Message</label>
        <textarea className="form-control" id="inputMessage" rows={5} required defaultValue={""} />
      </div>
      <input type="submit" className="btn btn-primary" defaultValue="Submit" />
    </form>
  </div>
</div>
</div>
</div>

    )
}
