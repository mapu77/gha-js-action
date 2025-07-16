import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";

const config = {
    input: "src/main.js",
    output: {
        esModule: true,
        file: "dist/main.js",
        format: "es",
        sourcemap: true,
    },
    plugins: [json(), commonjs(), nodeResolve({ preferBuiltins: true })],
};

export default config;
