import React from 'react';
import Aux from '../../../hoc/Auxes';
import Button from '../../UI/Button/Button';

const ordersummary = (props) => {
	     const ingredientSummary = Object.keys(props.ingredients).map(igkey=>{
	     	return (
	     		<li key={igkey}>
	     		  <span style={{textTransform: 'captialize'}}>{igkey}</span>:{props.ingredients[igkey]}
	     		</li>
	     	);	
	     });

    return ( 
    	<Aux>
             <h3>Your Order</h3>
             <p>A delicious burger with the following ingredients:</p>
             <ul>
               {ingredientSummary}
             </ul>
             <p><strong>Total Price:{props.price.toFixed(2)}</strong></p>
             <p>You should continue to Checkout this burger.</p>
             <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
             <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
         </Aux>
        );
	};

export default ordersummary;