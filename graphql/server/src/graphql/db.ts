export interface Person {
  name: string;
  age: number;
  country: string;
  gender: string;
  id: number;
}

export const people: Person[] = [
  {
    id: 1,
    name: 'Jin',
    age: 25,
    country: 'South Korea',
    gender: 'Male',
  },
  {
    id: 2,
    name: 'King',
    age: 15,
    country: 'USA',
    gender: 'Female',
  },
  {
    id: 3,
    name: 'Issac',
    age: 22,
    country: 'Australia',
    gender: 'Male',
  },
];

export const findPersonById = (id: number): Person => {
  const filteredPerson = people.filter((person) => person.id === id);
  return filteredPerson[0];
};

export const addPerson = (
  name: string,
  age: number,
  country: string,
  gender: string,
): Person => {
  const newPerson = {
    id: people.length + 1,
    name,
    age,
    country,
    gender,
  };
  people.push(newPerson);
  return newPerson;
};

export const deletePerson = (id: number): boolean => {
  const deletedPersonIndex = people.findIndex((person) => person.id === id);
  if (deletedPersonIndex === -1) {
    return false;
  }
  people.splice(deletedPersonIndex, 1);
  return true;
};
