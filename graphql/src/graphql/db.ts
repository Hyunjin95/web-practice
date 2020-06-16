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
  const filteredPerson = people.filter((element) => element.id === id);
  return filteredPerson[0];
};
