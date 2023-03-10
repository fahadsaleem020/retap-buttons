import pkg from "./package.json" assert { type: "json" };
import { externals } from "rollup-plugin-node-externals";
import typescript from "rollup-plugin-typescript2";
import terser from "@rollup/plugin-terser";
import { defineConfig } from "rollup";
import del from "rollup-plugin-delete";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default defineConfig([
  {
    input: "index.tsx",

    output: {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
    context: "window",
    plugins: [
      del({ targets: "lib/*", verbose: true }),
      nodeResolve(),
      terser(),
      externals(),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
    ],
  },
]);
