import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/Button';

import './FullFlex.css';

const FullFlex = (props) => {
  const [motSecret, setMotSecret] = useState('');
  const [indice1, setIndice1] = useState('');
  const [indice2, setIndice2] = useState('');
  const [leurre, setLeurre] = useState([]);
  const [choix, setChoix] = useState([]);
  const leurreOrdre = [2, 1, 3, 4, 5];

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
  // function changeLeurre(i, item) {

  //   }
  //   return nbr;
  // }

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
        Choisis un mot secret (parmi trois) : <b>{motSecret}</b>
        <br />
        <div class="d-flex justify-content-lg-between flex-wrap">
          <ButtonGroup className="me-2" aria-label="First group">
            {indices.map((item) => (
              <Button
                onClick={() => {
                  setMotSecret(item);
                  setLeurre([
                    item,
                    leurre[1],
                    leurre[2],
                    leurre[3],
                    leurre[4],
                    leurre[5],
                  ]);
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
          <ButtonGroup className="me-2" aria-label="Mots">
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
      {/* Tour du Joueur 1 */}
      <div className="fullflex">
        <div className="tour">Leurre du joueur 1</div>
        Les indices sont : <b>{indice1}</b> et <b>{indice2}</b> .
        <br />
        Choisis un leurre (parmi tes mots ) : <b> {leurre[1]}</b> .
        <br />
        <div class="d-flex justify-content-lg-between flex-wrap">
          {/* <ButtonGroup className="me-2" aria-label="Mots"> */}
          {props.motsDuJoueur[1].map((item) => (
            <Button
              onClick={() => {
                setLeurre([
                  leurre[0],
                  item,
                  leurre[2],
                  leurre[3],
                  leurre[4],
                  leurre[5],
                ]);
              }}
              variant="success"
            >
              {' '}
              {item}{' '}
            </Button>
          ))}
          {/* </ButtonGroup> */}
        </div>
      </div>
      <br />
      {/* Tour du Joueur 2 */}
      <div className="fullflex">
        <div className="tour">Leurre du joueur 2</div>
        Les indices sont : {indice1} et {indice2}.
        <br />
        Choisis un leurre (parmi tes mots ) : <b>{leurre[2]} </b>.
        <br />
        <div class="d-flex justify-content-lg-between flex-wrap">
          <ButtonGroup className="me-2" aria-label="Mots">
            {props.motsDuJoueur[2].map((item) => (
              <Button
                onClick={() => {
                  setLeurre([
                    leurre[0],
                    leurre[1],
                    item,
                    leurre[3],
                    leurre[4],
                    leurre[5],
                  ]);
                }}
                variant="dark"
              >
                {' '}
                {item}{' '}
              </Button>
            ))}
          </ButtonGroup>
        </div>
      </div>
      <br />
      {/* Tour du Joueur 3 */}
      <div className="fullflex">
        <div className="tour">Leurre du joueur 3</div>
        Les indices sont : <b>{indice1}</b> et <b>{indice2}</b>.
        <br />
        Choisis un leurre (parmi tes mots ) : <b>{leurre[3]}</b>.
        <br />
        <div class="d-flex justify-content-lg-between flex-wrap">
          <ButtonGroup className="me-2" aria-label="Mots">
            {props.motsDuJoueur[3].map((item) => (
              <Button
                onClick={() => {
                  setLeurre([
                    leurre[0],
                    leurre[1],
                    leurre[2],
                    item,
                    leurre[4],
                    leurre[5],
                  ]);
                }}
                variant="primary"
              >
                {' '}
                {item}{' '}
              </Button>
            ))}
          </ButtonGroup>
        </div>
      </div>
      <br />
      {/* Tour du Joueur 4 */}
      <div className="fullflex">
        <div className="tour">Leurre du joueur 4</div>
        Les indices sont : <b>{indice1}</b> et <b>{indice2}</b>.
        <br />
        Choisis un leurre (parmi tes mots ) : <b>{leurre[4]}</b>.
        <br />
        <div class="d-flex justify-content-lg-between flex-wrap">
          <ButtonGroup className="me-2" aria-label="Mots" variant="link">
            {props.motsDuJoueur[4].map((item) => (
              <Button
                onClick={() => {
                  setLeurre([
                    leurre[0],
                    leurre[1],
                    leurre[2],
                    leurre[3],
                    item,
                    leurre[5],
                  ]);
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
      {/* Tour du Joueur 5 */}
      <div className="fullflex">
        <div className="tour">Leurre du joueur 5</div>
        Les indices sont : <b>{indice1}</b> et <b>{indice2}</b>.
        <br />
        Choisis un leurre (parmi tes mots) : <b>{leurre[5]}</b>.
        <br />
        <div class="d-flex justify-content-lg-between flex-wrap">
          <ButtonGroup className="me-2" aria-label="Mots" variant="link">
            {props.motsDuJoueur[5].map((item) => (
              <Button
                onClick={() => {
                  setLeurre([
                    leurre[0],
                    leurre[1],
                    leurre[2],
                    leurre[3],
                    leurre[4],
                    item,
                  ]);
                }}
                variant="info"
              >
                {' '}
                {item}{' '}
              </Button>
            ))}
          </ButtonGroup>
        </div>
      </div>
      <br />
      {/* Fin du tour */}
      {/* <Button
        variant="danger"
        onClick={() => {
          leurre.sort();
        }}
      >
        Fin du tour leurre est : {leurre}.
      </Button>{' '} */}
      <br /> <br />
      {/* Choix du joueur 1 */}
      <div className="fullflex">
        <div className="tour">Choix du joueur 1.</div>
        Les indices étaient : {indice1} et {indice2}.
        <br />
        Deviner le mot secret (parmi les mots) : {choix[1]}.
        <br />
        <div class="d-flex justify-content-lg-between flex-wrap">
          <ButtonGroup className="me-2" aria-label="Mots">
            {leurre.map((item) => (
              <Button
                onClick={() => {
                  setChoix([
                    choix[0],
                    item,
                    choix[2],
                    choix[3],
                    choix[4],
                    choix[5],
                  ]);
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
      {/* Choix du joueur 2 */}
      <div className="fullflex">
        <div className="tour">Choix du joueur 2</div>
        Les indices étaient : {indice1} et {indice2}.
        <br />
        Deviner le mot secret (parmi les mots ) : {choix[2]}.
        <br />
        <div class="d-flex justify-content-lg-between flex-wrap">
          <ButtonGroup className="me-2" aria-label="Mots">
            {leurre.map((item) => (
              <Button
                onClick={() => {
                  setChoix([
                    choix[0],
                    choix[1],
                    item,
                    choix[3],
                    choix[4],
                    choix[5],
                  ]);
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
      {/* Choix du joueur 3 */}
      <div className="fullflex">
        <div className="tour">Choix du joueur 3</div>
        Les indices étaient : {indice1} et {indice2}.
        <br />
        Deviner le mot secret (parmi les mots ) : {choix[3]}.
        <br />
        <div class="d-flex justify-content-lg-between flex-wrap">
          <ButtonGroup className="me-2" aria-label="Mots">
            {leurre.map((item) => (
              <Button
                onClick={() => {
                  setChoix([
                    choix[0],
                    choix[1],
                    choix[2],
                    item,
                    choix[4],
                    choix[5],
                  ]);
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
      {/* Choix du joueur 4 */}
      <div className="fullflex">
        <div className="tour">Choix du joueur 4</div>
        Les indices étaient : {indice1} et {indice2}.
        <br />
        Deviner le mot secret (parmi les mots ) : {choix[4]}.
        <br />
        <div class="d-flex justify-content-lg-between flex-wrap">
          <ButtonGroup className="me-2" aria-label="Mots">
            {leurre.map((item) => (
              <Button
                onClick={() => {
                  setChoix([
                    choix[0],
                    choix[1],
                    choix[2],
                    choix[3],
                    item,
                    choix[5],
                  ]);
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
      {/* Choix du joueur 5 */}
      <div className="fullflex">
        <div className="tour">Choix du joueur 5</div>
        Les indices étaient : {indice1} et {indice2}.
        <br />
        Deviner le mot secret (parmi les mots ) : {choix[5]}.
        <br />
        <div class="d-flex justify-content-lg-between flex-wrap">
          <ButtonGroup className="me-2" aria-label="Mots">
            {leurre.map((item) => (
              <Button
                onClick={() => {
                  setChoix([
                    choix[0],
                    choix[1],
                    choix[2],
                    choix[3],
                    choix[4],
                    item,
                  ]);
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
      {/* Compte des points*/}
      <div className="fullflex">
        <div className="tour">Décompte des points</div>
        <Button variant="dark" disabled="off">
          Le mot secret était : {motSecret}. Le nombre de joueur ayant trouvé le
          mot secret est : {compte(motSecret, choix)}. Le maître du jeu gagne{' '}
          {pointsMJ(compte(motSecret, choix))}:
        </Button>{' '}
        <br />
        {leurre.map((item, index) =>
          index > 0 ? (
            <Button variant="dark" disabled="off">
              Le joueur {index} a trouvé le mot secret :{' '}
              {choix[index] == motSecret ? 'oui' : 'non'} et a leurré :{' '}
              {compte(leurre[index], choix)} joueurs. Il gagne :{' '}
              {compte(choix[index], [motSecret]) *
                trouve(compte(motSecret, choix)) +
                compte(leurre[index], choix) *
                  trouve(5 - compte(motSecret, choix))}
              .
            </Button>
          ) : null
        )}
        <br />
      </div>
    </div>
  );
};

export default FullFlex;
