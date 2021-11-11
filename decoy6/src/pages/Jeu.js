import React from 'react';
import Table from 'react-bootstrap/Table';
import FullFlex from '../components/FullFlex';
import Navigation from '../components/Navigation';
import touslesmots from './touslesmots.json';

const Jeu = () => {
  // Distributions des mots
  const motsRandom = touslesmots;
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = getRandomInt(i + 1);
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  shuffleArray(motsRandom);
  function distribution(Array) {
    for (var i = 0; i < 7; i++) {
      Array[i] = motsRandom.slice(20 * i, 20 * i + 19);
    }
  }
  const MotsDuJoueur = [];
  distribution(MotsDuJoueur);
  const SoldeDuJoueur = [100, 100, 100, 100, 100, 100];

  return (
    <div>
      <Navigation />
      <FullFlex motsDuJoueur={MotsDuJoueur} />
    </div>
  );
};

export default Jeu;

{
  /* <Table striped bordered hover>
        <thead>
          <tr>
           
            <th>Joueur</th>
            <th>WOT</th>
            <th>Mots</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          
            <td>Non distribués</td>
            <td>1000</td>
            <td>{touslesmots.length}</td>
          </tr>
          <tr>
            
            <td>Joueur 0</td>
            <td> {getRandomInt(7)}</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Joueur 3</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table> */
}
