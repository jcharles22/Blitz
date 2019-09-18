import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Logo from './context/Logo';
import Home from './context/Home';
import LeaderBoard from './context/LeaderBoard';
import GameBoard from './context/GameBoard';
import BrickBreakerCanvas from './BrickBreakerCanvas';
import AsotridCanvas from './context/Astorid/AstoridCanvas'
import GrabTheCoinCanvas from './context/GrabTheCoin/GrabTheCoinCanvas'

function App() {
  return (
    <div className="App">
      <Logo></Logo>
      <div className='col'>
      <LeaderBoard></LeaderBoard>
      </div>
      <Route path='/' exact component = {Home} />
      <Route path='/BlitzGame' exact component = {GameBoard} />
      <Route path='/GrabTheCoin' exact component = {({history}) =><GrabTheCoinCanvas history={history} /> }/>
      <Route path='/BrickBreaker' exact component = {({history}) =><BrickBreakerCanvas history={history} /> }/>
      <Route path='/Astorid' exact component = {({history}) => <AsotridCanvas history={history} /> }/>
    </div>
  );
}

export default App;
