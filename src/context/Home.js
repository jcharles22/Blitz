import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <>
                <div className="GameList">
                    <div>
                    <Link to='/BlitzGame'> <p className='game'>PLAY BLITZ</p></Link>
                    </div>
                    <p className='pracDesc'>Practice Games:</p>
                    {/* <div className='otherGames'> */}
                        <Link to='/pract'><p className='practiceGames one'>Practice</p></Link>
                        <Link to='/BrickBreaker'><p className='practiceGames two'>BrickBreaker</p></Link>
                        <Link to='/pract'><p className='practiceGames three'>Astroid</p></Link>
                    {/* </div> */}

                </div>
                <div className='DescContainer'>
                    <p className='Desc'>Blitz</p>
                    <p className='Desc'>Find out how long you can survive!</p>
                    <p className='Desc'>You have one life paly the minigame chanllenges and after you complete three it speeds up and it keeps speeding up unitl you die</p>
                    <p className='Desc'>Beat the score on the Leader board to get your initals up there</p>
                </div>
            </>
        )
    }
}
