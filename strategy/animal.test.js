const Dog = require('./dog')
const Eagle = require('./eagle')

describe('animal', () => {
  it('should create an animal', () => {
    const dog = new Dog();
    expect(dog).not.toBeNull();
  });
  it('should apply the appropriate voice strategy', () => {
    const dog = new Dog();
    const eagle = new Eagle();
    expect(dog.warn()).toEqual('growl')
    expect(eagle.warn()).toEqual('schreech')
  });
});