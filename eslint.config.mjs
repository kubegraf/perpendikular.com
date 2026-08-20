import next from "eslint-config-next";

const eslintConfig = [
  ...next,
  { ignores: [".next/**", "node_modules/**", "shot.mjs", "probe*.mjs"] },
];

export default eslintConfig;
