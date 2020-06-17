import { Person, people, findPersonById, addPerson, deletePerson } from './db';
import { Movie, getMovies, getMovie, getSuggestions } from './wrapAPI';

const resolvers = {
  Query: {
    people: (): Person[] => people,
    person: (_: unknown, { id }: { id: number }): Person => findPersonById(id),
    movies: async (
      _: unknown,
      { limit, rating }: { limit: number; rating: number },
    ): Promise<Movie[]> => getMovies(limit, rating),
    movie: async (_: unknown, { id }: { id: number }): Promise<Movie> =>
      getMovie(id),
    suggestions: async (_: unknown, { id }: { id: number }): Promise<Movie[]> =>
      getSuggestions(id),
  },
  Mutation: {
    addPerson: (
      _: unknown,
      {
        name,
        age,
        country,
        gender,
      }: { name: string; age: number; country: string; gender: string },
    ): Person => addPerson(name, age, country, gender),
    deletePerson: (_: unknown, { id }: { id: number }): boolean =>
      deletePerson(id),
  },
};

export default resolvers;
