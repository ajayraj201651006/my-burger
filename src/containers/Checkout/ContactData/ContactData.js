import React, { Component } from 'react';
import classes from './ContactData.css';
import Button from '../../../components/UI/Button/Button';

class ContactData extends Component {
     
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    render() {
        return (
            <div className={classes.ContactData}>
               <h2>Enter Your Contact Details</h2>
               <Form>
                   <input className={classes.Input} type="text" name="Name" placeholder="Your Name" />
                   <input className={classes.Input} type="email" email="Email" placeholder="Your Email" />
                   <input className={classes.Input} type="text" street="Street" placeholder="Street" />
                   <input className={classes.Input} type="text" postalCode="PostalCode" placeholder="PostalCode" />
                   <Button btnType="Success">Order Now</Button>   
               </Form>
            </div>
        );
    }
}

export default ContactData;