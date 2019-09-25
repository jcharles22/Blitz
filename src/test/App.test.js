import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Logo from '../context/Logo'
import Home from '../context/Home';
// import LeaderBoard from '../context/LeaderBoard';
import GameBoard from '../context/GameBoard';
import BrickBreakerCanvas from '../BrickBreakerCanvas';
import AsotridCanvas from '../context/Astorid/AstoridCanvas'
import GrabTheCoinCanvas from '../context/GrabTheCoin/GrabTheCoinCanvas'


it('Home', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><Home /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('Logo', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><Logo /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('GameBoard', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><GameBoard /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('BrickBreaker', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><BrickBreakerCanvas /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('AsotridCanvas', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><AsotridCanvas /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('GrabTheCoin', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><GrabTheCoinCanvas /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });




    // <Logo></Logo>

    // <LeaderBoard></LeaderBoard>

    // <Route path='/' exact component = {Home} />

    // <Route path='/BlitzGame' exact component = {GameBoard} />

    // <Route path='/GrabTheCoin' exact component = {({history}) =><GrabTheCoinCanvas history={history} /> }/>

    // <Route path='/BrickBreaker' exact component = {({history}) =><BrickBreakerCanvas history={history} /> }/>

    // <Route path='/Astorid' exact component = {({history}) => <AsotridCanvas history={history} /> }/>
