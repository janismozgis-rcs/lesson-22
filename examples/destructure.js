const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 35,
};

const { lastName, age, firstName } = person;

console.log(firstName);
console.log(lastName);
console.log(age);


const cars = ['vaz', 'zaz', 'gaz', 'maz'];

const [car1, car2] = cars;

console.log(car1);
console.log(car2);

function useState(defaultValue) {
    return [
        defaultValue,
        (newValue) => {
            defaultValue = newValue;
        }
    ]
}

const [someText, setSomeText] = useState('foo');