import React from "react";

import "./Sushifilter.scss";

const Sushifilter = (props) => {
  console.log(props)
  const dropwdownChangeHandler = (event) => {
      props.onChangefilter(event.target.value);

  };


  return (
    <div className="sushi-filter">
      <div className="sushi-filter__control">
        {/* <label>Choose your type</label> */}
        <select onChange={dropwdownChangeHandler}>
          <option value="როლი">როლი</option>
          <option value="მაკი">მაკი</option>
          <option value="ნიგირი">ნიგირი</option>
          <option value="გუნკანი">გუნკანი</option>
          <option value="სხვა">სხვა</option>
          <option value="სეტები">სეტები</option>
          <option value="სასმელები">სასმელი</option>
        </select>
      </div>
    </div>
  );
};

export default Sushifilter;
