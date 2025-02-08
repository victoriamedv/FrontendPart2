/* eslint-disable */
export default function postSize(message) {
  const whileTrue = true; // Константа для eslint (костыль)
  while (whileTrue) {
    const firstLinkChar = message.indexOf('<');
    const lastLinkChar = message.indexOf('>');
    if (firstLinkChar < 0 || lastLinkChar < 0) {
      break;
    } else {
      const linkAddress = message.slice(firstLinkChar, lastLinkChar + 1);
      message = message.replace(linkAddress, '');
    }
  }
  const charCount = message.length;
  return charCount;
}
