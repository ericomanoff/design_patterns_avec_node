const ToppingDecorator = require("./toppingDecorator");

class Pepperoni extends ToppingDecorator {
  constructor(pizza) {
    super()
    this.pizza = pizza
  }

  getCost() {
    return this.pizza.getCost() + .5;
  }

  getDescription() {
    return "pepperoni, " + this.pizza.getDescription();
  }

}

module.exports = Pepperoni