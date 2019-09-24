import React, { Component } from 'react'
import './LeaderBoard.css'
import GameContext from './GameContext'


export default class LeaderBoard extends Component {

    static contextType = GameContext;

    render() {
        return (
            <div className='left'>
                 <h1 className='leaderBoard'>Blitz Leadboard</h1>
                {this.context.leader.map((item, index) => {
                    return (
                    <p key={index} className='leaderBoardScore'>{`${item.users} - ${item.score}`}</p>
                    )
                })}
            </div>
        )
    }
}
