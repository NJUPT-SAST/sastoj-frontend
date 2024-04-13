export default {
  "./packages/competition/src/**/**.{js,cjs,ts,json,css,scss,tsx,sass}": () => [
    "pnpm --filter @sast/oj-competition lint",
    "pnpm --filter @sast/oj-competition build",
    "git add .",
  ],
  "./packages/management/**/**.{js,cjs,ts,json,css,scss,tsx,sass,vue}": () => [
    "pnpm --filter @sast/oj-management lint",
    "pnpm --filter @sast/oj-management build",
    "pnpm --filter @sast/oj-management prettier",
    "git add .",
  ],
};
