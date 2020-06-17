/* eslint-disable camelcase */
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';

import Movie from '../components/Movie';

const Container = styled.main`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.section`
  margin-left: 10px;
  width: 50%;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 28px;
`;

interface bgProps {
  bg: string | undefined;
}

const Poster = styled.div`
  width: 25%;
  height: 60%;
  background-color: transparent;
  background-image: url(${(props: bgProps) => props.bg});
  background-size: cover;
  background-position: center center;
`;

const SuggestionContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 60%;
  position: relative;
`;

interface Movie {
  title: string;
  rating: number;
  medium_cover_image: string;
  language: string;
  description_intro: string;
}

interface Suggestion {
  id: number;
  medium_cover_image: string;
}

interface MovieData {
  movie: Movie;
  suggestions: Suggestion[];
}

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      title
      medium_cover_image
      language
      rating
      description_intro
    }
    suggestions(id: $id) {
      id
      medium_cover_image
    }
  }
`;

interface ParamTypes {
  id: string;
}

const Detail = (): JSX.Element => {
  const { id } = useParams<ParamTypes>();
  const { loading, data } = useQuery<MovieData>(GET_MOVIE, {
    variables: { id: parseInt(id, 10) },
  });

  return (
    <>
      <Link to="/" style={{ position: 'absolute', top: '16px', left: '16px' }}>
        Home
      </Link>
      <Container>
        <Column>
          <Title>{loading ? 'Loading...' : data?.movie.title}</Title>
          <Subtitle>
            {!loading &&
              data &&
              `${data?.movie?.language} · ${data?.movie?.rating}`}
          </Subtitle>
          <Description>
            {!loading && data?.movie?.description_intro}
          </Description>
        </Column>
        {!loading && <Poster bg={data?.movie?.medium_cover_image} />}
      </Container>
      <SuggestionContainer>
        <Title>{!loading && 'Suggestions'}</Title>
        <Movies>
          {!loading &&
            data?.suggestions?.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                bg={movie.medium_cover_image}
              />
            ))}
        </Movies>
      </SuggestionContainer>
    </>
  );
};

export default Detail;
