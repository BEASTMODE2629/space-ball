import React from 'react';
// import GameView from "../../classes/game_view";
// import gameLogic from "../../classes/game_logic";
// import Game from '../../classes/game/Game'
// import Matter from "matter-js";
// import Util from "./util/util";
// import key from "keymaster";

import GameClient from '../../classes/game/game_client'
import io from 'socket.io-client';
import Input from '../../classes/game/Input'

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
    Input.applyEventHandlers();
    this.gameClient = new GameClient(this.socket)
    this.gameClient.init()
    // this.game.animate();
    // this.game.createSelfShip();
    // this.setState({game: game})
    // this.scoreId = setInterval(() => this.updateScore()
    // , 250)
  };
  
  render() {
    return (
      <div>
        <canvas width="1000" height="600" id="background-canvas" data-paper-resize></canvas>
        <canvas width="1000" height="600" id="game-canvas" data-paper-resize></canvas>
      </div>
    );
  }
};

export default GameView;