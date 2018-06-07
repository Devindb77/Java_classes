class Dog {
    constructor(food,drink,play,run,bark,shed) {
        this._drink = drink;
        this._food = food;
        this._play = play;
        this._run = run;
        this._bark = bark;
        this._shed = shed;
    }
    get Food() {
       return this._food
    }
    get drink() {
        return this._drink
    }
    get run() {
        return this._run
    }
    get bark() {
        return this._bark
    }
    get play() {
        return this._play
    }
    get shed() {
        return this._shed
    }
    eat() {
    console.log(`${this._food} The dog eats`);
    }
    run() {
        console.log(`${this._run} The dog is Sprinting`);
    }
    bark() {
        console.log(`${this._bark} dog barking`);
    }
    shed() {
        console.log(`this dog is going to ${this._shed}`);
    }
    play() {
        console.log_(`go play ${this.play}`);
    }

}
var drink = new Dog("henry", "Water");
console.log(drink.drink);
console.log(drink.food);

var food = new Dog("Fiddo", "ribs");
console.log(food.food);
drink.eat();
drink.run();
drink.bark();
drink.shed();

food.run();
food.eat();
food.bark();
food.shed();
