import { ChangeEventHandler, Component } from "react";
import Gift from "../data/model/Gift";

type DonationSelectorProps = {
    gifts: Gift[]
    formatter: Intl.NumberFormat;
    amount: number | null;
    inputChange: (property: string) => ChangeEventHandler<HTMLInputElement> | undefined;
    updateDonation: (amount: number | null) => void;
}

type DonationSelectorState = {
    isCustomAmount: boolean;
}

class DonationSelectorComponent extends Component<DonationSelectorProps, DonationSelectorState> {
    constructor(props: DonationSelectorProps) {
        super(props);
        this.state = {
            isCustomAmount: false,
        };
    }

    selectGiftAmount(gift: Gift | null) {
        return () => {
            this.props.updateDonation(gift?.minDonation ?? null);
            this.setState({
                isCustomAmount: gift == null
            });
        };
    }

    getGift(amount: number) {
        var gifts = this.props.gifts.filter(x => amount >= x.minDonation && (x.maxDonation == null || amount < x.maxDonation));
        return gifts.length > 0 ? gifts[0] : null;
    }



    render() {
        return <div className="donation-selector">
            {this.props.gifts.map((gift, key) => {
                return <button key={key} type="button" className="btn btn-lg btn-outline-dark donation-button" onClick={this.selectGiftAmount(gift)}>{this.props.formatter.format(gift.minDonation)}</button>
            })}

            <button type="button" className="btn btn-lg btn-outline-dark donation-button" onClick={this.selectGiftAmount(null)}>Custom</button>

            {this.state.isCustomAmount && <><br/><input type="input" className="form-control" placeholder="Custom Donation Amount" value={this.props.amount ?? ''} onChange={this.props.inputChange('amount')} /></>}

            {this.props.amount && this.getGift(this.props.amount) && <div>
                By donating {this.props.formatter.format(this.props.amount)} you will receive a free {this.getGift(this.props.amount)?.name}!<br/><br/>
            </div>}
        </div>
    }
}

export default DonationSelectorComponent;