import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import './App.css';
import GameHandler from './Components/GameHandler'


function App() {
  const [gameState,setGameState]=useState(0);
  const [score,setScore]=useState(0);
  const [highScore,setHighScore]=useState(0);
  /* gameState
  0 : game start
  1 : playgame
  2 : gameover
  3 : testScreen
   */
  function scoreUp(){
    setScore(score+1);
  }
  useEffect(()=>{
    if(score>highScore) setHighScore(score);
    if(score>19) setGameState(2);
  },[score])

  function scoreReset(){
    setScore(0);
  }
  function ScoreBoard(){
    return (
      <div id='scoreBoard'>
          <span>Score : {score}</span>
          <span>High Score : {highScore}</span>
          <button onClick={()=>playAgain(true)}>Reset</button>
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
  function playAgain(highScoreReset){
    setGameState(0);
    scoreReset();
    if(highScoreReset) setHighScore(0);
  }
  function GameOverScreen(){

    return(
      <div class='centerMe mainScreen'>
        
          {(score>19)?
          <div>
            <h1>YOU WIN</h1>
          </div>:
          <div>
              <h1>GAME OVER</h1>
          </div>}
          
        
        <div>
          YOUR SCORE IS {score}
        </div>
        <button onClick={()=>playAgain(false)}>PLAY AGAIN</button>
      </div>
    )
  }
  return(
    <div>
      <div id="header">MARVEL MEMORY CARD GAME</div>
      <div id="content">
        {gameState===0 ? StartScreen():null}
        {gameState===1 ? <GameHandler score={score} scoreUp={scoreUp} scoreReset={scoreReset} setGameState={setGameState}/>:null}
        {gameState===2 ? GameOverScreen():null}
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
