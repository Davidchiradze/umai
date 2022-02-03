import React from 'react';
import './Sushiitem.scss'

const Sushiitem = (props) => {
  return(
             <div className="yuti">
               <img src={props.photo} alt=''/>
                  <h3>{props.saxeli}</h3>
                  <p>{props.ingredientebi}</p>
            </div>
            
  )
};

export default Sushiitem;
