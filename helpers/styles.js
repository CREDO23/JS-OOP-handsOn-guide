// ======= Colors =========

import styleParser from "./styleParser.js";

/**
 * Here are the function's short names for all the styles I am using in the console.
 * Here short names are used for simplicity purposes.
 * 
 * 
 * LINE NUMBER STYLE [LEVEL] -> lns1
 * SUCCESS OUTPUT STYLE -> ss
 * ERROR OUTPUT STYLE -> es
 */

export const lns1 = styleParser(["bgGreen", "bold"]);

export const lns2 = styleParser(["bgGreen"]);

export const ss = styleParser(["green"]);

export const es = styleParser(["red"]);
