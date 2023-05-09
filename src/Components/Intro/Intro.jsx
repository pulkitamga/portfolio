import React from "react";
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Boy from '../../img/boy.png';
import Thumup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from "../FloatingDev/FloatingDev";

const Intro=()=>
{
      return(
            <div className="intro">
                  <div className="i-left">
                  <div className="i-name">
                        <span>Hy! I am</span>
                        <span>Pulkit Amga</span>
                        <span>Frontend 
                              Developer with high level of
                              experience in web designing and development, producting the Quality work
                        </span>
                  </div>
                  <button className="button i-button">Hire me</button>
                        <div className="i-icons">
                              <img src={Github} alt=""/>
                              <img src={LinkedIn} alt=""/>
                              <img src={Instagram} alt=""/>
                              
                        </div>
                  
                  </div>
                 <div className="i-right">
                  <img src={Vector1}></img>
                  <img src={Vector2}></img>
                  
                  <img src={Boy}></img>
                  <img src={glassesimoji}></img>
                  <div style={{top:'-4%', left:'68%'}}>
                        <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
                        </div>
                        <div style={{top:'18rem',left:'0rem'}}>
                        <FloatingDiv image={Thumup} txt1='Best Design' txt2='Award'/>     
                              </div>
                         {/*Blur div */}
                         <div className="blur" style={{background:"rgb(238 210 255)"}}></div>  
                         <div className="blur" style={{
                              background:'#C1F5FF',top:'17rem',
                              width:'21rem',height:'11rem',left:'-9rem'

                         }}></div>   
                               </div>
                  
            </div>
      );
}
export default Intro;