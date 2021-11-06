import React from 'react';
import Navigation from '../components/Navigation';

const Regles = () => {
  return (
    <div>
      <Navigation />
      <div>
        <h2>Présentation</h2>
        <p>
          Decoy 6 est un jeu sur la plateforme Wordlet. Le mot anglais
          <em>decoy</em>
          désigne un leurre utilisé à la chasse, comme par exemple un canard en
          bois servant à attirer les canards sauvages. Le principe du jeu est
          d’utiliser des mots comme leurre afin de tromper les autres joueurs.
        </p>
        <h2>Maitre du jeu</h2>
        <p>
          Le Decoy 6 se joue à 6 joueurs dont l’un, que l’on appelle
          <em>maitre du jeu</em> va jouer un rôle particulier.
        </p>
        <h2>Tour de table</h2>
        <p>
          Dans le cas d’une partie isolée, la détermination du MJ peut être
          aléatoire. On peut aussi jouer une série de 6 parties dans laquelle
          chaque joueur sera MJ à tour de rôle (tour de table).
        </p>
        <h2>Temps de jeu</h2>
        <p>
          Une partie de Decoy 6 se déroule en 4 phases durant au maximum 30
          secondes. Le temps maximum pour une partie de Decoy 6 est donc de 2
          minutes (6 x 2 = 12 minutes pour un tour de table). Le MJ est actif
          durant les phases 1 et 2 et les AJ sont actifs durant les phases 3 et
          4.
        </p>
        <h2>Actions de jeu</h2>
        <p>
          Toutes les actions consistent à choisir un mot dans une liste. Les
          actions des AJ se font en parallèle, c’est-à-dire que les choix fait
          par chaque AJ au cours d’une phase se fait sans pouvoir consulter les
          choix faits par les autres AJ.
        </p>
        <h2>Mises</h2>
        <p>
          Decoy 6 est un jeu d’argent. Pour jouer une partie, chaque joueur doit
          engager 10 WOT (6 x 10 = 60 pour un tour de table). Chaque joueur peut
          gagner jusqu’à 48 WOT par partie. **Remarques.** 1. Le Decoy peut être
          adapté dans des versions avec 4, 5, 7 ou 8 joueurs. 2. Le Decoy se
          joue dans un WS Wordlet Set, c’est-à-dire dans un ensemble de mots qui
          délimitent un univers et participent à l’ambiance du jeu.
        </p>
        Par exemple, Wordlet Junior est constitué des 1 750 mots les plus
        utilisés de la langue française listés sur le site :
        https://fr.wiktionary.org/wiki/Wiktionnaire:Liste_de_1750_mots_français_les_plus_courants
        3. Decoy n’utilise pas les catégories (méta données). # **Déroulement
        d’une partie** **Phase 1.** On présente à MJ trois mots du WS qui
        n’appartiennent à aucun des 6 joueurs. Il dispose de 30 secondes pour
        choisir un de ces trois mots que l’on appelle MS (pour mot secret). *Ce
        choix est fait en essayant de faciliter la Phase 2.* **Phase 2.** MJ
        dispose de 30 secondes pour choisir deux mots qu’il possède que l’on
        appelle MI (pour mots indices). *Ce choix est fait de façon à ce que les
        deux mots permettent à la moitié des AJ de retrouver le MS. Il aura
        gagné si 2 ou 3 des AJ trouve le MS, partiellement perdu si c’est le cas
        de seulement 1 ou 4 des AJ et complètement perdu si c’est le cas de 0 ou
        5 des AJ. Autrement dit, le MJ doit équilibrer la difficulté du jeu.*
        **Phase 3.** On présente à chaque AJ les 2 MI. Il dispose de 30 secondes
        pour choisir un mot qu’il possède. On appelle ML (pour mots leurres) la
        liste des 5 mots ainsi choisis. *Ce choix est fait pour ressembler le
        plus possible à un mot pour lequel le MJ aurait pu choisir les deux MI.*
        **Phase 4.** On présente à chaque AJ l’ensemble désordonné constitué du
        MS et des 5 ML. Il dispose de 30 secondes pour choisir un mot dans la
        liste constituée des 5 mots de cette liste qui ne lui appartiennent pas.
        *Ce choix est fait pour essayer de déterminer le MS.* # **Répartition
        des gains** Pour jouer à Decoy 6, chaque joueur doit engager 10 WOT, il
        y a donc 6 x 10 = 60 WOT en jeu à chaque partie. On prélève 5 WOT de
        frais (de transaction et de rémunération du site) soit environ 8,33%. Le
        tableau suivant indique la répartition des gains en fonction du nombre
        de AJ qui on choisit le MS au cours de la Phase 4. On note N le nombre
        d’AJ ayant choisi le MS durant la Phase 4. On dit que AJ trouve si AJ a
        choisi le MS durant la Phase 4, N est donc le nombre de AJ qui trouve.
        On dit qu’un AJ leurre un autre AJ si ce dernier a choisi le mot
        appartenant au premier durant la Phase 4. [Répartition des
        gains](https://www.notion.so/a3927fe6e91f4066a3e1660b29ae1c88) On peut
        résumer ce tableau de la façon suivante : Lorsque le JM gagne (N=2 ou
        N=3) il double sa mise. Lorsqu’il perd partiellement (N=1 ou N=4), il
        récupère 7. Choisir le MS rapporte 7 avec un bonus de +4 si tout le
        monde le fait et de +13 si on est le seul à le faire. A chaque fois
        qu’un autre AJ a choisi notre ML, ça nous rapporte 7 avec un bonus de +4
        si personne n’a découvert le MS et de +13 si notre ML est le seul ML à
        avoir été choisi. Les gains des AJ sont cumulatifs. Le gain maximum est
        de 48, il correspond à la situation où un AJ a choisi le MS et tous les
        autres AJ ont choisi son ML. # **Lexique** AJ : Autres Joueurs :
        ensemble des 5 joueurs autres que le MJ. MI : Mots Indices : 2 mots
        appartenant au MJ et choisis par le MJ durant la Phase 2. MJ : Maitre du
        Jeu : Joueur ayant un rôle spécial désigné au tout début de la partie.
        MS : Mot Secret : mot choisi (secrètement) par le MJ durant la Phase 1.
        N : nombre d’AJ ayant choisi le MS durant la Phase 4. WS : Wordlet Set :
        ensemble de mots utilisables dans un jeu donné.
      </div>
    </div>
  );
};

export default Regles;
