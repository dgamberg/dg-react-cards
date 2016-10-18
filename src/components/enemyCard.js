import React from 'react';

export default class EnemyCard extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        console.log( "[ENEMY Props]", this.props);

        const currentEnemy = this.props.currentEnemy;

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
                    <div>
                    <button className='monster-attack-button'
                            onClick={ this.props.attackEnemy.bind(this ) }
                            >
                            Attack Character
                    </button>
                    </div>
                </div>
            </div>
        )
    }
}