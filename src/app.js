import React from 'react';
import Header from './layout/header';
import PlayerCard from './components/playerCard';
import EnemyCard from './components/enemyCard';

const enemies = [
  	{ "name": "Megatron",  "damage": 20,"imageUrl": "megatron.jpg", "skillLevel": 8, "armour": 10, "health": 100 },
    { "name": "Bonecrusher", "damage": 14, "imageUrl": "bonecrusher.jpg", "skillLevel": 4, "armour": 5  },
    { "name": "Blackout",  "damage": 16, "imageUrl": "blackout.jpg", "skillLevel": 5, "armour": 3  },
    { "name": "Unicron",  "damage": 15, "imageUrl": "unicron.jpg", "skillLevel": 9, "armour": 5  },
    { "name": "Tarantulas",  "damage": 14, "imageUrl": "tarantulas.gif", "skillLevel": 4, "armour": 3  },
    { "name": "Star Scream", "damage": 18, "imageUrl": "starscream.jpg", "skillLevel": 7, "armour": 8  },
    { "name": "Soundwave",  "damage": 14, "imageUrl": "soundwave.jpg", "skillLevel": 3, "armour": 4  },
    { "name": "Devastator",  "damage": 16, "imageUrl": "devastator.jpg", "skillLevel": 4, "armour": 6  },
    { "name": "Barricade",  "damage": 15, "imageUrl": "barricade.jpg", "skillLevel": 4, "armour": 7  }
 ]

const players = [
    { "playerName": "", "name": "Optimus Prime", "health": 120, "damage": 30, "skillLevel": 5, "armour": 10, "imageUrl": "optimus-prime.jpg" },
    { "playerName": "", "name": "BumbleBee", "health": 100, "damage": 30, "skillLevel": 5, "armour": 10, "imageUrl": "bumblebee.jpg" },
    { "playerName": "", "name": "Iron Hide", "health": 100, "damage": 30, "skillLevel": 5, "armour": 10, "imageUrl": "ironhide.jpg"},
    { "playerName": "", "name": "Ratchet", "health": 100, "damage": 30, "skillLevel": 5, "armour": 10, "imageUrl": "ratchet.jpg"}
]


const currentPlayer = {};
const currentEnemy  = {};

export default class App extends React.Component{
    
   constructor(props) {
        super(props);
        
        this.state = { 
            enemies, players, currentEnemy, currentPlayer  
        }
    }

    render(){

        return (
            <div className="main-container">
                <Header/>
                <PlayerCard 
                    players = { this.state.players }
                    currentPlayer = { this.state.currentPlayer } />
                <EnemyCard 
                    enemies = { this.state.enemies }
                    currentEnemy = { this.state.currentEnemy }   />
            </div>
        )    
    }

   
   

}