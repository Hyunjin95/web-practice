/* eslint-disable camelcase */
import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';

import Movie from '../components/Movie';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.header`
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  height: 45vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Subtitle = styled.h3`
  font-size: 35px;
`;

const Loading = styled.section`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;

const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 60%;
  position: relative;
  top: -50px;
`;

interface Movie {
  id: number;
  medium_cover_image: string;
  isLiked: boolean;
}

interface MovieData {
  movies: Movie[];
}

interface MovieVars {
  limit: number;
  rating: number;
}

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
      isLiked @client
    }
  }
`;

const Home = (): JSX.Element => {
  const { loading, error, data } = useQuery<MovieData>(GET_MOVIES);

  return (
    <Container>
      <Header>
        <Title>Practice GraphQL with React!</Title>
        <Subtitle>GraphQL is awesome.</Subtitle>
      </Header>
      {loading && <Loading>Loading data...</Loading>}
      {error && (
        <h1>
          Error occured...
          <span role="img" aria-label="sad">
            😢
          </span>
        </h1>
      )}
      <Movies>
        {data?.movies?.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            isLiked={movie.isLiked}
            bg={movie.medium_cover_image}
            showLikeButton
          />
        ))}
      </Movies>
    </Container>
  );
};

export default Home;
