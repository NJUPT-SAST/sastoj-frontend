import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";
import "highlight.js/styles/base16/atelier-cave-light.css";
import renderer, { processMath } from "./renderer";


export const marked = new Marked(
  {
    async: true,
    pedantic: false,
    gfm: true,
    renderer,
  },
  //代码高亮配置
  markedHighlight({
    langPrefix: "hljs language-",
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    },
  }),
);

export async function convertMarkdownToHtml(markdown: string): Promise<string> {
  try {
    const processedMarkdown = processMath(markdown);
    const html: string = await marked.parse(processedMarkdown);
    return html;
  } catch (error) {
    throw new Error(error as string);
  }
}
