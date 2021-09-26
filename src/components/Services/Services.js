import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {  faVideo,faDatabase} from '@fortawesome/free-solid-svg-icons';
library.add(faVideo,faDatabase);




const Services=() =>{
return(
 <div className="services" id="services"> 
 <h1> services </h1>
   <p className="sub-heading">we offer many awesome and secured services some of them are here:</p>
   <div className="services-cards">
   <div className="cards">s
   <FontAwesomeIcon icon="video"/>

  
<h1>Jobs and carrer</h1>
<p> There is diverse opportunity in the citykart as a manger,deliveryboy,system mintainance you can opt for any job.</p>


   </div>
   
   <div className="cards">
   
< div className="font">
<FontAwesomeIcon icon="video"/>
</div>


<h1>customer care</h1>
<p> There is diverse opportunity in the citykart as a manger,deliveryboy,system mintainance you can opt for any job.</p>
</div>
 <div className="cards">
 <FontAwesomeIcon icon="video"/>
 
<h1>sale with us</h1>
<p> There is diverse opportunity in the citykart as a manger,deliveryboy,system mintainance you can opt for any job.</p>
</div>

        
     
   </div>  
  </div>
    )
}
export default Services;