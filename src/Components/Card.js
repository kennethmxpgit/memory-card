import React from 'react'
import './Card.css'

export default function Card(props){
    
    const cardData=[
        {pic:require('./images/p0.jfif'),name:'Iron-Man'},
        {pic:require('./images/p1.jfif'),name:'Thor'},
        {pic:require('./images/p2.jfif'),name:'Spider-Man'},
        {pic:require('./images/p3.jfif'),name:'Captain America'},
        {pic:require('./images/p4.jfif'),name:'Loki'},
        {pic:require('./images/p5.jfif'),name:'Dr.Strange'},
        {pic:require('./images/p6.jfif'),name:'Black Widow'},
        {pic:require('./images/p7.jfif'),name:'Rocket Racoon'},
        {pic:require('./images/p8.jfif'),name:'Scarlet Witch'},
        {pic:require('./images/p9.jfif'),name:'Black Panther'},
        {pic:require('./images/p10.jfif'),name:'Groot'},
        {pic:require('./images/p11.jfif'),name:'Hulk'},
        {pic:require('./images/p12.jfif'),name:'Ant-Man'},
        {pic:require('./images/p13.jfif'),name:'Star-Lord'},
        {pic:require('./images/p14.jfif'),name:'Winter Soldier'},
        {pic:require('./images/p15.jfif'),name:'Nick Fury'},
        {pic:require('./images/p16.jfif'),name:'Thanos'},
        {pic:require('./images/p17.jfif'),name:'Hawkeye'},
        {pic:require('./images/p18.jfif'),name:'Gamora'},
        {pic:require('./images/p19.jfif'),name:'Yondu'},
    ]

    const drawCard=(cid)=>{
        return(
            <div class='cardContainer gameCard' onClick={()=>props.pickCard(cid)}>
                <img class='cardPic' src={cardData[cid].pic}></img>
                <div class='cardText'>{cardData[cid].name}</div>
            </div>
        )
    }
    return(
            
            <div id='gameCardContainer'>
            {(props.shownCards==undefined) ? null: 
                
                props.shownCards.map((el)=>drawCard(el))
                }
            </div>


        
    )


}