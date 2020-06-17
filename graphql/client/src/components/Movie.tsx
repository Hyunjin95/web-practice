import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

const TOGGLE_LIKE_MOVIE = gql`
  mutation toggleLikeMovie($id: Int!, $isLiked: Boolean!) {
    toggleLikeMovie(id: $id, isLiked: $isLiked) @client
  }
`;

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

interface MovieProps {
  key: number;
  id: number;
  bg: string;
  isLiked: boolean;
  showLikeButton?: boolean;
}

const Movie = ({
  id,
  bg,
  isLiked,
  showLikeButton = false,
}: MovieProps): JSX.Element => {
  const [toggleLikeMovie] = useMutation(TOGGLE_LIKE_MOVIE, {
    variables: {
      id,
      isLiked,
    },
  });

  return (
    <Container>
      <Link to={`/${id}`}>
        <Poster bg={bg} />
      </Link>
      {showLikeButton && (
        <button type="button" onClick={() => toggleLikeMovie()}>
          {isLiked ? 'Unlike' : 'Like'}
        </button>
      )}
    </Container>
  );
};

export default Movie;
