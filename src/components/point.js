import React, { Component } from 'react';
import './point.css';

class Point extends Component {
  
  renderBlack() {
    return (<button className="square clickedBlack mx-auto d-block " 
          onClick = {()=> this.props.onClick()}
          >
        <img className ="stone" src="https://cdn.glitch.com/4bfca7e5-95f2-4b2d-b00f-45536ddc8780%2FRealistic_Go_Stone.svg.png?v=1583447748422" alt="black go stone" />
        </button>);
  }
  
  renderWhite() {
    return (
      <button className="square" 
          onClick = {()=> this.props.onClick()}
          >
        
        <img className ="stone" src="https://cdn.glitch.com/4bfca7e5-95f2-4b2d-b00f-45536ddc8780%2Fw_1.png?v=15834477519112" alt="white go stone" />
        </button>);
  }
  
  renderUnclicked() {
    return(<button className="square" 
          onClick = {()=> this.props.onClick()}
          >
        <image src = "https://cdn.glitch.com/4bfca7e5-95f2-4b2d-b00f-45536ddc8780%2Fgrid.JPG?v=1583446628538" />
        </button>);
  }
  
  render() {
    
    let button;
    
    if(this.props.value == 'B') {
      button = this.renderBlack();
    } else if (this.props.value == 'W') {
      button = this.renderWhite();
    } else {
      button = this.renderUnclicked();
    }
          
    return (
      <div className = "cell">
        {button}
        
      </div>
      
    );
  }
        
}

export { Point }