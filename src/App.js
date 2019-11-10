import React, { Component } from 'react';
import './App.css';
import Status from './components/Status';

export class App extends Component {
   constructor(props) {
      super(props)
      this.state = {
         board: Array(9).fill(null),
         player: null,
         winner: null
      }
   }

   checkWinner(){
      let winLines = 
      [
         ['0','1','2'],
         ['3','4','5'],
         ['6','7','8'],
         ['0','3','6'],
         ['1','4','7'],
         ['2','5','8'],
         ['0','4','8'],
         ['2','4','6'],
      ];
      this.checkMatch(winLines);      
   }

   checkMatch(winLines){
      for (let index=0; index<winLines.length; index++) {
         const [a,b,c] = winLines[index];
         let board = this.state.board;
         if(board[a] && board[a] === board[b] && board[a] === board[c]){
            alert('You Won!');
            this.setState({
               winner: this.state.player
            })
         }
      }
   }
   
   handleClick(index){
      if(this.state.player && !this.state.winner){
         let newBoard = this.state.board;
         if(this.state.board[index] === null){
            newBoard[index] = this.state.player
            this.setState({
               board: newBoard,
               player: this.state.player === "X"? "O" : "X"
            })
         }
         this.checkWinner();
      }

   }

   setPlayer(player){
      console.log(player)
      this.setState({
         // player:player
         player
      })
   }

   renderBoxes(){
      return (
         this.state.board.map(
            (boxjumlah, index) => 
            <div className='box' 
            key={index} 
            onClick={() => this.handleClick(index)}>
            {boxjumlah}
            </div>
         )
      )
   }

   reset(){
      this.setState({
         player: null,
         winner: null,
         board: Array(9).fill(null)
      })
   }
   render() {

      return (
         <div className='container'>
            <h1> Tic-tac-toe</h1>

            <Status 
            player={this.state.player} 
            setPlayer={(e) =>(this.setPlayer(e)) }
            winner={this.state.winner}
            />

            <div className='board'> 
               {this.renderBoxes()}
            </div>
            <button disable={!this.state.winner} onClick={() =>this.reset()}>reset</button>
         </div>
      )
   }
}

export default App
