class CreditCard {
    firstName: string;
    lastName: string;
    email: string;
    cardNumber: string;
    cvv: string;
    expirationMonth: number;
    expirationYear: number;
    address: string;
    city: string;
    state: string;
    zipCode: string;

    constructor() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.cardNumber = '';
        this.cvv = '';
        this.expirationMonth = 0;
        this.expirationYear = 0;
        this.address = '';
        this.city = '';
        this.state = '';
        this.zipCode = '';
    }
}

export default CreditCard;