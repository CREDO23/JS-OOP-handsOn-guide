
/**
 * getLineNumber - Function to get the line number
 * 
 * SHORT NAME -> ln
 * 
 * @returns The the current line number
 */
export function ln() {
  const NEWLINE_EXPRESSION = /\r\n|\n/g;
  const POSITION_EXPRESSION = /:(\d+):\d+\)?$/;

  function splitLines(text) {
    return text.split(NEWLINE_EXPRESSION);
  }

  function findMatching(expression, text) {
    return expression.exec(text);
  }

  const error = new Error();
  const lines = splitLines(error.stack);

  const match = findMatching(POSITION_EXPRESSION, lines[2]);

  return parseInt(match[1]);
}
