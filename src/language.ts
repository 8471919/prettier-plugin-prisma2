import type { SupportLanguage } from "prettier";

export const languages: SupportLanguage[] = [
  {
    name: "Prisma",
    parsers: ["prisma"],
    extensions: [".prisma"],
    linguistLanguageId: 499933428,
    vscodeLanguageIds: ["prisma"],
  },
];
