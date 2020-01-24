import React from 'react';

interface Props {
  color: string;
}

interface States {
  count: number;
}

class CounterButton extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  shouldComponentUpdate(nextProps: Props, nextState: States): boolean {
    const { count } = this.state;
    if (count !== nextState.count) {
      return true;
    }

    return false;
  }

  updateCount: React.EventHandler<
    React.MouseEvent<HTMLButtonElement, MouseEvent>
  > = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };

  render(): JSX.Element {
    const { color } = this.props;
    const { count } = this.state;
    return (
      <button
        type="button"
        id="counter"
        color={color}
        onClick={this.updateCount}
      >
        Count:&nbsp;
        {count}
      </button>
    );
  }
}

export default CounterButton;
