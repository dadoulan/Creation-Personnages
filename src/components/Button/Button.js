import React from 'react';

const button = (props) => {
  const btnCss = `btn ${props.typeBtn} ${props.options}`;
  return (
    <button className={btnCss} onClick={props.click}>{props.children}</button>
  )
};

export default button;