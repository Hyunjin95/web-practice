import React from 'react';
import Card from './Card';

class CardList extends React.Component {
    render() {
        const cardComponent = this.props.robots.map(user =>
            <Card
                key={user.id}
                id={user.id}
                name={user.name}
                email={user.email}
            />
        );

        return <div>{cardComponent}</div>;
    }
}

export default CardList;