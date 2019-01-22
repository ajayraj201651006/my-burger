import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxes/Auxes';

const withErrorHandler = (wrappedComponent) => {
	return class extends Component {
		render() {
			return(
                   <Aux>
                    <Modal show>
                        something went wrong!!
                    </Modal>
                    <wrappedComponent {...this.props}/>    
                   </Aux>
				);
		}
	} 
}

export default withErrorHandler;