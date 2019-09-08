
import React from 'react';
import BrickBreaker from './BrickBreaker';
import drawPaddle from './pad';
class Canvas extends React.Component {

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
        this.setState(prevState => {
            
        })
    }
    game(){
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")
        // drawPaddle(canvas, ctx);
        if(this.state.score === 0) {
            BrickBreaker(canvas, ctx, this.handleNext);
        } else {
            drawPaddle(canvas, ctx);
        }
    }
    
    
    
    render() {
        return(
          <div>
            <canvas ref="canvas" id="myCanvas" width={640} height={425} />
            
          </div>
        )
      }
    }
    export default Canvas