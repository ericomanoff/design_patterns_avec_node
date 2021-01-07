class VoiceStrategy {
  warn() {
    throw new Error('implement warn!')
  }
}

class CanineVoiceStrategy extends VoiceStrategy {
  warn() {
    return 'growl'
  }
}

class BirdVoiceStrategy extends VoiceStrategy {
  warn() {
    return 'schreech'
  }
}

module.exports = { VoiceStrategy, CanineVoiceStrategy, BirdVoiceStrategy }