import React from 'react';

export default class PlayerCard extends React.Component{
    constructor(props){
        super(props);
    }

    //this.setState({ currentPlayer:  });

    render(){
        console.log( "[PLAYER Props]", this.props);

        const currentPlayer = this.props.currentPlayer;

        return (
            
            <div>
                <div className='card-container'>
                    <div className='card-name-container'>
                        <div className='card-name-value'>{ currentPlayer.name }</div>
                    </div>
                    <div className='card-stat-container'>
                        <div className='card-stat-label'>Health:</div>
                        <div className='card-health-value'>{ currentPlayer.health }</div>
                    </div>
                    <div className='card-stat-container'>
                        <div className='card-stat-label'>Damage:</div>
                        <div className='card-damage-value'>{ currentPlayer.damage }</div>
                    </div>
                    <div className='card-image-container'>
                        <img className='card-image' src={'src/img/transformers/' + currentPlayer.imageUrl }/>
                    </div>
                    <div className='buttons-container'>
                        <div className='character-attack-button-container'>
                            <button 
                                className='character-attack-button'
                                onClick={ this.props.attackEnemy.bind(this, this.props.currentEnemy) }

                                >ATTACK</button>
                        </div>
                        <div className='continue-button-container'>
                            <button className='continue-button'>Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}