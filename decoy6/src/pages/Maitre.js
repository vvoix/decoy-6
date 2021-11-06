import React from 'react';
import Navigation from '../components/Navigation';

import Choix from '../components/Choix';
import Moe from '../components/Moe';

const Maitre = () => {
  return (
    <div>
      <Navigation />
      <Moe />
      La page du maître du jeu
      <Choix />
    </div>
  );
};

export default Maitre;
