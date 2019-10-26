import React from 'react';

interface IProps {
    color: string
};

interface IStates {
    count: number
};

class CounterButton extends React.Component<IProps, IStates> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            count: 0
        };
    }

    shouldComponentUpdate(nextProps: IProps, nextState: IStates): boolean {
        if (this.state.count !== nextState.count) {
            return true;
        }

        return false;
    }

    updateCount: React.EventHandler<React.MouseEvent<HTMLButtonElement, MouseEvent>> = () => {
        this.setState(state => {
            return {count: state.count + 1};
        });
    }

    render() {
        return (
            <button id='counter' color={this.props.color} onClick={this.updateCount}>
                Count: {this.state.count}
            </button>
        );
    }
}

export default CounterButton;