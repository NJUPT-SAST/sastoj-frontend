import { marked } from "marked";

const html = marked.parse("# Marked in Node.js\n ## Rendered by **marked**.");

export default html;
