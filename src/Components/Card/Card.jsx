import React from "react";
import './Card.css';

const Card=({emoji,heading,datail})=>
{
      return(
            <div className="card">
                  <img src={emoji}/>
                  <span>{heading}</span>
                  <span>{datail}</span>
                  <button className="c-button">Learn More</button>
            </div>
      )
}

export default Card