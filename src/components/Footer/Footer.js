import { makeStyles, StylesProvider } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
<<<<<<< Updated upstream
  footer: {
    backgroundColor: "black",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div>
      <footer
        className={classes.footer}
        style={{
          "margin-top": ".2em",
          "margin-right": "1em",
          "margin-left": "1em",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h5>
                <i className="fa fa-road" /> Eshaan Gupta
              </h5>
              <div className="row">
                <div className="col-6">
                  <ul className="list-unstyled">
                    <li>
                      <a href="index.html">HOME</a>
                    </li>
                    <li>
                      <a href="#about">ABOUT</a>
                    </li>
                    <li>
                      <a href="#fake">Facts</a>
                    </li>
                    <li>
                      <a href="#sym">SYMPTOMS</a>
                    </li>
                  </ul>
                </div>
              </div>
              <ul className="nav">
                <li className="nav-item">
                  <a
                    href="https://www.facebook.com/eshaan.gupta.90"
                    className="nav-link pl-0"
                  >
                    <i className="fa fa-facebook fa-lg" />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://www.facebook.com/eshaan.gupta.90"
                    className="nav-link"
                  >
                    <i className="fa fa-twitter fa-lg" />
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://github.com/fantasy-08" className="nav-link">
                    <i className="fa fa-github fa-lg" />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://www.instagram.com/eshaan08/"
                    className="nav-link"
                  >
                    <i className="fa fa-instagram fa-lg" />
                  </a>
                </li>
              </ul>
              <br />
            </div>
            <div className="col-md-2">
              <h5 className="text-md-right" style={{ "margin-top": ".7em" }}>
                Contact Us
              </h5>
              <hr />
            </div>
            <div className="col-md-5">
              <form>
                <fieldset className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter email"
                  />
                </fieldset>
                <fieldset className="form-group text-xs-right">
                  <button
                    type="button"
                    className="btn btn-secondary-outline btn-lg"
                    style={{ "margin-left": ".5em" }}
                  >
                    Send
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </footer>
=======
  footer:{
      backgroundColor:"black",
  }
}));

export default function AutoGrid() {
    const classes=useStyles();
  return (
    <div >
<footer className={classes.footer} style={{marginTop: '.2em', marginRight: '1em', marginLeft: '1em'}}>
  <div className="container">
    <div className="row">
      <div className="col-md-5">
        <h5><i className="fa fa-road" /> covid web app</h5>
        <div className="row">
          <div className="col-6">
            <ul className="list-unstyled">
              <li><a href="index.html">HOME</a></li>
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#fake">Facts</a></li>
              <li><a href="#sym">SYMPTOMS</a></li>
            </ul>
          </div>
        </div>
        <ul className="nav">
          <li className="nav-item"><a href="https://www.facebook.com/eshaan.gupta.90" className="nav-link pl-0"><i className="fa fa-facebook fa-lg" /></a></li>
          <li className="nav-item"><a href="https://www.facebook.com/eshaan.gupta.90" className="nav-link"><i className="fa fa-twitter fa-lg" /></a></li>
          <li className="nav-item"><a href="https://github.com/fantasy-08" className="nav-link"><i className="fa fa-github fa-lg" /></a></li>
          <li className="nav-item"><a href="https://www.instagram.com/eshaan08/" className="nav-link"><i className="fa fa-instagram fa-lg" /></a></li>
        </ul>
        <br />
      </div>
      <div className="col-md-2">
        <h5 className="text-md-right" style={{marginTop: '.7em'}}>Contact Us</h5>
        <hr />
      </div>
      <div className="col-md-5">
        <form>
          <fieldset className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
          </fieldset>
          <fieldset className="form-group text-xs-right">
            <button type="button" className="btn btn-secondary-outline btn-lg" style={{marginLeft: '.5em'}}>Send</button>
          </fieldset>
        </form>
      </div>
>>>>>>> Stashed changes
    </div>
  </div>
</footer>
</div>
  );
}
