const ToppingDecorator = require("./toppingDecorator");

class Sausage extends ToppingDecorator {
  constructor(pizza) {
    super()
    this.pizza = pizza
  }

  getCost() {
    return this.pizza.getCost() + .5;
  }

  getDescription() {
    return "sausage, " + this.pizza.getDescription();
  }

}

module.exports = Sausage