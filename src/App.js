import React, { Component } from 'react';
import './App.css';
import CreatePlayer from "./containers/CreatePlayer/CreatePlayer";
import ListPlayers from "./containers/ListPlayers/ListPlayers";

class App extends Component {

  state = {
    refresh: false,
  }

  refreshHandler = () => {
    this.setState((oldState) => {
      return{
        refresh: !oldState.refresh
      }
    });
  }

  render() {
    return (
      <>
      <CreatePlayer refresh={this.refreshHandler}/>
      <ListPlayers refresh={this.state.refresh}/>
   </>
    );
  }
}

export default App;


