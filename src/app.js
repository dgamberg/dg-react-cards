import React from 'react';
import Header from './layout/header';
import PlayerCard from './components/playerCard';
import EnemyCard from './components/enemyCard';
import GameMessages from './components/gameMessages';

const enemies = [
  	{ "type": "enemy", "name": "Megatron",  "damage": 20,"imageUrl": "megatron.jpg", "skillLevel": 8, "armour": 10, "health": 100 },
    { "type": "enemy", "name": "Bonecrusher", "damage": 14, "imageUrl": "bonecrusher.jpg", "skillLevel": 4, "armour": 5  },
    { "type": "enemy", "name": "Blackout",  "damage": 16, "imageUrl": "blackout.jpg", "skillLevel": 5, "armour": 3  },
    { "type": "enemy", "name": "Unicron",  "damage": 15, "imageUrl": "unicron.jpg", "skillLevel": 9, "armour": 5  },
    { "type": "enemy", "name": "Tarantulas",  "damage": 14, "imageUrl": "tarantulas.gif", "skillLevel": 4, "armour": 3  },
    { "type": "enemy", "name": "Star Scream", "damage": 18, "imageUrl": "starscream.jpg", "skillLevel": 7, "armour": 8  },
    { "type": "enemy", "name": "Soundwave",  "damage": 14, "imageUrl": "soundwave.jpg", "skillLevel": 3, "armour": 4  },
    { "type": "enemy", "name": "Devastator",  "damage": 16, "imageUrl": "devastator.jpg", "skillLevel": 4, "armour": 6  },
    { "type": "enemy", "name": "Barricade",  "damage": 15, "imageUrl": "barricade.jpg", "skillLevel": 4, "armour": 7  }
 ]

const players = [
    { "type": "player", "name": "Optimus Prime", "health": 120, "damage": 30, "skillLevel": 8, "armour": 10, "imageUrl": "optimus-prime.jpg" },
    { "type": "player", "name": "BumbleBee", "health": 100, "damage": 30, "skillLevel": 7, "armour": 10, "imageUrl": "bumblebee.jpg" },
    { "type": "player", "name": "Iron Hide", "health": 100, "damage": 30, "skillLevel": 6, "armour": 10, "imageUrl": "ironhide.jpg"},
    { "type": "player", "name": "Ratchet", "health": 100, "damage": 30, "skillLevel": 5, "armour": 10, "imageUrl": "ratchet.jpg"}
]

const options = {

}

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
        
        console.log( "[MAIN STATE]", this.state);
        
        this.generateEnemy(this.state.enemies);
        this.state.currentPlayer = this.state.players[0];
        
        return (
            <div className="main-container">
                
                <Header/>
                
                <PlayerCard 
                    players = { this.state.players }
                    currentPlayer = { this.state.currentPlayer }
                    currentEnemy = { this.state.currentEnemy }
                    attackEnemy = { this.attackEnemy.bind(this, this.state.currentEnemy) } />
                
                <EnemyCard 
                    enemies = { this.state.enemies }
                    currentPlayer = { this.state.currentPlayer }
                    currentEnemy = { this.state.currentEnemy }
                    attackEnemy = { this.attackEnemy.bind(this, this.state.currentPlayer ) } />
                
                <GameMessages />

            </div>
        )    
    }

    generateHealth(level) {
        let min = 20;
        let max = level * 20;
        let healthToReturn =  Math.random() * (max - min) + min;
        this.state.currentEnemy.health = healthToReturn.toFixed(0);
    }

    generateEnemy(enemies){
        let range = enemies.length;
        let enemyInt = Math.floor((Math.random() * range));
        let randomEnemy = enemies[enemyInt];
        this.state.currentEnemy = randomEnemy;
        this.generateHealth(randomEnemy.skillLevel);
        
    }

    attackEnemy(target){
        console.log("Attacking.. ", target.name);
        let multiplier = target.skillLevel *2;
        let range = 30;
        let randNum = Math.floor((Math.random() * range) +1);
        console.log("Num: ",randNum);

        if (randNum >= multiplier){
            
            //hit
            console.log("Hit!!! " + target.name);
            
            //damage your enemy
            this.damageEnemy(target);
        }
        else {
            //miss
            console.log("Missed " + target.name);
        }
    }

    damageEnemy(target){
        let newTargetHealth = parseInt(target.health) - parseInt(target.damage);   

        console.log("Damage :" + target.damage);
        console.log("Health :" + target.health);
        console.log("New Health to be saved: " + newTargetHealth);

        console.log("Target Type ", target.type);
        if(target.type == "enemy"){
            this.state.currentEnemy.health = newTargetHealth
            console.log(currentEnemy.name+ "Health is now ", this.state.currentEnemy.health);
       
        }
        else if (target.type == "player"){
            this.state.currentPlayer.health = newTargetHealth
            console.log(currentEnemy.name+ "Health is now ", this.state.currentEnemy.health);
       
        }
        else {
            console.log("No Target Type");
        }

    }

}