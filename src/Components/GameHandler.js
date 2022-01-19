import React,{useState, useEffect} from 'react'
import Card from './Card'
import './GameHandler.css'

export default function GameHandler(props){
    const [shownCard,setShownCard]=useState([]);
    const [gameDeck,setGameDeck]=useState([]);
    const deck=[];
    let shownCards=[];
    function randomCards(){
        const num=5;
        const shown=[];
        const tempDeck=gameDeck;
        if(tempDeck.length<1) return;//exit if gameDeck is not initialized
        const shuffled = tempDeck.sort(() => Math.random() - 0.5);
        for(let i=0;i<num;i++){
            shown.push(shuffled[i]);
        }
        const shownMap=shown.map((el)=>el.cid);
        return shownMap;
    }
    function pickCard(){
        return null;
    }
    useEffect(()=>{
        for(let i=0;i<20;i++){
            deck.push({isSelected:false,isLoaded:false,cid:i})
        }
        setGameDeck(...gameDeck,deck);
    },[])

    useEffect(()=>{
        randomCards();
    },[gameDeck])

    



    
    return(
        <div>
            <Card shownCards={randomCards()}></Card>
        </div>
    )
}