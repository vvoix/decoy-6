import React from 'react';
import Mot from '../components/Mot';
import './Choix.css';

const Choix = (props) => {
  return (
    <div className="choix">
      <div class="d-flex justify-content-lg-between flex-wrap">
        <Mot mot={props.mots[0]} />
        <Mot mot={props.mots[1]} />
        <Mot mot={props.mots[2]} />
        <Mot mot={props.mots[3]} />
      </div>
      <br />
      <div class="d-flex justify-content-lg-between flex-wrap">
        <Mot mot={props.mots[4]} />
        <Mot mot={props.mots[5]} />
        <Mot mot={props.mots[6]} />
        <Mot mot={props.mots[7]} />
      </div>
    </div>
  );
};

export default Choix;
