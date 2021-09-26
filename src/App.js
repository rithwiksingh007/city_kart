import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar.js";
import Banner from './components/Banner/Banner.js';
import Services from './components/Services/Services.js';
import Product from '../src/components/products/Product.js';
import Signup from './components/Signup/Signup.js';
import Contacts from './components/Contact/Contacts.js'



import {BrowserRouter as Router, Switch,Route} from "react-router-dom";

function App() {
  return (
    <Router>
    
    <div className="App">
    <Navbar/>
    <Switch>
      <Route path="/" exact component={Banner}/>
      <Route path="/services" exact component={Services}/>
      <Route path="/Product" exact component={Product}/>
      <Route path="/Signup" exact component={Signup}/>
      <Route path="/Contacts" exact component={Contacts}/>
     


    </Switch>
     
  
    
      
        

        
        
      </div>
      </Router>
    
  );
}





    

export default App;
