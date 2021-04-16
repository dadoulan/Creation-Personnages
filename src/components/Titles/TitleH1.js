import React from 'react';
import classes from "./TitleH1.module.css";

const titleh1 = (props) => {
  const classesCss = `${classes.fontFamily} border border-dark rounded p-2 my-1 mb-4 bg-primary text-white text-center`;
  return <h1 className={classesCss}>{props.children}</h1>
};

export default titleh1;