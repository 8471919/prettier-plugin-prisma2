import type { Parser } from "prettier";

export const parsers: Record<string, Parser> = {
  prisma: {
    parse: (text: string) => ({ text }),
    astFormat: "prisma-ast",
    locStart: () => 0,
    locEnd: (node) => node.text.length,
  },
};
