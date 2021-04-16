import React, { Component } from 'react';
import axios from "axios";
import Player from "./Player/Player";

class ListPlayers extends Component {

  state = {
    players: null,
    loading: false, 
  }

  loadDataHander = () => {
    this.setState({loading:true});
    axios.get("https://creaperso10-default-rtdb.europe-west1.firebasedatabase.app/players.json")
      .then(reponse => {
        const players = Object.values(reponse.data);
        this.setState({
          players,
          loading:false,
        });
      })
      .catch(error => {
        console.log(error.data);
        this.setState({loading:false});
      })
  }

  componentDidMount = () => {
    this.loadDataHander();
  }

  componentDidUpdate = (oldProps, oldState) => {
    if(oldProps.refresh !== this.props.refresh){
      this.loadDataHander();
    }
  }

  render() {
    return (
      <>
        {this.state.loading && <p>Chargement des joueurs ... </p>}
        {!this.state.loading && this.state.players && 
        <div className="row no-gutters">
          {this.state.players.map((player,index) => {
            return (
              <div className="col-6 text-center my-4" key={index}>
                <h2>{player.perso.name}</h2>
                <Player {...player.perso}/>
              </div>
              )
          })}
        </div>
        }
      </>
    );
  }
}

export default ListPlayers;