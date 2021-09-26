import React from 'react';
import './styles/Contacts.css';

const Contacts=() =>{
    return(

        < section className="contactus">
        <h1>Contactus</h1>
        
        <div class="row">
        
        <div class="column">
        <form action="/action_page.php">
       
        <label for="fname">First Name</label>
        <input type="text" id="fname" className="fname" name="firstname" placeholder="Your name.."/>
        <label for="lname">Last Name</label>
        <input type="text" id="lname" className="lname" name="lastname" placeholder="Your last name.."/>
        <label for="country">Country</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
        <label for="subject">Subject</label>
        <textarea id="subject" className="textarea_sub" name="subject" placeholder="Write something.." ></textarea>
        <input type="submit" value="Submit"/>
        </form>
      
    </div>
    </div>
    </section>
        
    )
}
export default Contacts;