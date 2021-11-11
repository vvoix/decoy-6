import React from 'react';
import FullFlex from '../components/FullFlex';
import Navigation from '../components/Navigation';

const Autre = () => {
  return (
    <div>
      <Navigation />
      <FullFlex
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

export default Autre;
