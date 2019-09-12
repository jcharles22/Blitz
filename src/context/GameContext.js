import React, { Component } from 'react'
import BrickBreaker from '../BrickBreaker';

const GameContext = React.createContext({
    setGame: () => {},
    setCanvas: () => {},
    updateScore: () => {},
    updateLife: () => {},
})

export default GameContext

export class GameProvider extends Component {
    state = {
        game: 0 ,
        score: 0,
        canvas: {},
        ctx: {},
        life: true
    };
    
    setCanvas =(canvas, ctx) =>{
        this.setState({ canvas, ctx})
    }

    setGame=(canvas, ctx)=>{
   
        console.log(this.state)
    }
    updateScore=(score)=>{
        this.setState({
            score: score,
            life: false
        })
        console.log(this.state)  
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
        }
    return(
            <GameContext.Provider value={value}>
                {this.props.children}
            </GameContext.Provider>
        )

    }
}

