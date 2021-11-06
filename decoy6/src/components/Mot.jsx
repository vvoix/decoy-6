import React from 'react';
import './Mot.css';

const Mot = (props) => {
  return props.mot.length < 7 ? (
    <div className="motp">
      <h3>{props.mot}</h3>
    </div>
  ) : props.mot.length < 11 ? (
    <div className="motn">
      <h4>{props.mot}</h4>
    </div>
  ) : (
    <div className="motg">
      <h5>{props.mot}</h5>
    </div>
  );
};

export default Mot;
