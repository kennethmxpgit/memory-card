import React from 'react'
import Card from './Card'
import './GameHandler.css'

export default function GameHandler(){
    return(
        <div>
            <div id='gameCardContainer'>
                <Card cid='0'/>
                <Card cid='1'/>
                <Card cid='2'/>
                <Card cid='3'/>
                <Card cid='4'/>
                <Card cid='5'/>
            </div>

        </div>
    )
}