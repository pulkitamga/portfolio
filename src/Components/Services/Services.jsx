import React from "react";
import Card from "../Card/Card.jsx";
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import './Services.css';

const Services=()=>
{
      return(
      <div className="services">
            {/*left side */}
            <div className="awesome">
                  <span>My Awesome</span>
                  <span>Services</span>
                  <span>Lorem ispum is simply dummy text of printing
                        <br/>
                     simply dummy text of printing </span>
                        <button className="button s-button">
                              Downlaod Cv
                        </button>
                        <div className="blur s-blur" style={{background:'#ABF1FF94'}}></div>
            </div>
            {/*right side */}
            <div className="cards">
                  <div style={{left:'14rem'}}>
                        <Card emoji={HeartEmoji}
                         heading={'Design'}
                         datail={'Figma,Sketch,Photoshop,Adobe'} />
                   </div>
                        {/*second card*/}
                  <div style={{top:'12rem',left:'-4rem'}}>
                              <Card 
                              emoji={Glasses}
                              heading={'Developer'}
                         datail={'Html,Css,Photoshop,Adobe'}
                              />
                  </div>
                              {/*third card*/}
                  <div style={{top:'19rem',left:'12rem'}}>
                              <Card 
                              emoji={Humble}
                              heading={'Developer'}
                         datail={'Html,Css,Photoshop,Adobe'}
                              />   
                  </div>
                        

            </div>
      </div>
      )

}

export default Services