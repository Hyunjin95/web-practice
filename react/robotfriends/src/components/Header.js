import React, { Component } from 'react';
import CounterButton from './CounterButton';

class Header extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        return (
            <div>
                <h1 className="f1">Robot Friends</h1>
                <CounterButton color={'red'} />
            </div>
        );
    }
}

export default Header;