import React from 'react';
import classes from './CheckoutSummary.css';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';


const checkoutSummary = (props) => {
	return(
        <div className={classes.CheckoutSummary}>
            <h1>Hii Foodieee You should continue</h1>
            <div style={{width:'100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button btnType="Success">CANCEL</Button>
            <Button btnType="Danger">CONTINUE</Button>
        </div>
	);
}

export default checkoutSummary;