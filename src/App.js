import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/Grid";
import Home from "./components/Home/Home.js";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/contact";
import Login from "./components/Authorisation/Login";
import Signup from "./components/Authorisation/Signup";
import ErrorPage from "./components/Error/Error";
import StatePage from "./components/StateData/StatePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewsArticle from "./components/NewsArticle/NewsArticle";
import Post from "./components/NewsArticle/post";
import Help from "./components/Help/MainHelp";
import FinancePost from "./components/Help/FinanceHelp/FinancePost";
import FinanceHelp from "./components/Help/FinanceHelp/FinanceHelp.js";
import MedicalPost from "./components/Help/MedicalHelp/MedicalPost";
import MedicalHelp from "./components/Help/MedicalHelp/MedicalHelp.js";
import MentalPost from "./components/Help/MentalHelp/MentalPost";
import MentalHelp from "./components/Help/MentalHelp/MentalHelp.js";
import "./index.css";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>
          
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/post/:id?">
            <Post />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/NewsArticle">
            <NewsArticle />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/statepage">
            <StatePage />
          </Route>
          <Route exact path="/help">
            <Help />
          </Route>
          <Route exact path="/FinanceHelp">
            <FinanceHelp />
          </Route>
          <Route exact path="/FinancePost">
            <FinancePost />
          </Route>
          <Route exact path="/MedicalHelp">
            <MedicalHelp />
          </Route>
          <Route exact path="/MentalHelp">
            <MentalHelp />
          </Route>
          <Route exact path="/MedicalPost">
            <MedicalPost />
          </Route>
          <Route exact path="/MentalPost">
            <MentalPost />
          </Route>

          <Route>
            <ErrorPage />
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
