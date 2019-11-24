import React from 'react';

class Rank extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emoji: ''
        }
    }

    componentDidMount() {
        this.getEmoji(this.props.entries);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.entries === this.props.entries && prevProps.name === this.props.name) {
            return null;
        }
        this.getEmoji(this.props.entries);
    }

    getEmoji = (entries) => {
        fetch(`https://5jxq4vx8x9.execute-api.us-east-1.amazonaws.com/dev/rank?rank=${entries}`)
            .then(res => res.json())
            .then(data => this.setState({ emoji: data.input }))
            .catch(err => console.log(err));
    }

    render() {
        const { name, entries } = this.props;
        return (
            <div>
                <div className='white f3'>
                    {`${name}, your current count number is ...`}
                </div>
                <div className='white f1'>
                    {entries}
                </div>
                <div className='white f3'>
                    {`Your Rank Badge: ${this.state.emoji}`}
                </div>
            </div>
        )
    }
}

export default Rank;