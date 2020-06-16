import { Person, people, findPersonById, addPerson, deletePerson } from './db';

const resolvers = {
  Query: {
    people: (): Person[] => people,
    person: (_: unknown, { id }: { id: number }): Person => findPersonById(id),
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
