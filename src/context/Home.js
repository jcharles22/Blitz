import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <>
                <div className="GameList">
                    <p className='pracDesc'>Main Game:</p>
                    <div>
                     <Link to='/BlitzGame'><div className='game'>
                         <p>PLAY BLITZ</p>
                            
                         </div>
                     </Link>
                    </div>
                    <p className='pracDesc'>Practice Mini-Games:</p>
                        <Link to='/GrabTheCoin'><p className='practiceGames coinGrab'>Coin Grab</p></Link>
                        <Link to='/BrickBreaker'><p className='practiceGames ballBounce'>Ball Bounce</p></Link>
                        <Link to='/Astorid'><p className='practiceGames dodgeRain'>Rain</p></Link>
                        <p className='comingSoon practiceGames'>Coming Soon</p>

                </div>
                <div className='DescContainer'>
                    <p className='Desc'>Welcome to Blitz:</p>
                    <p className='Desc'>You can play the main game or practice the mini-games individually.</p>
                    <p className='Desc'>In Blitz, you have one life. Survive as long as you can and score as many points as possible. There are three mini-games you have to survive each for 15 seconds to go to the next one, and after you finish all three you play them again, but the speed is increased. This continues until you get game over.</p>
                    <p className='Desc'>Try to beat the score on the leader board to get your initials on there.</p>
                </div>
            </>
        )
    }
}
