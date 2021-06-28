import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Grid";
import Footer from "./components/Footer/Footer"
import Contact from "./components/Contact/contact"
import Login from "./components/Authorisation/Login"
import Signup from "./components/Authorisation/Signup"
import ErrorPage from "./components/Error/Error"
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
import './index.css';
function App() {
  return (
    <div>
      
      <Router>
      <Navbar/>
    <Switch>
    
    <Route   exact path='/' exactcomponent={Home}/>
    
{/*     
    <Route  path='/about'>
      <About />
    </Route> */}
    <Route  path='/contact'>
      <Contact />
    </Route>
    <Route  path='/login'>
      <Login />
    </Route>
    <Route path='/signup'>
      <Signup />
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
