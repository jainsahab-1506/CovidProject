
import React from "react";
import {Link} from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import './Home.css';
export default function Home(){
  const token = useSelector((state) => state.auth.token);
    return(
    <div>
        <section >
        <div className="container p-0">
          <div className="row">
            <div className="col-lg-6">
              <div className="banner-left">
                <h1 className="text-capitalize">
                  Welcome to
                  <span className="text-uppercase"> COVID </span>
                  Application
                </h1>
                <br/>
                {
                  (!token)?
                <div className="buttons">
                  <Link
                    to="/login"
                    className="btn btn-primary btn-lg "
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className=" btn btn-primary btn-lg"
                  >
                    Signup
                  </Link>
                </div>:<div></div>
}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-right">
                <h1 className="text-capitalize">
                  <img style={{width:"400px"}}
                    src="https://media.xconomy.com/wordpress/wp-content/images/2020/06/11121209/planet-earth-as-a-coronavirus-or-sars-covid-cell-3d-rendering-or-picture-id1218821819.jpg"
                    alt="e"
                  />
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    )
} 