import React from 'react';
import './style/Signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {  faUser, faEnvelope, faMobile} from '@fortawesome/free-solid-svg-icons';
library.add(faUser,faEnvelope,faMobile);
const Signup=() =>{
    return(
        
    < section className="signup">
    <div className="container mt-5">
    <div className="signup-content">
    <div className="signup-form">
    <h2 className="form-title "> signup </h2>
   

 <form className="register-form" id="reister-form">
    <div className="form-group">
    
    
    <label for="user"><b>Name  </b>
    </label>
    <FontAwesomeIcon icon="user"/>
    <input type="text"name="name" className="userName" id="name" autoComplete="off"
    placeholder="your name"
    />
    </div>
    <div className="form-group">
    
    
    
    <label for="email"><b>{`Email `}</b>
    
    </label>
    <FontAwesomeIcon icon="envelope"/>

    
    <input type="text"name="email" className="userEmail" id="email" autoComplete="off" 
    placeholder="your name"
    />
    </div>
    <div className="form-group">
    
    
    <label for="mobile"><b>{`Mobile `}</b></label>
    <FontAwesomeIcon icon="mobile"/>
    <input type="numbers"name="mobile" className="userMobile" id="mobile" autoComplete="off"
    placeholder="your mobile no."
    />
    </div>
    <div className="form-group form-button">
       <input type="register" nmae="signup" id="signup" className="register"
       value="Register"
       />
    </div>



    </form>
    
    
    
    
    </div>
 </div>
 </div>
    </section>
    
    )
}
export default Signup;