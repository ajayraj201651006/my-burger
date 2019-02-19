import React, { Component } from 'react';
import classes from './ContactData.css';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';

class ContactData extends Component {
     
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Ajay Raj',
                address: {
                    street: "Ram Gali N0.3",
                    zipCode: 302004,
                    country: 'India'
                },
                email: 'test@20.com'
            },
            deliveryMethod: 'Fastest'
        }

        axios.post('/orders.json', order).then(response=>{
            this.setState({loading: false});
        }).catch(error=>{
            this.setState({loading: false});
        });
    }

    render() {
        return (
            <div className={classes.ContactData}>
               <h2>Enter Your Contact Details</h2>
               <form>
                   <input className={classes.Input} type="text" name="Name" placeholder="Your Name" />
                   <input className={classes.Input} type="email" email="Email" placeholder="Your Email" />
                   <input className={classes.Input} type="text" street="Street" placeholder="Street" />
                   <input className={classes.Input} type="text" postal="Postal" placeholder="Postal Code" />
                   <Button btnType="Success" clicked={this.orderHandler}>Order Now</Button>   
               </form>
            </div>
        );
    }
}

export default ContactData;