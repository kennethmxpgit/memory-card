import React, { useState } from 'react';
import './App.css';
import Card from './Components/Card';
import GameHandler from './Components/GameHandler'


function App() {
  const [gameState,setGameState]=useState(1);
  const [score,setScore]=useState(0);
  const [highScore,setHighScore]=useState(0);
  /* gameState
  0 : game start
  1 : playgame
  2 : gameover
  3 : testScreen
   */
  function ScoreBoard(){
    return (
      <div id='scoreBoard'>
          <span>Score : {score}</span>
          <span>High Score : {highScore}</span>
          <button onClick={()=>setGameState(0)}>Reset</button>
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
        <button onClick={()=>setGameState(1)}>START</button>
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
        <button onClick={()=>setGameState(0)}>PLAY AGAIN</button>
      </div>
    )
  }
  return(
    <div>
      <div id="header">MARVEL MEMORY CARD GAME</div>
      <div id="content">
        {gameState===0 ? StartScreen():null}
        {gameState===1 ? <GameHandler/>:null}
        {gameState===2 ? GameOverScreen():null}
        {gameState===3 ? 
        <div>
          <Card cid='14' />
          <Card cid='12' />
        </div>:null}
      </div>
      {ScoreBoard()}
      <div id="footer">
      <i class="fab fa-github"></i>
      <a href='https://github.com/kennethmxpgit/memory-card'>&nbsp;kennethmxp</a>
      </div>
     
    </div>

  )
}

export default App;
