import React from 'react';
//import './Home.css';
import {Link} from 'react-router-dom';

export default function Home() {
    return (
        <div>
             <section>
        <div className="container p-0">
          <div className="row">
            <div className="col-lg-6">
              <div className="banner-left">
                <h1 className="text-capitalize">
                  Welcome to
                  <span className="text-uppercase"> COVID </span>
                  Application
                </h1>
                <div className="buttons">
                <Link
                    to="/login"
                    className="btn-primary btn btn-lg btn-outline border-3 btn-login"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="btn-primary btn btn-lg btn-outline border-3 btn-register"
                  >
                    Signup
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
        </div>
    )
}
