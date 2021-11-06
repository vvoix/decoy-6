import React from 'react';
import './Mot.css';

const Mot = (props) => {
  return (
    <div className="mot">
      <h3>{props.mot}</h3>
    </div>
  );
};

export default Mot;
