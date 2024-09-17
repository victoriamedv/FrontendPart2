export default function postSize(message) {
    const whileTrue = true; // Константа для eslint (костыль)
    while (whileTrue) {
        let firstLinkChar = message.indexOf('<');
        let lastLinkChar = message.indexOf('>');
        if (firstLinkChar < 0 || lastLinkChar < 0) {
            break;
        } else {
            let linkAddress = message.slice(firstLinkChar, lastLinkChar + 1);
            message = message.replace(linkAddress, '');
        }
    }
    let charCount = message.length;
    return charCount;
}