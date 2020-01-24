import React, { Component } from 'react';
import CounterButton from './CounterButton';

class Header extends Component {
  shouldComponentUpdate(): boolean {
    return false;
  }

  render(): JSX.Element {
    return (
      <>
        <h1 className="f1">Robot Friends</h1>
        <CounterButton color="red" />
      </>
    );
  }
}

export default Header;
