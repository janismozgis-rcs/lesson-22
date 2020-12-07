class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(this.name + ' is eating');
    }
}

export default Animal;