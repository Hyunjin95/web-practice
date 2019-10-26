import React from 'react';
import Card from './Card';
import { IRobot } from '../types';

const CardList = ({ robots }: {robots: Array<IRobot>}) => {
    const cardComponent = robots.map((user, i) =>
        <Card
            key={i}
            id={user.id}
            name={user.name}
            email={user.email}
        />
    );

    return <div>{cardComponent}</div>;
};

export default CardList;