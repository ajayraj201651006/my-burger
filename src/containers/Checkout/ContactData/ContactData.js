import React, { Component } from 'react';
import classes from './ContactData.css';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import axios from '../../../axios-orders';
import { connect } from 'react-redux';

class ContactData extends Component {
     
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                        type: 'text',
                        placeholder: 'Your Name'
                    },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 10
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                        type: 'text',
                        placeholder: 'Street'
                    },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 10
                },
                valid: false,
                touched: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                        type: 'text',
                        placeholder: 'Zip Code'
                    },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 10
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                        type: 'text',
                        placeholder: 'Your Country'
                    },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 10
                },
                valid: false,
                touched: false
            },
            email:{
                elementType: 'input',
                elementConfig: {
                        type: 'email',
                        placeholder: 'Your Email'
                    },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 10
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                        options: [
                            {value: 'fastest', displayValue: 'Fastest'},
                            {value: 'cheapest', displayValue: 'Cheapest'}
                        ]
                    },
                value: '',
                validation: {},
                valid: true
            }
        },
        formIsValid: false,
        loading: false
    }

    checkValidity(value, rules) {
        let isValid = true;

        if(!rules) {
            return true;
        }

        if(rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if(rules.minLength) {
            isValid = value.length >= rules.minLength  && isValid;
        }

        
        if(rules.maxLength) {
            isValid = value.length <= rules.maxLength  && isValid;
        }

        return isValid;
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const formData = {};
        for(let key in this.state.orderForm) {
            formData[key] = this.state.orderForm[key].value;
        }
        const order = {
            ingredients: this.props.ings,
            price: this.props.price,
            orderData: formData
        }

        axios.post('/orders.json', order).then(response=>{
            this.setState({loading: false});
            this.props.history.push('/');
        }).catch(error=>{
            this.setState({loading: false});
        });
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };

        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
       
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for(let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid}); 
    }

    render() {
        const formElementArray = [];
        for(let key in this.state.orderForm){
            formElementArray.push({
                id: key,
                config: this.state.orderForm[key]  
            });
        }
        let form = (
            <form onSubmit = {this.orderHandler}>
                {formElementArray.map(formArray => (
                    <Input 
                           key={formArray.id}
                           elementType={formArray.config.elementType}
                           elementConfig={formArray.config.elementConfig}
                           value={formArray.config.value}
                           Invalid={!formArray.config.valid}
                           shouldValidate={formArray.config.validation}
                           touched={formArray.config.touched}
                           changed={(event) => this.inputChangedHandler(event, formArray.id)} />
                ))}
                   <Button btnType="Success" disabled={!this.state.formIsValid}>Order Now</Button>   
               </form>
        );

        if (this.state.loading) {
           form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
               <h2>Enter Your Contact Details</h2>
               {form}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    }
}

export default connect(mapStateToProps)(ContactData);