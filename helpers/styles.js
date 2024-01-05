import styleParser from "./styleParser.js";

/**
 * Here are the function's short names for all the styles used in the console.
 * 
 * 
 * LINE NUMBER STYLE [LEVEL] -> lns1
 * POSITIVE OUTPUT STYLE -> ps
 * NEGATIVE OUTPUT STYLE -> ns
 * 
 * Short names are used for simplicity purposes.
 */

export const lns1 = styleParser(["bgGreen", "bold"]);

export const lns2 = styleParser(["bgGreen"]);

export const ps = styleParser(["green"]);

export const ns = styleParser(["red"]);
