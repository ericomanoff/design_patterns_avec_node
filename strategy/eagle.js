const { BirdVoiceStrategy } = require("./voiceInterface");
const Animal = require('./animal')

class Eagle extends Animal {
  constructor() {
    const birdVoice = new BirdVoiceStrategy()
    super(birdVoice)
  }
}

module.exports = Eagle