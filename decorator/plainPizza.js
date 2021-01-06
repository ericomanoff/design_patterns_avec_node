const PizzaInterface = require("./pizzaInterface");

class PlainPizza extends PizzaInterface {

  getCost() {
    return 4;
  }

  getDescription() {
    return 'pizza'
  }
}

module.exports = PlainPizza