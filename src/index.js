import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GameProvider } from './context/GameContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <GameProvider>
            <App />
        </GameProvider>
    </BrowserRouter>, 
    document.getElementById('root'));


