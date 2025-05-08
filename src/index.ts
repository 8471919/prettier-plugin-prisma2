import { languages } from "./language";
import { parsers } from "./parser";
import { printers } from "./printer";

export * from "./language";
export * from "./printer";
export * from "./parser";

export default {
  languages,
  parsers,
  printers,
};
