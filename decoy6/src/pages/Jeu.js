import React from 'react';
import FullFlex from '../components/FullFlex';
import Navigation from '../components/Navigation';
import touslesmots from './touslesmots.json';

const Jeu = () => {
  // Distributions des mots //
  const motsRandom = touslesmots;

  // Nombre aléatoire entre 0 et max
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  // Mélange d'un tableau
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = getRandomInt(i + 1);
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  // Mélange le tableau motsRandom
  shuffleArray(motsRandom);

  // Distribution des mots
  // MotsDuJoueur[0][0,..,19] : les 20 mots du maître du jeu
  // MotsDuJoueur[i][0,..,19] : les 20 mots du joueur i (i de 1 à 5)
  // MotsDuJoueur[6][0,1,2] : les 3 mots parmi lesquels le MJ choisit le mot secret
  function distribution(Array) {
    for (var i = 0; i < 7; i++) {
      Array[i] = motsRandom.slice(20 * i, 20 * i + 19);
    }
  }
  const MotsDuJoueur = [];
  distribution(MotsDuJoueur);

  return (
    <div>
      <Navigation />
      <FullFlex motsDuJoueur={MotsDuJoueur} />
    </div>
  );
};

export default Jeu;
