import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const sidedrawer = (props) => {
    
    return(
            <div>
               <Logo />
               <nav>
                  <NavigationItems />
               </nav>
            </div>
    	);
};

export default sidedrawer;