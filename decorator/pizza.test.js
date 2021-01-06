const { expect } = require('@jest/globals');
const PlainPizza = require('./plainPizza')
const Pepperoni = require('./pepperoni')
const Sausage = require('./sausage')

describe('pizza builder', () => {

  it('should create a plain pizza', () => {
    const pizza = new PlainPizza()
    expect(pizza).not.toBeNull()
  });

  it('should return the cost', () => {
    const pizza = new PlainPizza()
    const cost = pizza.getCost()
    expect(cost).toEqual(4)
  });

  it('should return the description', () => {
    const pizza = new PlainPizza()
    const desc = pizza.getDescription()
    expect(desc).toEqual('pizza')
  });

  it('should create a pepperoni and sausage pizza', () => {
    const pizza = new Pepperoni(new Sausage(new PlainPizza))
    const cost = pizza.getCost()
    const desc = pizza.getDescription()
    expect(cost).toEqual(5)
    expect(desc).toEqual('pepperoni, sausage, pizza')
  });
});