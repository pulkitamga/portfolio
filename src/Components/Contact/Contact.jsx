import React from "react";
import "./Contact.css";
const Contact= () =>
{
      return(
            <div className="contact-form">
            <div className="w-left">
                  <div className="awesome">
                  <span>Get in Touch</span>
                   <span>Contact Me</span>
                   <div className="blur s-blur1"
                  style={{background:"#ABF1FF94"}}>

                  </div>
                  </div>
             
            
            </div>
            {/*right side*/}
            <div className="c-right">
                  <form>
                        <input type="text" name="user_name"
                        className="user" placeholder="Name"
                        />
                        <input type="email" name="user_email"
                        placeholder="Email" className="user"/>
                        <textarea name="message" placeholder="Message"
                        className="user" />
                        <input type="submit" className="button"
                        value="Submit" />
                  </form>
                  </div>
            </div>
      )
}
export default Contact;