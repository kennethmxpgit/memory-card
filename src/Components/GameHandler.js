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
        if(tempDeck.length<1) {
            console.log("Randomization failed")
            return
        };//exit if gameDeck is not initialized
        const shuffled = tempDeck.sort(() => Math.random() - 0.5);
        for(let i=0;i<num;i++){
            shown.push(shuffled[i]);
        }
        const shownMap=shown.map((el)=>el.cid);
        shownCards=shownMap;
        return shownMap;
    }
    function randomize(){
        const num=6; //number of shown cards
        //gives random number 0-19. no duplicates
        //sends it to shownCard state
        let d=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
        d = d.sort(() => Math.random() - 0.5);
        let sliced=d.slice(0,num);

        if(gameDeck[0]!=undefined){
            let loopAgain=true;
            while(loopAgain){//checks if all shown are selected already
                d = d.sort(() => Math.random() - 0.5);
                sliced=d.slice(0,num);
                sliced.forEach((el)=>{
                    //console.log(el);
                    if(gameDeck[el].isSelected==false) loopAgain=false;
                })
            }

        }


        
        //finalization
        setShownCard(sliced);
        return sliced;
    }
    function checkAllSelected(){
        // checks if all the cards are selected. if yes reshuffle
    }
    function pickCard(cid){

        //check if the card hasn't been picked before
        if(gameDeck[cid].isSelected==true){
                props.setGameState(2);
        }else {
            props.scoreUp();
            //change gameDeck isSelectedComponent
            let newGameDeck=gameDeck;
            newGameDeck[cid].isSelected=true;
            setGameDeck(newGameDeck);
            randomize();
        }




        
    }
    useEffect(()=>{//on Mount
        //gameDeck Value initialization
        for(let i=0;i<20;i++){
            deck.push({isSelected:false,cid:i})
        }
        setGameDeck(deck);
        {randomize()}
    },[])
    
    return(
        <div>
            <Card shownCards={shownCard} pickCard={pickCard}></Card>
        </div>
    )
}