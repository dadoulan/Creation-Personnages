import React from 'react';
import Carac from "./Carac/Carac";

const playerCarac = (props) => {
  return (
    <>
      <div>
        Points restants : 
        <span className="badge bg-success mx-1">{props.nbPointAvailable}</span>
      </div>
      <div className="my-3">
        <Carac 
          nbPoint={props.strength} 
          less = {() => props.removePoint("strength")}
          more = {() => props.addPoint("strength")}
        >Force</Carac>

        <Carac 
          nbPoint={props.agility}
          less = {() => props.removePoint("agility")}
          more = {() => props.addPoint("agility")}
        >Agilité</Carac>

        <Carac 
          nbPoint={props.intelligence}
          less = {() => props.removePoint("intelligence")}
          more = {() => props.addPoint("intelligence")}
        >Intelligence</Carac>
      </div>
    </>
  )
};

export default playerCarac;