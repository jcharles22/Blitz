import React, { Component } from 'react'
import GameContext from './GameContext'
import '../Canvas.css';
import BrickBreaker from '../BrickBreaker'
import AstroidGame from './Astorid/AstoridGame'
import GrabTheCoin from './GrabTheCoin/GrabTheCoinGame'

export default class GameBoard extends Component {

  static contextType = GameContext;
    
  state = {
    life: true,
    initails: 'ABC',
    sumbit: false,
    mode: 'start',
    score: 0,
    counter: 0,
    gameMultiplier: 1,
 };
 componentDidMount() {   
     this.context.updateLife();
   }
   
 game(){
     
     this.setState({
         mode: 'game'
     })
     setTimeout(()=>this.runGame(), 300)

   }
 
   updateMode=(score)=> {
       this.setState({   
           score,
           mode: 'gameOver'
       })

   }
   updateScore=(score)=> {
       this.setState({
           score,

       })
    }
    nextGame=(score)=> {
        if(this.state.counter < 2) {
        this.setState({
            score,
            counter: this.state.counter + 1,
        })
    } else {
        this.setState({
            score,
            counter: 0,
            gameMultiplier: this.state.gameMultiplier + .5,
        })
    }
        this.runGame();

       }
   
       nextLevel=()=> {
           this.setState={
               counter : 0,
               gameMultiplier: this.state.gameMultiplier +.5,
           }
       }
   
 runGame=()=>{
     const canvas = this.refs.canvas
     const ctx = canvas.getContext("2d")
     if(this.state.counter===0){
     BrickBreaker(canvas, ctx, this.updateMode, this.state.mode, this.nextGame, this.state, this.updateScore);
     } else if (this.state.counter === 1) {
         GrabTheCoin(canvas, ctx, this.updateMode, this.state.mode, this.nextGame, this.state, this.updateScore);
     } else if ( this.state.counter === 2) {
        AstroidGame(canvas, ctx, this.updateMode, this.state.mode, this.nextGame, this.state, this.updateScore);
     }
 }
 updateIntials=(e)=> {
     let newIntials = e.target.value;
     newIntials = newIntials.toUpperCase();
     this.setState({
         initails: newIntials
     }) 
 }
 submitInitals=(e)=> {
     this.setState({
         sumbit: true
     })
 }
 handleSubmit=(e)=> {
     e.preventDefault()
     this.setState({
         mode: 'gameOver'
     })
     this.context.submitUserScore(this.state.initails, this.state.score)
     this.props.history.push('/')
 }
 renderButtons=()=> {
     if(this.state.counter===1) {
        return (
            <div className=''>
                    <button id='upClick' ref='upClick'>Up</button>
                    <div className='moveContainer'>
                    <button id='leftClick' ref='leftClick'>left</button>
                    <button id='downClick' ref='downClick'>Down</button>
                    <button id='rightClick' ref='rightClick'>right</button>
                    </div>
                </div>
        )
     } else {
         return (
            <div className='moveContainer'>
                <button id='leftClick' ref='leftClick'>left</button>
                <button id='rightClick' ref='rightClick'>right</button>
            </div>
         )
     }
 }

        renderGame=()=> {
        if(this.state.mode === 'start') {
            return <button type='submit' className='start' onClick={()=> {this.game()}}>Start</button>
        } else if(this.state.mode === 'game') {
            return (
                <div>
                <canvas ref="canvas" className='c' width={800} height={500} />
                <div>
                    {this.renderButtons()}
                </div>
                </div>
            )
        } else if(this.state.mode === 'gameOver') {
            return (<div className='gameOver'>
                <h3 className='gameOverTitle'>Game Over</h3>
                <h4>{this.state.score}</h4>
                <input type='text' maxLength='3'  className='initals' value={this.state.initails} onChange={(e)=> this.updateIntials(e)}/>
                <button type='submit' className='initalsSubmit' onClick={(e) => this.handleSubmit(e)} >Enter</button>
            </div>)       
        }
    }

    
    render() {
        return(
            <div className='right'> 
              {this.renderGame()}
              <div className='DescContainer'>
                    <p className='Desc'>Blitz:</p>
                    <p className='Desc'>Use the Arrow keys to move.</p>
                    <p className='Desc'>You have one life. Survive as long as you can and score as many points as possible. There are three mini-games you have to survive each for 15 seconds to go to the next one, and after you finish all three you play them again, but the speed is increased. This continues until you get game over.</p>
                    <p className='Desc'>Try to beat the score on the leader board to get your initials on there.</p>

                </div>
              
            </div>
          )
      }
    }
  