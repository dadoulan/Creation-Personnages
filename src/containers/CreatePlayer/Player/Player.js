import React from 'react';
import PlayerImg from "./PlayerImg/PlayerImg";
import PlayerCarac from "./PlayerCarac/PlayerCarac";

const Player = (props) => {
  return (
    <div className="row no-gutters mb-5">
      <div className="col-6"> 
        <PlayerImg 
          numImage={props.image}
          leftArrow={props.previous}
          rightArrow={props.next}
        />
      </div>

      <div className="col-6">
      <PlayerCarac 
        nbPointAvailable = {props.nbPointAvailable}
        strength = {props.strength}
        agility = {props.agility}
        intelligence = {props.intelligence}
        removePoint = {props.removePoint}
        addPoint = {props.addPoint}
      />
      </div>
    </div>
  );
};

export default Player;