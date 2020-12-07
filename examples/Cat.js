import Animal from './Animal.js';

class Cat extends Animal {

    purr() {
        console.log(this.name + ' is purring 111');
    }
}

export default Cat;
