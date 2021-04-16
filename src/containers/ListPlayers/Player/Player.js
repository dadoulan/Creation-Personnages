import React from 'react';
import imagePlayer1 from "../../../asset/images/players/player1.png";
import imagePlayer2 from "../../../asset/images/players/player2.png";
import imagePlayer3 from "../../../asset/images/players/player3.png";
import imageArc from "../../../asset/images/weapons/arc.png";
import imageFleau from "../../../asset/images/weapons/fleau.png";
import imageEpee from "../../../asset/images/weapons/epee.png";
import imageHache from "../../../asset/images/weapons/hache.png";

const Players = (props) => {

  let imgPerso = "";
  if(props.image === 1) imgPerso = imagePlayer1;
  else if(props.image === 2) imgPerso = imagePlayer2;
  else if(props.image === 3) imgPerso = imagePlayer3;

  let imgWeapon = "";
  if(props.weapon === "epee") imgWeapon = imageEpee;
  else if(props.weapon === "arc") imgWeapon = imageArc;
  else if(props.weapon === "fleau") imgWeapon = imageFleau;
  else if(props.weapon === "hache") imgWeapon = imageHache;


  return (
    <div className="row no-gutters text-center">
      <div className="col-6">
        <img src={imgPerso} alt="player" />
      </div>
      <div className="col-6">
        Force : {props.strength} <br/>
        Agilité : {props.agility} <br/>
        intelligence : {props.intelligence} <br/>
        <img src={imgWeapon} alt="player" />
      </div>
    </div>
  )
};

export default Players;