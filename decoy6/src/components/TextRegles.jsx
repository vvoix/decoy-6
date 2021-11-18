import React from 'react';
import Table from 'react-bootstrap/Table';

import './FullFlex.css';

const TextRegles = () => {
  return (
    <div className="fullflex">
      <h3>Présentation</h3>
      <p>
        Decoy 6 est un jeu sur la plateforme Wordlet. Le mot anglais
        <em> decoy </em>
        désigne un leurre utilisé à la chasse, comme par exemple un canard en
        bois servant à attirer les canards sauvages. Le principe du jeu est
        d’utiliser des mots comme leurre afin de tromper les autres joueurs.
      </p>
      <h4>Maitre du jeu</h4>
      <p>
        Le Decoy 6 se joue à 6 joueurs dont l’un, que l’on appelle
        <em>maitre du jeu</em> va jouer un rôle particulier.
      </p>
      <h4>Tour de table</h4>
      <p>
        Dans le cas d’une partie isolée, la détermination du MJ peut être
        aléatoire. On peut aussi jouer une série de 6 parties dans laquelle
        chaque joueur sera MJ à tour de rôle (tour de table).
      </p>
      <h4>Temps de jeu</h4>
      <p>
        Une partie de Decoy 6 se déroule en 4 phases durant au maximum 30
        secondes. Le temps maximum pour une partie de Decoy 6 est donc de 2
        minutes (6 x 2 = 12 minutes pour un tour de table). Le MJ est actif
        durant les phases 1 et 2 et les AJ sont actifs durant les phases 3 et 4.
      </p>
      <h4>Actions de jeu</h4>
      <p>
        Toutes les actions consistent à choisir un mot dans une liste. Les
        actions des AJ se font en parallèle, c’est-à-dire que les choix fait par
        chaque AJ au cours d’une phase se fait sans pouvoir consulter les choix
        faits par les autres AJ.
      </p>
      <h4>Mises</h4>
      <p>
        Decoy 6 est un jeu d’argent. Pour jouer une partie, chaque joueur doit
        miser 10 WOT. Un joueur peut gagner jusqu’à 48 WOT par partie.
      </p>

      <h3>Déroulement d’une partie</h3>
      <p>
        <h4>Phase 1.</h4>
        <p>
          On présente au maître du jeu trois mots (qui n'appartiennent à
          personne). Il choisit un de ces trois mots que l’on appelle le mot
          secret (MS) et deux des mots qu’il possède que l’on appelle les
          indices.
          <br />
          Remarque : Le maître du jeu aura gagné si 2 ou 3 des autres joueurs
          trouve le MS, partiellement perdu si c’est le cas de seulement 1 ou 4
          des AJ et complètement perdu si c’est le cas de 0 ou 5 des AJ.
          Autrement dit, le maître du jeu doit équilibrer la difficulté du jeu.
        </p>
        <h4>Phase 2.</h4>
        <p>
          On présente à chaque joueur (autre que le maître du jeu) les deux
          indices. Il choisit le mot qu’il possède qui corresponde le plus aux
          indices. On appelle ce mot son leurre. leurres).
        </p>
        <h4>Phase 3.</h4>
        <p>
          On présente à chaque joueur (autre que le maître du jeu) l’ensemble
          désordonné constitué du mot secret et des 5 leurres. Il essaie de
          découvrir le mot secret.
        </p>
        <h3> Répartition des gains</h3>
        <p>
          Le tableau ci-dessous indique la répartition des gains en fonction du
          nombre N de joueurs ayant trouvé le mot secret.
          <br />
          Remarque : On peut résumer ce tableau de la façon suivante :
          <ul>
            <li>
              Lorsque le maître du jeu gagne (N=2 ou N=3) il double sa mise.
              Lorsqu’il perd partiellement (N=1 ou N=4), il récupère 7.
            </li>
            <li>
              Trouver le mot secret rapporte 7 avec un bonus de +4 si tout le
              monde le fait et de +13 si on est le seul à le faire.
            </li>
            <li>
              leurrer un autre joueur rapporte 7 avec un bonus de +4 si personne
              n’a découvert le mot secret et de +13 si notre leurre est le seul
              leurre à avoir été choisi.
            </li>
          </ul>
        </p>
      </p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre de joueurs ayant trouvé le mot secret (N)</th>
            <th>0</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gains du maître du jeu</td>
            <td>0</td>
            <td>7</td>
            <td>20</td>
            <td>20</td>
            <td>7</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Récompense pour avoir trouvé le mot secret</td>
            <td></td>
            <td>20</td>
            <td>7</td>
            <td>7</td>
            <td>7</td>
            <td>11</td>
          </tr>
          <tr>
            <td>Récompense pour avoir leurré un joueur</td>
            <td>11</td>
            <td>7</td>
            <td>7</td>
            <td>7</td>
            <td>20</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TextRegles;
