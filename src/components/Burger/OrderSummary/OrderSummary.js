import React from 'react';
import Aux from '../../../hoc/Auxes';

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
         </Aux>
        );
	};

export default ordersummary;