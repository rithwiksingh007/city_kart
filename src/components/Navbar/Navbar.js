import React from 'react';
import { MenuItems } from "./MenuItems";
import './Navbar.css';
import {Link} from 'react-router-dom';

class Navbar extends React.Component{
    
        state = { clicked: false}
        
        handleClick = () => {
            this.setState({ clicked: true })
        }
        
         render() {
            return (
                <nav className="NavbarItems">
                    <h1 className="navbar-logo">Citykart</h1><div className='menu-icon' onClick={this.handleClick}>
                    
        
                    
                    
                    </div>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    
  
            
          {MenuItems.map((item,index) =>{

              return(
                <li key={index} >
                {/* <a className={item.cName}> */}
                
                <Link className={item.cName} to={`${item.url}`}>{item.title}</Link>
                {/* </a> */}
                </li>

              )
          }
          )
          } 
</ul>        
            </nav>
        )
    }
}
export default Navbar         
                

                
         