import React, { Component } from 'react';
import Button from "../../components/Button/Button";
import TitleH1 from "../../components/Titles/TitleH1";
import Weapons from "../Weapons/Weapons";
import Player from "./Player/Player";
import axios from 'axios';

class CreatePlayer extends Component {

  state = {
    player: {
      name: "",
      image: 3, 
      strength: 0, 
      agility: 0, 
      intelligence: 0,
      nbPointAvailable: 7,
      weapon: null,
    },
    weapons: null,
    loading: false,
  }

  componentDidMount = () => {
    this.setState({loading: true})
    axios.get("https://creaperso10-default-rtdb.europe-west1.firebasedatabase.app/armes.json")
      .then(reponse => {
        const weaponsArray = Object.values(reponse.data);
        this.setState({
          weapons: weaponsArray,
          loading: false
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          loading: false
        })
      });
    // this.getData();
  }

  // getData = async () => {
  //   let resultat = await axios.get("https://creaperso10-default-rtdb.europe-west1.firebasedatabase.app/armes/json");
  //   let { data } = resultat.data;
  //   this.setState({ weapons: data });
  // }

  changeNameHandler = (event) => {
    const newPlayer = {...this.state.player};
    newPlayer.name = event.target.value;

    this.setState({player: newPlayer})
  }


  imagePreviousHandler = () => {
    this.setState(oldState => {
      const newPlayer = {...this.state.player};
      if(oldState.player.image <= 1) newPlayer.image = 3;
      else newPlayer.image --;
      return {player: newPlayer};
    })
  }

  imageNextHandler = () => {
    this.setState(oldState => {
      const newPlayer = {...this.state.player};
      if(oldState.player.image >= 3) newPlayer.image = 1;
      else newPlayer.image ++;
      return {player: newPlayer};
    })
  }

  removePointHandler = (carac) => {
    
    this.setState((oldState) => {
      
      if(oldState.player[carac] <= 0 || oldState.player.nbPointAvailable >= 7) return null

      const newPointCarac = oldState.player[carac] -1;
      const newNbPointAvailable = oldState.player.nbPointAvailable +1 ;

      const newPlayer = {...oldState.player};
      newPlayer[carac] = newPointCarac;
      newPlayer.nbPointAvailable = newNbPointAvailable;
      
      return {player: newPlayer}
    })

  }

  addPointHandler = (carac) => {

    this.setState((oldState) => {

      if(oldState.player[carac] >= 5 || oldState.player.nbPointAvailable <= 0) return null;
      const newPointCarac = oldState.player[carac] + 1;
      const newNbPointAvailable = oldState.player.nbPointAvailable - 1;
      
      const newPlayer = {...oldState.player};
      newPlayer[carac] = newPointCarac;
      newPlayer.nbPointAvailable = newNbPointAvailable;

      return {player: newPlayer}

    })

  }

  changeWeaponPlayer = (weapon) => {
    const newPlayer = {...this.state.player};
    newPlayer.weapon = weapon;
    this.setState({player: newPlayer});
  }

  resetHandler = () => {
    this.setState({
      player: {
        name: "",
        image: 3, 
        strength: 0, 
        agility: 0, 
        intelligence: 0,
        nbPointAvailable: 7,
        weapon: null,
      },
      weapons: ["epee", "fleau", "arc", "hache"],
    })
  }

  createHandler = () => {

    this.setState({loading:true});

    const player = {
      perso: {...this.state.player},
    }
    axios.post("https://creaperso10-default-rtdb.europe-west1.firebasedatabase.app/players.json", player)
      .then(reponse => {
        console.log(reponse);
        this.setState({loading:false});
        this.resetHandler();
        this.props.refresh();
      })
      .catch(error => {
        console.log(error);
        this.setState({loading:false});
        this.resetHandler();
      })
  }

  render() {
    return (
      <div className="container">
        <TitleH1>Créateur de personnages</TitleH1>
        {this.state.loading && <div className="text-center">Chargement des armes ...</div>}
        <div className="form-group mb-4 w-25">
          <label htmlFor="name" className="form-label">Nom : </label>
          <input 
            type="text" 
            className="form-control" 
            id="name" 
            value={this.state.name}
            onChange = {this.changeNameHandler}
          ></input>
        </div>
        <Player 
          {...this.state.player}
          previous = {this.imagePreviousHandler}
          next = {this.imageNextHandler}
          removePoint = {this.removePointHandler}
          addPoint = {this.addPointHandler}
        />
        {
          this.state.weapons && 
          <Weapons 
          listWeapons = {this.state.weapons}
            changeWeapon = {this.changeWeaponPlayer}
            currentWeapon = {this.state.player.weapon}
          /> 
        }

        <div className="row no-gutters">
          <Button typeBtn="btn-danger" options="col-6" click={this.resetHandler}>Réinitialiser</Button>
          <Button typeBtn="btn-success" options="col-6" click={this.createHandler}>Créer</Button>
        </div>
      </div>
    );
  }
}

export default CreatePlayer;