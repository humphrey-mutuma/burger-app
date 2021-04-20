import React from 'react';
import classes from './Toolbar.css'
import Logo from '../../logo/logo'
import NavigationItems from '../NavigationItem/NavigationItems';


const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <Logo />
        <nav>
            <NavigationItems />  
        </nav>
    </header>
)

export default toolbar
