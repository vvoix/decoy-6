import React from 'react';
import './Mot.css';

const Mot = (props) => {
  const s = () => {
    return props.clique ? 'c' : '';
  };
  const t = () => {
    return props.mot.length < 7 ? 'p' : props.mot.length < 11 ? 'n' : 'g';
  };
  const st = 'mot' + t() + s();
  return <div className={st}>{props.mot}</div>;
};

export default Mot;
