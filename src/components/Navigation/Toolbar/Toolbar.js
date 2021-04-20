import React from 'react';
import classes from './Toolbar.css'
import Logo from '../../logo/logo'
const toolbar = () => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <Logo />
        <nav>
            ...
        </nav>
    </header>
)

export default toolbar
