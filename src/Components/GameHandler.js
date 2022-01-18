import React from 'react'
import Card from './Card'
import './GameHandler.css'

export default function GameHandler(props){
    return(
        <div>
            <div id='gameCardContainer'>
                <div class='gameCard' onClick={()=>props.setGameState(2)}><Card cid='0'/></div>
                <div class='gameCard'><Card cid='0'/></div>
                <div class='gameCard'><Card cid='0'/></div>
                <div class='gameCard'><Card cid='0'/></div>
                <div class='gameCard'><Card cid='0'/></div>
                
            </div>

        </div>
    )
}