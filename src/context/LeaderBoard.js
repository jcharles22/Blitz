import React, { Component } from 'react'
import './LeaderBoard.css'
import GameContext from './GameContext'


export default class LeaderBoard extends Component {

    static contextType = GameContext;

    state ={
        leader : [{"ABC": 123}]
    }
    componentDidMount() {
        setTimeout(() => {this.setLeaderBoard(); }, 300)
   
    }
    setLeaderBoard=() =>{
        this.setState({leader: this.context.leader})
    }

    // getScores=()=> {
    //     fetch(`${config.API_ENDPOINT}`)
    //         .then(response => response.json())
    //         .then(response => this.setState({leader:response}))
    // }

    render() {
        return (
            <div className='left'>
                <h1 className='leaderBoard'>LeaderBoard</h1>
                {this.state.leader.map((item, index) => {
                    return (
                    <p key={index} className='leaderBoardScore'>{`${item.users} ${item.score}`}</p>
                    )
                })}
                {/* <p className='leaderBoardScore'>JTC 800</p>
                <p className='leaderBoardScore'>JTC 700</p>
                <p className='leaderBoardScore'>JTC 600</p>
                <p className='leaderBoardScore'>JTC 500</p>
                <p className='leaderBoardScore'>JTC 400</p> */}
            </div>
        )
    }
}
