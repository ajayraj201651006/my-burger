import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxes/Auxes';

const withErrorHandler = (wrappedComponent) => {
	return (props) => {
		return (
            <Aux>
               <Modal>
                   something went wrong!!
               </Modal>
               <wrappedComponent {...props}/>    
            </Aux>
        );
	}
}

export default withErrorHandler;