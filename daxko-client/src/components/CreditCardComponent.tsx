import { ChangeEventHandler } from "react";
import CreditCard from "../data/model/CreditCard";
import BaseComponent from "./BaseComponent";

type CreditCardProps = {
    creditCard: CreditCard;
    inputChange: (property: string) => ChangeEventHandler<HTMLInputElement> | undefined;
}

type CreditCardState = {
}

class CreditCardComponent extends BaseComponent<CreditCardProps, CreditCardState> {
    
    render() {
        let card = this.props.creditCard;
        return <div>
            <div className="row">
                <div className="col">
                    <h3>Contact Info</h3>
                </div>
            </div>
            
            <div className="row mb-3">
                <div className="col">
                    <input className="form-control" name="firstName" placeholder="First Name" onChange={this.props.inputChange('firstName')} value={card.firstName} />
                </div>
                <div className="col">
                    <input className="form-control" name="lastName" placeholder="Last Name" onChange={this.props.inputChange('lastName')} value={card.lastName} />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <input className="form-control" name="email" placeholder="Email Address" onChange={this.props.inputChange('email')} value={card.email} />
                </div>
            </div>
            <div className="row">
                <h3>Payment Information</h3>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <input className="form-control" name="address" placeholder="Address" onChange={this.props.inputChange('address')} value={card.address} />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <input className="form-control" name="city" placeholder="City" onChange={this.props.inputChange('city')} value={card.city} />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <input className="form-control" name="state" placeholder="State" onChange={this.props.inputChange('state')} value={card.state} />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <input className="form-control" name="zipCode" placeholder="Zip Code" onChange={this.props.inputChange('zipCode')} value={card.zipCode} />
                </div>
            </div>
            <div className="row">
                <h3>Credit Card Information</h3>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <input className="form-control" name="cardNumber" placeholder="Card Number" onChange={this.props.inputChange('cardNumber')} value={card.cardNumber} />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <input className="form-control" name="expirationMonth" placeholder="Exp. Month" onChange={this.props.inputChange('expirationMonth')} value={card.expirationMonth > 0 ? card.expirationMonth : ''} />
                </div>
                <div className="col">
                    <input className="form-control" name="expirationYear" placeholder="Exp. Year" onChange={this.props.inputChange('expirationYear')} value={card.expirationYear > 0 ? card.expirationYear : ''} />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <input className="form-control" name="cvv" placeholder="CVV" onChange={this.props.inputChange('cvv')} value={card.cvv} />
                </div>
                <div className="col"></div>
            </div>
        </div>
    }
}

export default CreditCardComponent;