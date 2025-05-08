import { format } from "@prisma/prisma-fmt-wasm";
import type { Printer } from "prettier";

const printer: Printer = {
  print: (path, options, _print) => {
    const node = path.getNode();

    const params = {
      textDocument: {
        uri: new URL(`file://${options.filepath}`).toString(),
      },
      options: {
        tabSize: options.tabWidth,
        insertSpaces: !options.useTabs,
        trimFinalNewlines: true,
        insertFinalNewline: true,
        trimTrailingWhitespace: true,
      },
    };

    const formatted = format(node.text, JSON.stringify(params));

    return formatted;
  },
};

export const printers = {
  "prisma-ast": printer,
};
