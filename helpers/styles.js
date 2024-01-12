import styleParser from "./styleParser.js";

/**
 * Here are the function's short names for all the styles used in the console.
 * 
 * 
 * LINE NUMBER STYLE [LEVEL] -> lns1
 * POSITIVE OUTPUT STYLE -> ps
 * NEGATIVE OUTPUT STYLE -> ns
 * NOTES -> nt
 * BULLET POINT -> bp
 * 
 * Short names are used for simplicity purposes.
 */

export const lns1 = styleParser(["bgGreen", "bold"]);

export const lns2 = styleParser(["bgGreen"]);

export const ps = styleParser(["green"]);

export const ns = styleParser(["red"]);

export const nt = styleParser(["yellow", "bold"]);

export const bp = styleParser(["blue", "bold"]);
