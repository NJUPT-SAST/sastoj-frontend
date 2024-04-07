export default {
  "packages/competition/**/*.{js,cjs,ts,json,css,scss,tsx,sass}": () => [
    "pnpm --filter @sast/oj-competition lint",
    "pnpm --filter @sast/oj-competition build",
    "git add .",
  ],
};
