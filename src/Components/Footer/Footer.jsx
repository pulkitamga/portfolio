import React from "react";
import './Footer.css';
import Wave from '../../img/wave.png';
import InsatgarmIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer=()=>
{
      return(
            <div className="footer">
                 <img src={Wave} alt=""/>
                 <div className="f-content">
                 <span>&copy;2022 Portfolio.website</span>
                 <div className="f-icons">
                  <InsatgarmIcon/>
                  <FacebookIcon/>
                  <TwitterIcon/>
               
                 </div>
                 </div>
                 
                 
            </div>
      );
};
export default Footer;