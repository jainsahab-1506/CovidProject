import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/Grid";
import Home from "./components/Home/Home.js";
import Footer from "./components/Footer/Footer"
import Contact from "./components/Contact/contact"
import Login from "./components/Authorisation/Login"
import Signup from "./components/Authorisation/Signup"
import ErrorPage from "./components/Error/Error"
import StatePage from "./components/StateData/StatePage"
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
import './index.css';
function App() {
  return (
    <div>
      
      <Router>
      <Navbar/>
    <Switch>
    
    <Route  exact path='/'>
      <Home/>
    </Route>
    
    
     <Route  exact path='/about'>
      <About />
    </Route>  
    <Route  exact path='/contact'>
      <Contact />
    </Route>
    <Route  exact path='/login'>
      <Login />
    </Route>
    
    <Route exact path='/signup'>
      <Signup />
    </Route>
    <Route exact path='/statepage'>
      <StatePage />
    </Route>
    <Route >
      <ErrorPage/>
      </Route>
    </Switch>

    </Router>
    
    </div>
  );
}

export default App;
