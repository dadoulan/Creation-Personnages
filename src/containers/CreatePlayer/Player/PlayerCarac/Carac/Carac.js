import React from 'react';
import classes from "./Carac.module.css";

const carac = (props) => {

  let square = [];
  for(let i = 0; i < props.nbPoint; i++){
    square.push(<div key={i} className={classes.points}></div>)
  }

  return (
    <div className="d-flex flex-row my-1 ">
      <div className={[classes.signe, classes.moins, "mx-1"].join(' ')}
        onClick={props.less}
      ></div>
      <div>
        {props.children} : 
        {props.nbPoint} 
        {square}
      </div>
      <div className={[classes.signe, classes.plus, "mx-1"].join(' ')}
        onClick={props.more}
      ></div>
    </div>
  )
};

export default carac;