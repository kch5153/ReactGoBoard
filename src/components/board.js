import React, { Component } from 'react';
import { Point } from './point';
import './board.css';

class Board extends Component {
  
  
  
  handleClick(i) {
    const points = this.state.points.slice();
    points[i] = this.state.blackIsNext ? 'B' : 'W';
    this.setState({
      points: points,
      blackIsNext: !this.state.blackIsNext
    });
    
  }
  renderPoint(i) {
    return <Point value = {this.props.points[i]}
             onClick = {() => this.props.onClick(i)}/>;
  }

  render() {

    return (
      <div className="board">
        <div className="board-row">
          {this.renderPoint(0)}
          {this.renderPoint(1)}
          {this.renderPoint(2)}
          {this.renderPoint(3)}
          {this.renderPoint(4)}
          {this.renderPoint(5)}
          {this.renderPoint(6)}
          {this.renderPoint(7)}
          {this.renderPoint(8)}
        </div>
        <div className="board-row">
          {this.renderPoint(9)}
          {this.renderPoint(10)}
          {this.renderPoint(11)}
          {this.renderPoint(12)}
          {this.renderPoint(13)}
          {this.renderPoint(14)}
          {this.renderPoint(15)}
          {this.renderPoint(16)}
          {this.renderPoint(17)}
        </div>
        <div className="board-row">
          {this.renderPoint(18)}
          {this.renderPoint(19)}
          {this.renderPoint(20)}
          {this.renderPoint(21)}
          {this.renderPoint(22)}
          {this.renderPoint(23)}
          {this.renderPoint(24)}
          {this.renderPoint(25)}
          {this.renderPoint(26)}
        </div>
        <div className="board-row">
          {this.renderPoint(27)}
          {this.renderPoint(28)}
          {this.renderPoint(29)}
          {this.renderPoint(30)}
          {this.renderPoint(31)}
          {this.renderPoint(32)}
          {this.renderPoint(33)}
          {this.renderPoint(34)}
          {this.renderPoint(35)}
        </div>
        <div className="board-row">
          {this.renderPoint(36)}
          {this.renderPoint(37)}
          {this.renderPoint(38)}
          {this.renderPoint(39)}
          {this.renderPoint(40)}
          {this.renderPoint(41)}
          {this.renderPoint(42)}
          {this.renderPoint(43)}
          {this.renderPoint(44)}
        </div>
        <div className="board-row">
          {this.renderPoint(45)}
          {this.renderPoint(46)}
          {this.renderPoint(47)}
          {this.renderPoint(48)}
          {this.renderPoint(49)}
          {this.renderPoint(50)}
          {this.renderPoint(51)}
          {this.renderPoint(52)}
          {this.renderPoint(53)}
        </div>
        <div className="board-row">
          {this.renderPoint(54)}
          {this.renderPoint(55)}
          {this.renderPoint(56)}
          {this.renderPoint(57)}
          {this.renderPoint(58)}
          {this.renderPoint(59)}
          {this.renderPoint(60)}
          {this.renderPoint(61)}
          {this.renderPoint(62)}
        </div>
        <div className="board-row">
          {this.renderPoint(63)}
          {this.renderPoint(64)}
          {this.renderPoint(65)}
          {this.renderPoint(66)}
          {this.renderPoint(67)}
          {this.renderPoint(68)}
          {this.renderPoint(69)}
          {this.renderPoint(70)}
          {this.renderPoint(71)}
        </div>
        <div className="board-row">
          {this.renderPoint(72)}
          {this.renderPoint(73)}
          {this.renderPoint(74)}
          {this.renderPoint(75)}
          {this.renderPoint(76)}
          {this.renderPoint(77)}
          {this.renderPoint(78)}
          {this.renderPoint(79)}
          {this.renderPoint(80)}
        </div>
      </div>
    );
  }
}

export { Board }