import fs from "node:fs/promises";
import path from "node:path";
import { describe, it } from "node:test";
import prettier from "prettier";

import prismaPlugin from "../src/index";

describe("test", () => {
  it("Prisma2 Plugin Test", async () => {
    const schema = await fs.readFile(
      path.join(__dirname, "./mock/schema.txt"),
      "utf-8",
    );

    const result = await prettier.format(schema, {
      parser: "prisma",
      plugins: [prismaPlugin],
    });

    await fs.writeFile(path.join(__dirname, "./mock/schema.prisma"), result);

    if (schema === result) {
      throw new Error("Schema must not be equal to result");
    }
  });
});
