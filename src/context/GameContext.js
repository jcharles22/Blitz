import React, { Component } from 'react'
import BrickBreaker from '../BrickBreaker';
import config from '../config'

const GameContext = React.createContext({
    setGame: () => {},
    setCanvas: () => {},
    updateScore: () => {},
    updateLife: () => {},
    submitUserScore: () => {},
    getScores: () => {},
})

export default GameContext

export class GameProvider extends Component {
    state = {
        game: 0 ,
        score: 0,
        canvas: {},
        ctx: {},
        life: true,
        leader: [{"ABC": 123}]
    };
    submitUserScore=(users, score)=> {
        fetch(`${config.API_ENDPOINT}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                "users" : users,
                "score" : score
            })
        })
        setTimeout(() => {this.getScores(); }, 300)
    }
    getScores=()=> {
        fetch(`${config.API_ENDPOINT}`)
            .then(response => response.json())
            .then(response => {
                this.setState({leader: response})
            })

    }
    
    setCanvas =(canvas, ctx) =>{
        this.setState({ canvas, ctx})
    }

    updateScore=(score)=>{
        this.setState({
            score: score,
            life: false
        })
    }
    updateLife=()=>{
        this.setState({
            life: true
        })
    }



    playGame=(canvas, ctx)=> {
           BrickBreaker(canvas, ctx, this.updateScore)
    }

    render() {
        const value = {
          setGame: this.setGame,
          setCanvas: this.setCanvas,
          game: this.state.game,
          playGame: this.playGame,
          score: this.state.score,
          updateScore: this.updateScore,
          life: this.state.life,
          updateLife: this.updateLife,
          submitUserScore: this.submitUserScore,
          getScores: this.getScores,
          leader: this.state.leader,
        }
    return(
            <GameContext.Provider value={value}>
                {this.props.children}
            </GameContext.Provider>
        )

    }
}

