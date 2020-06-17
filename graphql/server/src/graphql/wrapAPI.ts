import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'https://yts.am/api/v2';
const MOVIE_LIST_URL = `${BASE_URL}/list_movies.json`;
const MOVIE_DETAIL_URL = `${BASE_URL}/movie_details.json`;
const MOVIE_SUGGESTION_URL = `${BASE_URL}/movie_suggestions.json`;

export interface Movie {
  id: number;
  title: string;
  rating: number;
  summary?: string;
  language?: string;
  descriptionIntro?: string;
}

interface ListResponse {
  data: {
    movies: Movie[];
  };
}

interface DetailResponse {
  data: {
    movie: Movie;
  };
}

export const getMovies = async (limit = 20, rating = 0): Promise<Movie[]> => {
  const {
    data: {
      data: { movies },
    },
  }: AxiosResponse<ListResponse> = await axios.get(MOVIE_LIST_URL, {
    params: {
      limit,
      minimum_rating: rating,
    },
  });

  return movies;
};

export const getMovie = async (id: number): Promise<Movie> => {
  const {
    data: {
      data: { movie },
    },
  }: AxiosResponse<DetailResponse> = await axios.get(MOVIE_DETAIL_URL, {
    params: {
      movie_id: id,
    },
  });

  return movie;
};

export const getSuggestions = async (id: number): Promise<Movie[]> => {
  const {
    data: {
      data: { movies },
    },
  }: AxiosResponse<ListResponse> = await axios.get(MOVIE_SUGGESTION_URL, {
    params: {
      movie_id: id,
    },
  });

  return movies;
};
