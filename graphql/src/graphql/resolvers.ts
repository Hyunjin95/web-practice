import { Person, people, findPersonById } from './db';

const resolvers = {
  Query: {
    people: (): Person[] => people,
    person: (_: unknown, { id }: { id: number }): Person => findPersonById(id),
  },
};

export default resolvers;
