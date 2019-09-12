import React, { Component } from 'react'
import Canvas from '../Canvas';

export default class GameBoard extends Component {
    render() {
        return (
            <div className='right'>   
                <Canvas></Canvas>
            </div>
        )
    }
}
