import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import { requests } from "../../utils/requests";
import { useDispatch } from "react-redux";
import {Link} from 'react-router-dom';
import {
  logOutSuccess,
  signInSuccess,
} from "../../store/modules/auth/auth.action";
import { useSelector } from "react-redux";
export default function Login() {
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const authToken = useSelector((state) => state.auth.token);
  useEffect(() => {
    if (authToken) {
      // dispatch(logOutSuccess({}));
      window.location.href = "/about";
    }
  }, []);
  function HandleChange(e) {
    const {name, value} = e.target;
    if (name === "email") {
      setemail(value);
    } else {
      setpassword(value);
    }
  }
  function HandleSubmit() {
    const credentials = {
      email: email,
      password: password,
    };
    async function doLogin() {
      const request = await axios.post(requests["doLogin"], credentials);
      console.log(request);
      return request;
    }
    doLogin()
      .then((res) => {
        console.log(res.data);
        const { authtoken: token, profile: userinfo } = res.data;
        dispatch(signInSuccess({ token, userinfo }));
        alert("Login Done");
        setemail("");
        setpassword("");
        window.location.href = "/about";
      })
      .catch((err) => {
        alert("Something Went Wrong");
        console.log(err);
        window.location.href = "/login";
      });
  }
  return (
    <div>
      
      <div className="signup-form">
        <form method="POST">
          <h2>Sign In</h2>
          <p>Please fill in this form to LOGIN!</p>
          <hr />
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <span className="fa fa-user" />
                </span>
              </div>
              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                onChange={HandleChange}
                placeholder="Email Adress"
                required="required"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-paper-plane" />
                </span>
              </div>
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={HandleChange}
                placeholder="Password"
                required="required"
              />
            </div>
          </div>

          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              onClick={HandleSubmit}
            >
              LOG IN
            </button>
          </div>
        </form>
        <div className="text-center">
          Don't have an account? <a href="/signup">create an account here</a>
        </div>
      </div>
    </div>
  );
}
