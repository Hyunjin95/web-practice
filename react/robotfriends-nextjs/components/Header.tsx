import React, { Component } from 'react';
import CounterButton from './CounterButton';

interface IProps {};
interface IStates {};

class Header extends Component<IProps, IStates> {
    shouldComponentUpdate(nextProps: IProps, nextState: IStates): boolean {
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