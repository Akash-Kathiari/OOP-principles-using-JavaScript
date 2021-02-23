//OLD PROCEDURAL PROGRAMMING
let pizza=12;
let toppings = 5;
let delivery = 7;

function pizzaParty(pizza, toppings,delivery) {
    return  pizza + toppings + delivery;
}

//ENCAPSULATION
let order = {
    //properties of this object
    pizza:12,
    toppings:10,
    delivery: 7,
    //method and order are all apart of one unit
    pizzaParty: function () {
        return this.pizza + this.toppings +this.delivery;
    }
};
order.pizzaParty();