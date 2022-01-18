import React from 'react'

export default function Card(props){
    const cardData=[
        'Iron-man',
        'Thor',
        'Spider-man',
        'Captain America',
        'Loki',
        'Dr.Strange',
        'Black Widow',
        'Rocket Racoon',
        'Scarlet Witch',
        'Black Panther',
        'Groot',
        'Hulk',
        'Ant-Man',
        'Star-Lord',
        'Winter-Soldier',
        'Nick Fury',
        'Thanos',
        'Hawkeye',
        'Gamora',
        'Yondu',
        'Drax'
    ]
    return(
        <div>
            Your card is : {cardData[props.cid]}
            <img src="0.jpg"></img>
        </div>
    )
}