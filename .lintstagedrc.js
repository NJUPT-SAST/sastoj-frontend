export default {
    "packages/competition/**/*.{js,cjs,ts,json,css,scss,tsx,sass}": () => [
        "pnpm --filter @sast/oj-competition lint",
        "pnpm --filter @sast/oj-competition build",
        "git add ."
    ],
    "packages/docs/**/*.{js,cjs,ts,html,json,css,scss,tsx,sass,md,mdx}": () => [
        "pnpm --filter @sast/oj-docs build",
        "git add ."
    ],
    "packages/ui/**/*.{js,cjs,ts,html,json,css,scss,tsx,sass}": () => [
        "pnpm --filter @sast/oj-ui test",
        "pnpm --filter @sast/oj-ui format",
        "pnpm --filter @sast/oj-ui lint",
        "git add ."
    ],
    // "*.*": () => "pnpm cz"
}