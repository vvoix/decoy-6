import { computeHeadingLevel } from '@testing-library/dom';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/Button';

import './FullFlex.css';

const FullFlex = (props) => {
  const [motSecret, setMotSecret] = useState('');
  const [indice1, setIndice1] = useState('');
  const [indice2, setIndice2] = useState('');
  const [leure, setLeure] = useState([]);
  const [shuffleLeure, setshuffleLeure] = useState([]);
  const [choix, setChoix] = useState([]);

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

  function compte(mot, array) {
    var nbr = 0;
    for (var i = array.length - 1; i > -1; i--) {
      if (mot === array[i]) {
        nbr++;
      }
    }
    return nbr;
  }

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

  const indices = props.motsDuJoueur[6].slice(0, 3);
  return (
    <div>
      {/* Tour du Maitre */}
      <div className="fullflex">
        <div className="tour">Tour du maître du jeu</div>
        <Button variant="secondary" disabled="off">
          Choisis un mot secret (parmi trois) : <b>{motSecret}</b>
        </Button>{' '}
        <br />
        <div class="d-flex justify-content-lg-between flex-wrap">
          <ButtonGroup className="me-2" aria-label="First group">
            {indices.map((item) => (
              <Button
                onClick={() => {
                  setMotSecret(item);
                  setLeure([
                    item,
                    leure[1],
                    leure[2],
                    leure[3],
                    leure[4],
                    leure[5],
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
        <br />
        <Button variant="secondary" disabled="off">
          Choisis deux indices (parmi tes mots ) : <b>{indice1}</b> et{' '}
          <b>{indice2}</b>.
        </Button>{' '}
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
        <div className="tour">Leure du joueur 1</div>
        <Button variant="secondary" disabled="off">
          Les indices sont : {indice1} et {indice2}.
        </Button>{' '}
        <br />
        <Button variant="secondary" disabled="off">
          Choisis un leure (parmi tes mots ) : {leure[1]}.
        </Button>{' '}
        <br />
        <div class="d-flex justify-content-lg-between flex-wrap">
          <ButtonGroup className="me-2" aria-label="Mots">
            {props.motsDuJoueur[1].map((item) => (
              <Button
                onClick={() => {
                  setLeure([
                    leure[0],
                    item,
                    leure[2],
                    leure[3],
                    leure[4],
                    leure[5],
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
      {/* Tour du Joueur 2 */}
      <div className="fullflex">
        <div className="tour">Leure du joueur 2</div>
        <Button variant="secondary" disabled="off">
          Les indices sont : {indice1} et {indice2}.
        </Button>{' '}
        <br />
        <Button variant="secondary" disabled="off">
          Choisis un leure (parmi tes mots ) : {leure[2]}.
        </Button>{' '}
        <br />
        <div class="d-flex justify-content-lg-between flex-wrap">
          <ButtonGroup className="me-2" aria-label="Mots">
            {props.motsDuJoueur[2].map((item) => (
              <Button
                onClick={() => {
                  setLeure([
                    leure[0],
                    leure[1],
                    item,
                    leure[3],
                    leure[4],
                    leure[5],
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
      {/* Tour du Joueur 3 */}
      <div className="fullflex">
        <div className="tour">Leure du joueur 3</div>
        <Button variant="secondary" disabled="off">
          Les indices sont : {indice1} et {indice2}.
        </Button>{' '}
        <br />
        <Button variant="secondary" disabled="off">
          Choisis un leure (parmi tes mots ) : {leure[3]}.
        </Button>{' '}
        <br />
        <div class="d-flex justify-content-lg-between flex-wrap">
          <ButtonGroup className="me-2" aria-label="Mots">
            {props.motsDuJoueur[3].map((item) => (
              <Button
                onClick={() => {
                  setLeure([
                    leure[0],
                    leure[1],
                    leure[2],
                    item,
                    leure[4],
                    leure[5],
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
      {/* Tour du Joueur 4 */}
      <div className="fullflex">
        <div className="tour">Leure du joueur 4</div>
        <Button variant="secondary" disabled="off">
          Les indices sont : {indice1} et {indice2}.
        </Button>{' '}
        <br />
        <Button variant="secondary" disabled="off">
          Choisis un leure (parmi tes mots ) : {leure[4]}.
        </Button>{' '}
        <br />
        <div class="d-flex justify-content-lg-between flex-wrap">
          <ButtonGroup className="me-2" aria-label="Mots">
            {props.motsDuJoueur[4].map((item) => (
              <Button
                onClick={() => {
                  setLeure([
                    leure[0],
                    leure[1],
                    leure[2],
                    leure[3],
                    item,
                    leure[5],
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
        <div className="tour">Leure du joueur 5</div>
        <Button variant="secondary" disabled="off">
          Les indices sont : {indice1} et {indice2}.
        </Button>{' '}
        <br />
        <Button variant="secondary" disabled="off">
          Choisis un leure (parmi tes mots ) : {leure[5]}.
        </Button>{' '}
        <br />
        <div class="d-flex justify-content-lg-between flex-wrap">
          <ButtonGroup className="me-2" aria-label="Mots">
            {props.motsDuJoueur[5].map((item) => (
              <Button
                onClick={() => {
                  setLeure([
                    leure[0],
                    leure[1],
                    leure[2],
                    leure[3],
                    leure[4],
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
      {/* Fin du tour */}
      {/* <Button
        variant="danger"
        onClick={() => {
          setshuffleLeure(() => shuffleArray(leure));
        }}
      >
        Fin du tour.
      </Button>{' '}
      <br /> <br /> */}
      {/* Choix du joueur 1 */}
      <div className="fullflex">
        <div className="tour">Choix du joueur 1.</div>
        <Button variant="secondary" disabled="off">
          Les indices étaient : {indice1} et {indice2}.
        </Button>{' '}
        <br />
        <Button variant="secondary" disabled="off">
          Deviner le mot secret (parmi les mots ) : {choix[1]}.
        </Button>{' '}
        <br />
        <div class="d-flex justify-content-lg-between flex-wrap">
          <ButtonGroup className="me-2" aria-label="Mots">
            {leure.map((item) => (
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
        <Button variant="secondary" disabled="off">
          Les indices étaient : {indice1} et {indice2}.
        </Button>{' '}
        <br />
        <Button variant="secondary" disabled="off">
          Deviner le mot secret (parmi les mots ) : {choix[2]}.
        </Button>{' '}
        <br />
        <div class="d-flex justify-content-lg-between flex-wrap">
          <ButtonGroup className="me-2" aria-label="Mots">
            {leure.map((item) => (
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
        <Button variant="secondary" disabled="off">
          Les indices étaient : {indice1} et {indice2}.
        </Button>{' '}
        <br />
        <Button variant="secondary" disabled="off">
          Deviner le mot secret (parmi les mots ) : {choix[3]}.
        </Button>{' '}
        <br />
        <div class="d-flex justify-content-lg-between flex-wrap">
          <ButtonGroup className="me-2" aria-label="Mots">
            {leure.map((item) => (
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
        <Button variant="secondary" disabled="off">
          Les indices étaient : {indice1} et {indice2}.
        </Button>{' '}
        <br />
        <Button variant="secondary" disabled="off">
          Deviner le mot secret (parmi les mots ) : {choix[4]}.
        </Button>{' '}
        <br />
        <div class="d-flex justify-content-lg-between flex-wrap">
          <ButtonGroup className="me-2" aria-label="Mots">
            {leure.map((item) => (
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
        <Button variant="secondary" disabled="off">
          Les indices étaient : {indice1} et {indice2}.
        </Button>{' '}
        <br />
        <Button variant="secondary" disabled="off">
          Deviner le mot secret (parmi les mots ) : {choix[5]}.
        </Button>{' '}
        <br />
        <div class="d-flex justify-content-lg-between flex-wrap">
          <ButtonGroup className="me-2" aria-label="Mots">
            {leure.map((item) => (
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
        <Button variant="secondary" disabled="off">
          Le mot secret était : {motSecret}. Le nombre de joueur ayant trouvé le
          mot secret est : {compte(motSecret, choix)}. Le maître du jeu gagne{' '}
          {pointsMJ(compte(motSecret, choix))}:
        </Button>{' '}
        <br />
        {leure.map((item, index) =>
          index > 0 ? (
            <Button variant="secondary" disabled="off">
              Le joueur {index} gagne :{' '}
              {compte(leure[index], [{ motSecret }]) *
                trouve(compte(motSecret, choix)) +
                compte(leure[index], choix) *
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

{
  /* Choix du  */
}
{
  /* <div className="fullflex">
  <div className="tour">Leure du joueur 5</div>
  <Button variant="secondary" disabled="off">
    Devine le mot secret (parmi les mots ) : {leure5}.
  </Button>{' '}
  <br />
  <div class="d-flex justify-content-lg-between flex-wrap">
    <ButtonGroup className="me-2" aria-label="Mots">
      <Button
        onClick={() => {
          setChoix1(item);
        }}
        variant="success"
      >
        {leure2}
      </Button>
      <Button
        onClick={() => {
          setChoix1(item);
        }}
        variant="success"
      >
        {leure2}
      </Button>
      <Button
        onClick={() => {
          setChoix1(item);
        }}
        variant="success"
      >
        {leure2}
      </Button>
      <Button
        onClick={() => {
          setChoix1(item);
        }}
        variant="success"
      >
        {leure2}
      </Button>
      <Button
        onClick={() => {
          setChoix1(item);
        }}
        variant="success"
      >
        {leure2}
      </Button>
    </ButtonGroup>
  </div>
</div>; */
}
