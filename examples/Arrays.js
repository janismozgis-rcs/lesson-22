const numbers = [2, 6, 3, 5, 1, 7, 8, 9, 3, 2, 5];
const sum = numbers.reduce((carry, currentValue) => {
    return carry + currentValue;
}, 0);
console.log(sum);

// const cars = ['vaz', 'zaz', 'gaz', 'maz'];

const people = [
    {
        name: 'John',
        age: 18,
    },
    {
        name: 'Jane',
        age: 29,
    },
    {
        name: 'Billy',
        age: 42,
    },
];

const ageSum = people.reduce((carry, person) => {
    return carry + person.age;
}, 0);
console.log(ageSum);

const ageSum2 = people.reduce((carry, { age }) => {
    return carry + age;
}, 0);
console.log(ageSum2);

const ageSum3 = people.reduce((carry, { age }) => carry + age, 0);
console.log(ageSum3);



const numbers2 = [2, 6, 3, 5, 1, 7, 8, 9, 3, 2, 5];
const evenNumbers = numbers2.filter((number) => {
    return number % 2 == 0;
});
console.log(evenNumbers);

const oddNumbers = numbers2.filter((number) => number % 2 != 0);
console.log(oddNumbers);

const oldPeople = people.filter(({ age }) => age >= 21);
console.log(oldPeople);



const numbers3 = [2, 6, 3, 5, 1, 7, 8, 9, 3, 2, 5];
const newNumbers = numbers3.map((number) => {
    return number * number;
});
console.log(newNumbers);



const people2 = [
    {
        name: 'John',
        age: 18,
    },
    {
        name: 'Jane',
        age: 29,
    },
    {
        name: 'Billy',
        age: 42,
    },
];
const peopleWithNameage = people2.map((person) => {
    person.nameAge = `${person.age}-${person.name}`;
    return person;
});

console.log(peopleWithNameage);



const numbers4 = [2, 6, 3, 5, 1, 7, 8, 9, 3, 2, 5];

const sum3 = numbers4
    .filter((number) => number % 2 === 0)
    .map((number) => number * number)
    .reduce((carry, number) => carry + number, 0);

console.log(sum3);