import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Logo.css';
export default class Logo extends Component {
    render() {
        return (
            <div>
               <h1 className='logo'> <Link to='/'>Blitz</Link></h1>
            </div>
        )
    }
}
