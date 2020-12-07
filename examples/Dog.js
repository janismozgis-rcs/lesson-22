import Animal from './Animal.js';

class Dog extends Animal {

    bark() {
        console.log(this.name + ' is barking');    
    }
}

export default Dog;