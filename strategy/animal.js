class Animal {

  constructor(voiceStrategy) {
    this.voice = voiceStrategy
  }

  warn() {
    return this.voice.warn()
  }

}

module.exports = Animal