import React, { Component } from 'react'
import './LeaderBoard.css'

export default class LeaderBoard extends Component {
    render() {
        return (
            <div className='left'>
                <h1 className='leaderBoard'>LeaderBoard</h1>
                <p className='leaderBoardScore'>JTC 800</p>
                <p className='leaderBoardScore'>JTC 700</p>
                <p className='leaderBoardScore'>JTC 600</p>
                <p className='leaderBoardScore'>JTC 500</p>
                <p className='leaderBoardScore'>JTC 400</p>
            </div>
        )
    }
}
