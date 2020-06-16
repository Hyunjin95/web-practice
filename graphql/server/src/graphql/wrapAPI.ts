import axios, { AxiosResponse } from 'axios';

const API_URL = 'https://yts.am/api/v2/list_movies.json?';

export interface Movie {
  id: number;
  title: string;
  rating: number;
  summary?: string;
  language?: string;
}

interface Response {
  data: {
    movies: Movie[];
  };
}

export const getMovies = async (limit = 5, rating = 0): Promise<Movie[]> => {
  const res: AxiosResponse<Response> = await axios.get(API_URL, {
    params: {
      limit,
      minimum_rating: rating,
    },
  });

  const { data } = res;
  return data.data.movies;
};
