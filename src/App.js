import React, { useState } from 'react';
import './App.css';

function ScoreBoard(){
  return (
    <div class='scoreBoard'>
        <span>Score : 12</span>
        <span>High Score : 45</span>
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
        YOUR SCORE IS ...
      </div>
      <button>PLAY AGAIN</button>
    </div>
  )
}
function App() {
  const [gameState,setGameState]=useState(2);
  /* gameState
  0 : game start
  1 : playgame
  2 : gameover
   */
  return(
    <div>
      <div id="header">MARVEL MEMORY CARD GAME</div>
      <div id="content">
        {gameState===0 ? StartScreen():null}
        {gameState===1 ? null:null}
        {gameState===2 ? GameOverScreen():null}
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
