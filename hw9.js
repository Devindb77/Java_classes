class Dog {
    constructor(food, drink) {
        this._drink = drink;
        this._food = food;
    }
    get food() {
        console.log(`we are getting ${this._food}`);
        return this._food;
    }
    get drink() {
        console.log(`im dehydrated ${this._drink}`);
        return this._drink;
    }
    eat() {
        console.log(` The dog eats ${this._food}`);
    }


}

var food = new Dog("steak", "juice");
console.log(food.food);
food.eat();
food.drink;



class cat extends Dog {
    constructor(play, sleep, food, drink) {
        super(food, drink)
        this._play = play;
        this._sleep = sleep;
        this._food = food;
        this._drink = drink;
    }
    get play() {
        console.log(`Time to play ${this._play}`);
        return this._play;
    }
    get sleep() {
        console.log(`it is ${this._sleep}`);
        return this._sleep;
    }
    get food() {
        return this._food;
    }
    get drink() {
        return this._drink;
    }
    get play() {
        return this._play
    }
    sleep() {
        console.log(`the dog is ${this._sleep}`);
    }
}
var Henry = new Dog("chicken", "Sleepytime", "ball", "water");
console.log(Henry.play);
console.log(Henry.sleep);
console.log(Henry.food);
console.log(Henry.drink);