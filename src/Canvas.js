
import React from 'react';
import GameContext from './context/GameContext'
import './Canvas.css';
class Canvas extends React.Component {

  static contextType = GameContext;
  
    state = {
        game : "BrickBreaker",
        level : "Easy",
        score : 0,
        mess : false
    };
    componentDidMount() {   
        this.game();
      }
      
    handleNext(){
        this.setState({score: 1})
    }
    game(){
      const canvas = this.refs.canvas
      const ctx = canvas.getContext("2d")
      this.context.playGame(canvas,ctx)
      }
    
    
    
    render() {
        return(
          <div className='right'>
            <div>
            <canvas ref="canvas" className='c' width={800} height={500} />
            <p className='score'>a</p>
            </div>
          </div>
        )
      }
    }
    export default Canvas