import { Modal } from "react-bootstrap";
import { json } from "stream/consumers";
import { getEffectiveTypeParameterDeclarations } from "typescript";
import CreditCard from "../data/model/CreditCard";
import Donation from "../data/model/Donation";
import DonationError from "../data/model/DonationError";
import Gift from "../data/model/Gift";
import DonationApiService from "../services/DonationApiService";
import BaseComponent from "./BaseComponent";
import CreditCardComponent from "./CreditCardComponent";
import DonationSelectorComponent from "./DonationSelectorComponent";

type DonationFormProps = {

}

type DonationFormState = {
    gifts: Gift[];
    amount: number | null;
    creditCard: CreditCard;
    donationError: DonationError | null;
    isDonationSuccessful: boolean;
}

class DonationFormComponent extends BaseComponent<DonationFormProps, DonationFormState> {
    formatter: Intl.NumberFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
    apiService: DonationApiService = new DonationApiService();

    constructor(props: DonationFormProps) {
        super(props);

        this.state = {
            gifts: [],
            amount: null,
            creditCard: new CreditCard(),
            donationError: null,
            isDonationSuccessful: false
        };

        this.apiService.getAllGifts().then(gifts => {
            this.setState({
                gifts: gifts
            });
        });

        this.inputChange = this.inputChange.bind(this);
        this.creditCardInputChange = this.creditCardInputChange.bind(this);
        this.updateDonation = this.updateDonation.bind(this);
        this.hideErrorModal = this.hideErrorModal.bind(this);
        this.hideSuccessModal = this.hideSuccessModal.bind(this);
    }

    updateDonation(amount: number | null) {
        this.setState({
            amount: amount
        });
    }

    creditCardInputChange(property: string){
        return (e: any) => {
            this.setState({
                creditCard: {
                    ...this.state.creditCard,
                    [property]: e.target.value
                }
            } as any);
        };
    }

    submitForm() {
        return (e: any) => {
            let donation: Donation = {
                amount: this.state.amount!,
                creditCard: this.state.creditCard
            }

            this.apiService.postDonation(donation).then(success => {
                this.setState({
                    isDonationSuccessful: true
                })
            }).catch(err => {
                var donationError = new DonationError(JSON.parse(err.message));
                
                var errorList = '';
                donationError.errors.forEach((v, k) => {
                    errorList += v[0] + '<br/>\n';
                });

                console.log(errorList);
                this.setState({
                    donationError: donationError
                });
            });
            e.preventDefault();
        }
    }

    hideErrorModal() {
        this.setState({
            donationError: null
        });
    }

    hideSuccessModal() {
        this.setState({
            ...this.state,
            isDonationSuccessful: false,
            creditCard: new CreditCard(),
            amount: null,
        });
    }

    render() {

        return <>
            <form className="row mb-3" onSubmit={this.submitForm()}>
                <div className="row">
                    <div className="col-lg">
                        <DonationSelectorComponent gifts={this.state.gifts} formatter={this.formatter} amount={this.state.amount} inputChange={this.inputChange} updateDonation={this.updateDonation} />
                        {this.state.amount && this.state.amount > 0 && <>
                            <CreditCardComponent creditCard={this.state.creditCard} inputChange={this.creditCardInputChange} />
                            <div className="donate-button-container">
                                <button className="btn btn-primary btn-lg" type="submit">Donate {this.formatter.format(this.state.amount)}!</button>
                            </div>
                        </>}
                    </div>
                    <div className="col-lg"></div>
                </div>
            </form>
            {this.state.donationError && <Modal show={true} onHide={this.hideErrorModal}>
                <Modal.Header closeButton>
                    <h3>Error</h3>
                </Modal.Header>
                <Modal.Body>
                    <h5>We're sorry! {this.state.donationError.title}</h5>
                    <div dangerouslySetInnerHTML={{__html: this.state.donationError.errorList()}}></div>
                </Modal.Body>
            </Modal>}
            {this.state.isDonationSuccessful && <Modal show={true} onHide={this.hideSuccessModal}>
                <Modal.Header closeButton>Thank you!</Modal.Header>
                <Modal.Body>
                    Thank you for your generous donation of {this.formatter.format(this.state.amount ?? 0)} to the Wikimedia Foundation!<br/><br/> Your gift will be shipped to the address provided.
                </Modal.Body>
            </Modal>}
        </>
    }

}

export default DonationFormComponent;