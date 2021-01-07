const { CanineVoiceStrategy } = require("./voiceInterface");
const Animal = require('./animal')

class Dog extends Animal {
  constructor() {
    const canineVoice = new CanineVoiceStrategy()
    super(canineVoice)
  }
}

module.exports = Dog