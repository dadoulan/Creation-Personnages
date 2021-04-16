import React from 'react';
import Weapon from "./Weapon/Weapon";
import imgArc from "../../asset/images/weapons/arc.png" 
import imgEpee from "../../asset/images/weapons/epee.png"; 
import imgFleau from "../../asset/images/weapons/fleau.png"; 
import imgHache from "../../asset/images/weapons/hache.png";

const weapons = (props) => {
    return (
        <div className="d-flex justify-content-evenly mb-5">{props.listWeapons.map((weapon,index) => {
    
            let imgWeapon = "";
            switch(weapon){
                case "arc" : imgWeapon = imgArc;
                    break;
                case "epee" : imgWeapon = imgEpee;
                    break;
                case "fleau" : imgWeapon = imgFleau;
                    break;
                case "hache" : imgWeapon = imgHache;
                    break;
                    break;
            }

            return <Weapon 
            key={index} 
            imgWeapon={imgWeapon}
            isCurrentWeapon = {props.currentWeapon === weapon}
            click = {() => props.changeWeapon(weapon)}
            >{weapon}</Weapon>
        })}</div>
    )
}

export default weapons;