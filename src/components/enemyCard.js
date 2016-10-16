import React from 'react';

export default class EnemyCard extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        console.log( "[Props]", this.props);

        const currentEnemy = this.getRandomEnemy(this.props.enemies);
        
        currentEnemy.health = this.generateHealth(currentEnemy.skillLevel);

        return (
            
            <div>
            	<div className='monster-card-container'>
                    <div className='monster-card-name-container'>
                        <div className='monster-card-name-value'>{ currentEnemy.name }</div>
                    </div>
                    <div className='monster-card-stat-container'>
                        <div className='monster-card-stat-label'>Health:</div>
                        <div className='monster-card-health-value'>{ currentEnemy.health } </div>
                    </div>
                    <div className='monster-card-stat-container'>
                        <div className='monster-card-stat-label'>Damage:</div>
                        <div className='monster-card-damage-value'>{ currentEnemy.damage } </div>
                    </div>
                    <div className='monster-card-image-container'>
                        <img className='monster-card-image' src={ 'src/img/transformers/' + currentEnemy.imageUrl }/>
                    </div>
 
                </div>
            </div>
        )
    }

    generateHealth(level) {
        var min = 20;
        var max = level * 20;
        var healthToReturn =  Math.random() * (max - min) + min;
        return healthToReturn.toFixed(0);
    }

    getRandomEnemy(enemies){
        let range = enemies.length;
        let enemyInt = Math.floor((Math.random() * range));
        let randomEnemy = enemies[enemyInt];
        return randomEnemy;
    }
   
}