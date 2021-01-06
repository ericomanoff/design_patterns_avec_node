const PizzaInterface = require("./pizzaInterface");

class ToppingDecorator extends PizzaInterface {
  constructor(pizza) {
    super()
    this.pizza = pizza
  }

  getCost() {
    return this.pizza.getCost()
  }

  getDescription() {
    return this.pizza.getDescription()
  }

}

module.exports = ToppingDecorator