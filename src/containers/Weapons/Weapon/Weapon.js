import React from 'react';

const weapon = (props) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mx-5">
      <div >
        <img 
        src={props.imgWeapon} 
        alt={props.children} 
        style={{
          opacity: props.isCurrentWeapon ? "1" : "0.5",
          cursor: "pointer",
          }}
        onClick = {props.click}
        />
      </div>
      <div>
        {props.children}
      </div>
    </div>
  )
};

export default weapon;