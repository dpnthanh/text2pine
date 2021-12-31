function text2pine(text) {
  let pine = ''
  for (let i = 0; i < text.length + 1; i++) {
    pine += ' '.repeat((text.length - i) / 2) + text.substring(0, i) + '\n'
  }
  for (let i = 0; i < Math.sqrt(text.length); i++) {
    pine +=
      ' '.repeat(text.length / 2 - Math.sqrt(text.length / 2) / 2) +
      text.substring(
        text.length / 2,
        text.length / 2 + Math.sqrt(text.length / 2)
      ) +
      '\n'
  }
  return pine
}

module.exports = text2pine
