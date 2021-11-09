import React, { useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import Mot from '../components/Mot';
import Decompte from './Decompte';
import './Moe.css';

const Moe = (props) => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  const [selec, setSelec] = useState(3);
  return (
    <div>
      <div className="moe1">
        <div className="tableau">
          {' '}
          <div
            className="tableau"
            class="d-flex justify-content-md-between flex-wrap"
          >
            <button className="bouton" onClick={() => setSelec(0)}>
              <Mot mot={props.mots[0]} clique={selec === 0} />
            </button>
            <button className="bouton" onClick={() => setSelec(1)}>
              <Mot mot={props.mots[1]} clique={selec === 1} />
            </button>
          </div>
          <br />
          <button className="bouton" onClick={() => setSelec(2)}>
            <Mot mot={props.mots[2]} clique={selec === 2} />
          </button>
          <button>Bouton sans style</button>
          <button className="bouton"> Bouton classe bouton</button>
          <button>Bouton sans style</button>
          <Button class="btn btn-primary"> Boutton primary</Button>
          <br />
          <br />
          <div className="texte">
            Choississez un mot secret ! Il ne vous reste plus que
            <Decompte expiryTimestamp={time} />
          </div>
        </div>
        <div> </div>
      </div>
    </div>
  );
};

export default Moe;
