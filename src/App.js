import React, { useState } from 'react';
import './App.css';
import Card from './Components/Card'


function App() {
  const [gameState,setGameState]=useState(3);
  const [score,setScore]=useState(0);
  const [highScore,setHighScore]=useState(0);
  /* gameState
  0 : game start
  1 : playgame
  2 : gameover
  3 : blank screen
   */
  function ScoreBoard(){
    return (
      <div class='scoreBoard'>
          <span>Score : {score}</span>
          <span>High Score : {highScore}</span>
      </div>
    )
  }
  function StartScreen(){
    return(
      <div class='centerMe mainScreen'>
        <div>
          <h1>INSTRUCTIONS</h1>
        </div>
        <div>
          SELECT ANY CARD BUT DON'T SELECT THE SAME CARD TWICE!
        </div>
        <button>Start</button>
      </div>
    )
  }
  
  function GameOverScreen(){
    return(
      <div class='centerMe mainScreen'>
        <div>
          <h1>GAME OVER</h1>
        </div>
        <div>
          YOUR SCORE IS {score}
        </div>
        <button>PLAY AGAIN</button>
      </div>
    )
  }
  return(
    <div>
      <div id="header">MARVEL MEMORY CARD GAME</div>
      <div id="content">
        {gameState===0 ? StartScreen():null}
        {gameState===1 ? null:null}
        {gameState===2 ? GameOverScreen():null}
        {gameState===3 ? 
        <div class='mainScreen'>
          <Card cid='14' />
        </div>:null}
        {ScoreBoard()}
        
      </div>
      <div id="footer">
      <i class="fab fa-github"></i>
      <a href='https://github.com/kennethmxpgit/memory-card'>&nbsp;kennethmxp</a>
      </div>
     
    </div>

  )
}

export default App;
