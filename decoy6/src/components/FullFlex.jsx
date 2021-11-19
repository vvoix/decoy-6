import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/Button';

import './FullFlex.css';

const FullFlex = (props) => {
  const [motSecret, setMotSecret] = useState('');
  const [indice1, setIndice1] = useState('');
  const [indice2, setIndice2] = useState('');
  const [leurre, setLeurre] = useState([]);
  const [ordre, setOrdre] = useState([]);
  const [choix, setChoix] = useState([]);

  // Compte le nombre d'occurence de mot dans array
  function compte(mot, array) {
    var nbr = 0;
    for (var i = array.length - 1; i > -1; i--) {
      if (mot === array[i]) {
        nbr++;
      }
    }
    return nbr;
  }

  // Affecte item comme leurre du joueur i
  function changeLeurre(i, item) {
    const newLeurre = leurre;
    newLeurre[i] = item;
    setLeurre(newLeurre);
    setLeurre([
      leurre[0],
      leurre[1],
      leurre[2],
      leurre[3],
      leurre[4],
      leurre[5],
    ]);
  }

  // Affecte item comme choix du joueur i
  function changeChoix(i, item) {
    const newChoix = choix;
    newChoix[i] = item;
    setChoix(newChoix);
    setChoix([choix[0], choix[1], choix[2], choix[3], choix[4], choix[5]]);
  }

  // Création de ordre (= leurre ordonné)
  function ordreLeurre() {
    let tableau = [
      leurre[0],
      leurre[1],
      leurre[2],
      leurre[3],
      leurre[4],
      leurre[5],
    ];
    tableau.sort();
    setOrdre([
      tableau[0],
      tableau[1],
      tableau[2],
      tableau[3],
      tableau[4],
      tableau[5],
    ]);
  }
  // -----------------
  //  Tour du joueur j
  // -----------------
  function tourJoueur(j) {
    return (
      <div className="fullflex">
        <div className="tour">Leurre du joueur {j}</div>
        Les indices sont : <b>{indice1}</b> et <b>{indice2}</b>.
        <br />
        Choisis un leurre (parmi tes mots) : <b> {leurre[j]}</b>.
        <br />
        <div class="d-flex justify-content-lg-between flex-wrap">
          <ButtonGroup className="me-2" aria-label="Mots" variant="link">
            {props.motsDuJoueur[j].map((item) => (
              <Button
                onClick={() => {
                  changeLeurre(j, item);
                }}
                variant="success"
              >
                {' '}
                {item}{' '}
              </Button>
            ))}
          </ButtonGroup>
        </div>
      </div>
    );
  }
  // -----------------
  //  Tour du joueur j
  // -----------------
  function choixJoueur(j) {
    return (
      <div className="fullflex">
        <div className="tour">Choix du joueur {j}.</div>
        Les indices étaient : {indice1} et {indice2}.
        <br />
        Deviner le mot secret (parmi les mots) : {choix[j]}.
        <br />
        <div class="d-flex justify-content-lg-between flex-wrap">
          <ButtonGroup className="me-2" aria-label="Mots" variant="link">
            {ordre.map((item) => (
              <Button
                onClick={() => {
                  changeChoix(j, item);
                }}
                variant="success"
              >
                {item}
              </Button>
            ))}
          </ButtonGroup>
        </div>
      </div>
    );
  }

  // Tableau du nombre de points gagnés par le maître du jeu
  function pointsMJ(n) {
    return n == 0
      ? 0
      : n == 1
      ? 7
      : n == 2
      ? 20
      : n == 3
      ? 20
      : n == 4
      ? 7
      : n == 5
      ? 0
      : 'erreur' + n;
  }

  // Tableau du nombre de points gagnés par un joueur
  function trouve(n) {
    return n == 0
      ? 0
      : n == 1
      ? 20
      : n == 2
      ? 7
      : n == 3
      ? 7
      : n == 4
      ? 7
      : n == 5
      ? 11
      : 'erreur' + n;
  }

  // MotsDuJoueur[6][0,1,2] : les 3 mots parmi lesquels le MJ choisit le mot secret
  const indices = props.motsDuJoueur[6].slice(0, 3);

  return (
    <div>
      {/* Tour du Maitre */}
      <div className="fullflex">
        <h2>Tour du maître du jeu</h2>
        <br />
        Choisis un mot secret (parmi trois) : <b>{motSecret}</b>.
        <br />
        <div class="d-flex justify-content-lg-between flex-wrap">
          <ButtonGroup className="me-2" aria-label="First group" variant="link">
            {indices.map((item) => (
              <Button
                onClick={() => {
                  setMotSecret(item);
                  changeLeurre(0, item);
                }}
                variant="success"
              >
                {' '}
                {item}{' '}
              </Button>
            ))}
          </ButtonGroup>
        </div>
        Choisis deux indices (parmi tes mots) : <b>{indice1}</b> :{' '}
        <b>{indice2}</b>.
        <br />
        <div class="d-flex justify-content-lg-between flex-wrap">
          <ButtonGroup className="me-2" aria-label="Mots" variant="link">
            {props.motsDuJoueur[0].map((item) => (
              <Button
                onClick={() => {
                  setIndice1(indice2);
                  setIndice2(item);
                }}
                variant="success"
              >
                {' '}
                {item}{' '}
              </Button>
            ))}
          </ButtonGroup>
        </div>
      </div>
      <br />
      {tourJoueur(1)}
      <br />
      {tourJoueur(2)}
      <br />
      {tourJoueur(3)}
      <br />
      {tourJoueur(4)}
      <br />
      {tourJoueur(5)}
      <br />
      {/* Fin du tour */}
      <Button
        variant="warning"
        onClick={() => {
          ordreLeurre();
        }}
      >
        Mélange.
      </Button>{' '}
      <br /> <br />
      {choixJoueur(1)}
      <br />
      {choixJoueur(2)}
      <br />
      {choixJoueur(3)}
      <br />
      {choixJoueur(4)}
      <br />
      {choixJoueur(5)}
      <br />
      {/* Compte des points*/}
      <div className="fullflex">
        <div className="tour">Décompte des points</div>
        <br />
        Le mot secret était : {motSecret}.
        <br />
        Le nombre de joueur ayant trouvé le mot secret est :{' '}
        {compte(motSecret, choix)}.
        <br />
        Le maître du jeu gagne {pointsMJ(compte(motSecret, choix))}:
        <br />
        <br />
        {leurre.map((item, index) =>
          index > 0 ? (
            <div>
              Le joueur {index} a trouvé le mot secret :{' '}
              {choix[index] == motSecret ? 'oui' : 'non'}.<br />
              Il a leurré : {compte(leurre[index], choix)} joueurs. <br />
              Il gagne :{' '}
              {compte(choix[index], [motSecret]) *
                trouve(compte(motSecret, choix)) +
                compte(leurre[index], choix) *
                  trouve(5 - compte(motSecret, choix))}
              .<br />
              <br />
            </div>
          ) : null
        )}
        <br />
      </div>
    </div>
  );
};

export default FullFlex;
