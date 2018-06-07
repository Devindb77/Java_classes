class Dog {
    constructor(food,drink) {
        this._drink = drink;
        this._food = food;
    }
    get Food() {
       return this._food
    }
    get drink() {
        return this._drink
    }
    eat(Steak) {
        this._food
    console.log(`${this._food} The dog eats`);
    }
    drink() {
        console.log()
    }

}
var drink = new Dog("ribs", "Water");
console.log(drink.drink);
console.log(drink.food);

var food = new Dog("ribs", "juice");
console.log(food.food);
drink.eat(Steak);
drink.drink();

food.eat(Steak);
food.drink();