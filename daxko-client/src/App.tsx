import './App.css';
import BaseComponent from './components/BaseComponent';
import DonationFormComponent from './components/DonationFormComponent';

type AppProps = {

};

type AppState = {
};

class App extends BaseComponent<AppProps, AppState> {

  render(){
    return (
      <div className="container">
        <header className="app-header">
          <img src="/wikipedia.png" width="150px" alt="Wikipedia logo" />
        </header>
        <h3>We ask you, humbly, to help.</h3>
        <p>
          We'll get straight to the point: Today we ask you to defend Wikipedia's independence.<br/><br/>

          We're a non-profit that depends on donations to stay online and thriving, but 98% of our readers don't give; they simply look the other way. If everyone who reads Wikipedia gave just a little, we could keep Wikipedia thriving for years to come. The price of a cup of coffee is all we ask.<br/><br/>

          When we made Wikipedia a non-profit, people told us we'd regret it. But if Wikipedia were to become commercial, it would be a great loss to the world.<br/><br/>

          Wikipedia is a place to learn, not a place for advertising. The heart and soul of Wikipedia is a community of people working to bring you unlimited access to reliable, neutral information.<br/><br/>

          We know that most people will ignore this message. But if Wikipedia is useful to you, please consider making a donation of $5, $20, $50 or whatever you can to protect and sustain Wikipedia.<br/><br/>

          Thanks,<br/><br/>

          <b>Jimmy Wales</b><br/>
          Wikipedia Founder <br/><br/>
        </p>

        <h3>Donate Today!</h3>
        <p>Select an amount to begin the process.</p>

        <DonationFormComponent />

        
        <div className="fixed-bottom align-middle powered-by">
          <hr />
          Powered by <img src="/daxko_logo_color.svg" height="20px" style={{margin: '10px'}} alt="daxko logo" /><img src="/daxko_logo.svg" height="20px" alt="daxko logo 2" />
        </div>
      
      </div>

    );
  }
  
}

export default App;
