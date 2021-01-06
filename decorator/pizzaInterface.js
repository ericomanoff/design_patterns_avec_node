class PizzaInterface {

  getCost() {
    throw new Error("Implement getCost!")
  }
  getDescription() {
    throw new Error("Implement getDescription!")
  }
}

module.exports = PizzaInterface