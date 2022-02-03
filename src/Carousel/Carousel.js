import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
// import Item from "./Item";
import "./Carousel.scss";
import sushiarray from "../Constants/Sushilist";
import Sushiitem from "../Sushilist/Sushiitem";
import Sushifilter from "../Sushifilter/Sushifilter"

const Karuseli=(props)=>{

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const [filteredType, setFilteredType] = useState('როლი');
const filterChangeHandler= (type)=>{
  setFilteredType(type);
}
const filteredsushi=sushiarray.filter(meal => {
  return meal.type === filteredType;
});
console.log(filteredType)
return (
    <section className="karusel-wrapper">
        
       
        <Sushifilter onChangefilter={filterChangeHandler} selected={filteredType}/>
      <div className="karuseli">
       

        <Carousel breakPoints={breakPoints}>
          {/* <Sushifilter onChangefilter={filterChangeHandler} selected={filteredType}/> */}
        {
         filteredsushi.map((meal)=>(
            <Sushiitem
              type={meal.type}
              saxeli={meal.saxeli}
              photo={meal.photo}
              ingredientebi={meal.ingredientebi}
              //Key makvs dasamatebeli
              />
         ))  }

            
       </Carousel>

          
          {/* <Item><h3>Two</h3></Item>
          <Item><h3>Three</h3></Item>
          <Item><h3>Four</h3></Item> 
          <Item><h3>Five</h3></Item>
          <Item><h3>Six</h3></Item>
          <Item><h3>Seven</h3></Item>
          <Item><h3>Eight</h3></Item> */}
       
      </div>
    {/* <Sushilist></Sushilist> */}
  </section>
        
  );
}
export default Karuseli;