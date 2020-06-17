import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface MovieProps {
  key: number;
  id: number;
  bg: string;
}

const Container = styled.section`
  height: 400px;
  border-radius: 7px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: transparent;
`;

interface bgProps {
  bg: string;
}

const Poster = styled.div`
  background-image: url(${(props: bgProps) => props.bg});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
  border-radius: 7px;
`;

const Movie = ({ id, bg }: MovieProps): JSX.Element => {
  return (
    <Container>
      <Link to={`/${id}`}>
        <Poster bg={bg} />
      </Link>
    </Container>
  );
};

export default Movie;
