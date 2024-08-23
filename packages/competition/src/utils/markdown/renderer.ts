import { RendererObject } from "marked";
import katex from "katex";
import 'katex/dist/katex.min.css';
import styles from "./renderer.module.scss";

// 预处理公式
export const processMath = (markdown: string) => {
  markdown = markdown.replace(/\\s/g, '\\,');
  // 替换块级公式
  let html = markdown.replace(/\$\$(.*?)\$\$/gs, (match, p1: string) => {
    try {
      return `<div class="katex ${styles.mykatex}">${katex.renderToString(p1, { displayMode: true })}</div>`;
    } catch (e) {
      console.error("KaTeX Error:", e);
      return match;
    }
  });

  // 替换行内公式
  html = html.replace(/\$(.*?)\$/g, (match, p1: string) => {
    try {
      return `<span class="katex ${styles.mykatex}">${katex.renderToString(p1, { displayMode: false })}</span>`;
    } catch (e) {
      console.error("KaTeX Error:", e);
      return match;
    }
  });

  return html;
};

const renderer: RendererObject = {
  heading(text: string, level: number) {
    const escapedText = text.toLowerCase().replace(/[^\w]+/g, "-");

    return `
            <h${level} class=${styles['h-title']}>
              <a name="${escapedText}" class="anchor">
                <span class=${styles["header-link"]}>${text}</span>
              </a>
            </h${level}>`;
  },
  blockquote(quote: string) {
    return `<blockquote class=${styles["block-quote"]}>
              <p class=${'block-quote-p'}>${quote}</p>
            </blockquote>`;
  },
  link(href: string, title: string | null | undefined, text: string | false) {
    return `<p><a href="${href}" title="${title}" class=${styles["a-link"]}>${text}</a></p>`;
  },
  table(header: string, body: string) {
    return `<table class=${styles.table}><thead>${header}</thead><tbody>${body}</tbody></table>`;
  },
  tablerow(content: string) {
    return `<tr class="">\n${content}</tr>\n`;
  },
  tablecell(content: string, flags: any) {
    const tag = flags.header ? "th" : "td";
    const attributes = flags.align ? ` align="${flags.align}"` : "";
    return `<${tag}${attributes}>${content}</${tag}>\n`;
  },
  list(body: string, ordered: boolean, start: number | "") {
    const tag = ordered ? "ol" : "ul";
    const startAttribute = ordered && start !== null ? ` start="${start}"` : "";
    return `<${tag} ${startAttribute} class=${styles.list}>\n${body}</${tag}>\n`;
  }
};

export default renderer;
