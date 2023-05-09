import React from "react";
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';
import './Works.css';
const Works =()=>
{
      return(
            <div className="works">
                  <div className="work">
                        <span>All works with</span>
                        <span>Projects and Companies</span>
                        <span>Lorem ispum is simply dummy text of printing
                         simply dummy text of printing </span>
                         <button className="button w-button">Downlaod</button>
                  </div>
                 {/*right side */}
                 <div className="w-right">
                  <div className="w-mainCircle">
                        <div className="w-secCircle">
                              <img src={Upwork} alt=""/>
                        </div>
                        <div className="w-secCircle">
                              <img src={Fiverr} alt=""/>
                        </div>
                        <div className="w-secCircle">
                              <img src={Amazon} alt="" />
                        </div>
                        <div className="w-secCircle">
                              <img src={Shopify} alt="" />
                        </div>
                        <div className="w-secCircle">
                              <img src={Facebook} alt="" />
                        </div>
                  </div>
                  <div className="w-backCircle blueCircle"></div>
                  <div className="w-backCircle yellowCircle"></div>
                 </div>
            </div>
      );
};
export default Works;