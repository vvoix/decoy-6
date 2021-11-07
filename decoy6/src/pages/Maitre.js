import React from 'react';
import Navigation from '../components/Navigation';

import Choix from '../components/Choix';
import Moe from '../components/Moe';

const Maitre = () => {
  return (
    <div>
      <Navigation />
      <Moe mots={['craie', 'cartable', 'portemanteau']} />

      <Choix
        mots={[
          'craie',
          'cartable',
          'portemanteau',
          'craie',
          'cartable',
          'portemanteau',
          'cartable',
          'portemanteau',
        ]}
      />
    </div>
  );
};

export default Maitre;
