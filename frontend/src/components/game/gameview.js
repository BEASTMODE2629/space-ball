import React from 'react';
// import GameView from "../../classes/game_view";
// import gameLogic from "../../classes/game_logic";
// import Game from '../../classes/game/Game'
// import Matter from "matter-js";
// import Util from "./util/util";
// import key from "keymaster";

import GameClient from '../../classes/game/game_client'
import io from 'socket.io-client';
// import Input from '../../classes/game/Input'

class GameView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      score: {
        leftScore: 0,
        rightScore: 0,
        over: false,
        winner: null
      }
      // game: null
    }
  }

  componentDidMount() {
    this.socket = io()
    this.canvas = document.getElementById('game-canvas')
    this.gameClient = new GameClient(this.socket)
    this.gameClient.init()
  };
  
  render() {
    return (
      <div id="game-container">
        <canvas width="1600" height="900" id="background-canvas" data-paper-resize></canvas>
        <canvas width="1600" height="900" id="game-canvas" data-paper-resize></canvas>
      </div>
    );
  }
};

export default GameView;