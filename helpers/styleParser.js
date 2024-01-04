import chalk from "chalk";

/**
 * styleParser - A factory function for creating styles used in the console.
 *
 * @param {object} options Contains all options for a given style.
 *
 * @returns A reusable styled chalk.
 */
export default function styleParser(options) {
  let styledChalk = chalk;

  for (let opt of options) {
    styledChalk = styledChalk[opt];
  }

  return function (text) {
    return styledChalk(text);
  };
}
