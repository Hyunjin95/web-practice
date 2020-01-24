import React from 'react';
import Card from './Card';
import { Robot } from '../pages/index';

const CardList = ({ robots }: { robots: Array<Robot> }): JSX.Element => {
  const cardComponent = robots.map((user) => (
    <Card key={user.id} id={user.id} name={user.name} email={user.email} />
  ));

  return <>{cardComponent}</>;
};

export default CardList;
