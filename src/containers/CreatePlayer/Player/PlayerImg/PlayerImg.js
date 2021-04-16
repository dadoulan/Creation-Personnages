import React from 'react';
import PlayerImg1 from "../../../../asset/images/players/player1.png";
import PlayerImg2 from "../../../../asset/images/players/player2.png";
import PlayerImg3 from "../../../../asset/images/players/player3.png";
import classes from "./PlayerImg.module.css";

const PlayerImg = (props) => {
  let imageToPrint = "";
  if(props.numImage === 1) imageToPrint = PlayerImg1;
  else if(props.numImage === 2) imageToPrint = PlayerImg2;
  else if(props.numImage === 3) imageToPrint = PlayerImg3;

  return (
    <div className="d-flex justify-content-evenly align-items-center">
      <div className={[classes.arrow,classes.left].join(' ')} onClick={props.leftArrow}></div>
      <div>
        <img src={imageToPrint} alt="perso"></img>
      </div>
      <div className={[classes.arrow,classes.right].join(" ")} onClick={props.rightArrow}></div>
    </div>
  )
};

export default PlayerImg;