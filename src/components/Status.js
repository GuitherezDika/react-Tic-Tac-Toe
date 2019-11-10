import React, { Component } from 'react';
import Player from './ChoosePlayer';



class Status extends Component {
   handleSetPlayer(e){
      this.props.setPlayer(e)
   }

   // handleReset(){
   //    this.props.reset()
   // }


   renderHTML(){
      if(this.props.winner){
         return (
            <h3>The winner is {this.props.winner}</h3> 
            // <button onClick={()=> handleReset()}>Reset</button>
            )
      } else {
         return this.props.player? 
            <h3>Next Player is {this.props.player}</h3> : 
            <Player player = {(e) => this.handleSetPlayer(e)} />
         
      }
   }

   render() {
      return (<span>{this.renderHTML()}</span>)
      
   }
}

export default Status
