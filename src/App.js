import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Notfound from './components/Notfound';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AddUser from './components/AddUser';
import Edituser from './components/Edituser';
import User from './components/User';

function App() {
  return (
   <Router>
      <div className="App">
      <Navbar />
      <Switch>
         <Route exact path="/" component={Home}></Route>
         <Route exact path="/About" component={About}></Route>
         <Route exact path="/Contact" component={Contact}></Route>
         <Route exact path="/AddUser" component={AddUser}></Route>
         <Route exact path="/Edituser/:id" component={Edituser}></Route>
         <Route exact path="/User/:id" component={User}></Route>
         <Route component={Notfound}></Route>
        
        </Switch>
     
    </div>
   </Router>
  );
}

export



default App;
