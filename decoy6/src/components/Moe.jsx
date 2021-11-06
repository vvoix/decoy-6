import Button from '@restart/ui/esm/Button';
import React from 'react';
import Mot from '../components/Mot';
import './Moe.css';

const Moe = () => {
  return (
    <div className="moe1">
      {' '}
      <Button>
        <Mot mot="craie" clique="true" />
      </Button>
      <Mot mot="cartable" clique="false" />
      <Mot mot="portemanteau" clique="false" />
    </div>
  );
};

export default Moe;
