import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/Button';

import './FullFlex.css';

const FullFlex = (props) => {
  const [motSecret, setMotSecret] = useState('');
  const [indice1, setIndice1] = useState('');
  const [indice2, setIndice2] = useState('');
  const [leure1, setLeure1] = useState('');
  const [leure2, setLeure2] = useState('');
  const [leure3, setLeure3] = useState('');
  const indices = props.motsDuJoueur[6].slice(0, 3);
  return (
    <div>
      <div className="fullflex">
        <div className="tour">Tour du maître du jeu</div>
        <Button variant="secondary" disabled="off">
          Choisis un mot secret (parmi trois) : <b>{motSecret}</b>
        </Button>{' '}
        <br />
        <div class="d-flex justify-content-lg-between flex-wrap">
          <ButtonGroup className="me-2" aria-label="First group">
            {indices.map((item) => (
              <Button onClick={() => setMotSecret(item)} variant="success">
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
      {/* Tour d'un joueur */}

      <div className="fullflex">
        <div className="tour">Leure du joueur 1</div>
        <Button variant="secondary" disabled="off">
          Les indices sont : {indice1} et {indice2}.
        </Button>{' '}
        <br />
        <Button variant="secondary" disabled="off">
          Choisis un leure (parmi tes mots ) : {leure1}.
        </Button>{' '}
        <br />
        <div class="d-flex justify-content-lg-between flex-wrap">
          <ButtonGroup className="me-2" aria-label="Mots">
            {props.motsDuJoueur[1].map((item) => (
              <Button
                onClick={() => {
                  setLeure1(item);
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
    </div>
  );
};

export default FullFlex;
