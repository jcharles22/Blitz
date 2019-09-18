import React, { Component } from 'react';
import GameContext from '../GameContext'
import '../../Canvas.css';
import '../../BrickBreakerCanvas.css'
import AstoridGame from './AstoridGame';

export default class BrickBreakerCanvas extends Component {
    static contextType = GameContext;
  
    state = {
       life: true,
       initails: 'ABC',
       sumbit: false,
       mode: 'start',
       score: 0
    };
    componentDidMount() {   
        this.context.updateLife();
 
      }
      
    handleNext(){
        this.setState({score: 1})
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

      
    runGame=()=>{
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")
        AstoridGame(canvas,ctx, this.updateMode)
    }
    updateIntials=(e)=> {
        console.log(e.target)
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
    handlePlayAgain=(e)=> {
        e.preventDefault()
        window.location.reload();
    }
    handleHome=(e)=> {
    this.props.history.push('/')
    }

    renderGame=()=> {
        if(this.state.mode === 'start') {
            return <button type='submit' className='start' onClick={()=> {this.game()}}>Start</button>
        } else if(this.state.mode === 'game') {
            return (
                <div>
                <canvas ref="canvas" className='c' width={800} height={500} />
                <button id='upClick' ref='upClick'>Up</button>
                <button id='leftClick' ref='leftClick'>left</button>
                <button id='rightClick' ref='rightClick'>right</button>
                <button id='downClick' ref='downClick'>Down</button>
                </div>
            )
        } else if(this.state.mode === 'gameOver') {
            return (<div className='gameOver'>
                <h3 className='gameOverTitle'>Game Over</h3>
                <h4>{this.state.score}</h4>
                <button type='submit' className='gameOverSubmit' onClick={(e) => this.handlePlayAgain(e)} >Play Again?</button>
                <button type='submit' className='gameOverSubmit' onClick={(e) => this.handleHome(e)} >Home Page</button>
            </div>)       
        }
    }

    
    render() {
        return(
          <div className='right'> 
            {this.renderGame()}
           
            <div className='DescContainer'>
            <p className='Desc'>Fixing Game</p>
          </div>
          </div>
        )
      }
}
