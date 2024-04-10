import { RendererObject } from "marked";
import styles from "./renderer.module.scss";

const renderer: RendererObject = {
  heading(text: string, level: number) {
    const escapedText = text.toLowerCase().replace(/[^\w]+/g, "-");

    return `
            <h${level}>
              <a name="${escapedText}" class="anchor" href="#${escapedText}">
                <span class=${styles["header-link"]}>${text}</span>
              </a>
            </h${level}>`;
  },
  blockquote(quote: string) {
    return `<blockquote class=${styles["block-quote"]}>
              <p>${quote}</p>
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
  tablecell(content: string, flags) {
    const tag = flags.header ? "th" : "td";
    const attributes = flags.align ? ` align="${flags.align}"` : "";
    return `<${tag}${attributes}>${content}</${tag}>\n`;
  },
  list(body: string, ordered: boolean, start: number | "") {
    const tag = ordered ? "ol" : "ul";
    const startAttribute = ordered && start !== null ? ` start="${start}"` : "";
    return `<${tag} ${startAttribute} class=${styles.list}>\n${body}</${tag}>\n`;
  },
};

export default renderer;
