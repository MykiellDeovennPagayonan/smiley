export default function emojiEmotion(emojiScore : number) {
  if (emojiScore <= -4) {
    return `😡`
  }
  if (emojiScore <= -3) {
    return `😠`
  }
  if (emojiScore <= -1) {
    return `😢`
  }
  if (emojiScore <= 0) {
    return `😗`
  }
  if (emojiScore <= 1) {
    return `🙂`
  }
  if (emojiScore <= 3) {
    return `😃`
  }
  return `😆`
}