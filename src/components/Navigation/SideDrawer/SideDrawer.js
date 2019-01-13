import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Aux from '../../../hoc/Auxes';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sidedrawer = (props) => {
    
    return(
    	    <Aux>
    	        <Backdrop show/>
	            <div className={classes.SideDrawer}>
	              <div className={classes.Logo}>
	                <Logo />
	              </div>
	               <nav>
	                  <NavigationItems />
	               </nav>
	            </div>
            </Aux>
    	);
};

export default sidedrawer;