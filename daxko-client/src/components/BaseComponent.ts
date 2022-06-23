import { Component } from 'react';

class BaseComponent<TProps, TState> extends Component<TProps, TState> {

    inputChange(property : string) {
      return (e: any) => {
          //console.log('prev state:', this.state);
          //console.log('property: ', property, 'value: ',e.target.value.toString());
          this.setState({
              [property]: e.target.value
          } as any);
      };
    }
}

export default BaseComponent;