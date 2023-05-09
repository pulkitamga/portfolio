import React from 'react';
import './Toggle.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const Toggle=()=>
{
      return(
            <div className="toggle">
                  <FacebookIcon/>
                  <TwitterIcon/>
                  <div className="t-button"></div>
            </div>
      
      )

}
export default Toggle;