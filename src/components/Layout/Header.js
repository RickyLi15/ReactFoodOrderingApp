import {Fragment} from 'react';
import mealsImage from '../../assets/Meals.jpeg'
import React from "react";
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';


const Header = props => {
 return <Fragment>
    <header className={classes.header}>
        <h1>Ricky's Spices</h1>
        <HeaderCartButton onClick={props.onCartClick}/>
    </header>
    <div className={classes['main-image']}>
        <img src={mealsImage} alt="table of foods"/>
    </div>

 </Fragment>
};

export default Header;
