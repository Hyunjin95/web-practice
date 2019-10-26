import React from 'react';
import Card from './Card';
import { IRobot } from '../pages/index';

const CardList = ({ robots }: {robots: Array<IRobot>}) => {
    const cardComponent = robots.map((user, i) =>
        <Card
            key={i}
            id={user.id}
            name={user.name}
            email={user.email}
        />
    );

    return (<React.Fragment>{cardComponent}</React.Fragment>);
};

export default CardList;