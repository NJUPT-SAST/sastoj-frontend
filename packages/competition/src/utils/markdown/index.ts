import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";
import renderer from "./renderer";
import "highlight.js/styles/base16/atelier-cave-light.css";

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
  })
);

export async function convertMarkdownToHtml(markdown: string): Promise<string> {
  try {
    const html: string = await marked.parse(markdown);
    return html;
  } catch (error) {
    throw new Error(error as string);
  }
}
