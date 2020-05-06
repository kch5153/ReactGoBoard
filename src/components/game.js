import React, { Component } from 'react';
import { Board } from './board';
import './game.css';

class Game extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      history : [
        {points: Array(81).fill(null), blackCaptured: 0, whiteCaptured: 0}
      ],
      stepNumber: 0,
      blackIsNext: true,
     
    };
  }
  
  // handles click when player places a piece or wishes to remove a piece
  handleClick(i) {
    //loads board for current step number
    const history = this.state.history.slice(0, this.state.stepNumber+1);
    const current = history[history.length - 1];
    const points = current.points.slice();
    
    let nextPlayer;
    var blackCount = current.blackCaptured;
    var whiteCount = current.whiteCaptured;
    
    if(points[i] == null) {
      points[i] = this.state.blackIsNext ? 'B' : 'W';
      nextPlayer = !this.state.blackIsNext;
    } else {
      if(points[i] == 'B') {
        blackCount = blackCount+1;
      } else if(points[i] == 'W') {
        whiteCount = whiteCount+1;
      }
      points[i] = null;
      nextPlayer = this.state.blackIsNext;
    }
    
    this.setState(
    {
      history: history.concat([{points: points, blackCaptured: blackCount, whiteCaptured:whiteCount}]),
      stepNumber: history.length,
      blackIsNext: nextPlayer,
      
    });
  }
  
  // sets state to previous board
  jumpTo(step) {
    
    this.setState({
      stepNumber:step,
      blackIsNext: step % 2 === 0 ,
    });
    
  }
  
  // passes turn to next player
  passTurn() {
    this.setState({blackIsNext:!this.state.blackIsNext})
  }
  
  render() {
    
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    let status = 'Next player: ' + (this.state.blackIsNext ? 'Black' : 'White');
    
    const moves = history.map((step, move) => {
      const description = move ? "Go to move #" + move : "Go to game start";
      return (
        <li className = "list-group-item" key = {move}>
          <button 
            type = "button"
            className = "btn"
            onClick = {() => this.jumpTo(move)}>{description}</button>
        </li>);
      
    });
    
    return (
      
      <div className = "container">
        
        <div className = "row">
          <div className = "col">
            <h1>Online Go Game</h1>
          </div>
        </div>
        
        <div className = "row captured-count">
          <div className = "col-4 black-captures">
            {current.blackCaptured} black stones captured
          </div>
          <div className = "col-4 white-captures">
            {current.whiteCaptured} white stones captured
          </div>
        </div>
        
        <div className = "row next">
          <div className = "col-4">{status}</div>
          <div className = "col-4"><button className = "btn btn-light" onClick={()=>this.passTurn()}>Pass Turn</button></div>
        </div>
        
        <div className="game">
          <div className="row game-board">
            <div className="col-9">
              <Board 
                points = {current.points}
                onClick = {(i) => this.handleClick(i)}
                />
            </div>
            <div className = "col-3">
              <h2>Undo</h2>
              <ol className = "list-group-flush">{moves}</ol>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export { Game }