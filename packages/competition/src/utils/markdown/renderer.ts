import { RendererObject } from "marked";
import "./renderer.scss";

const renderer: RendererObject = {
  heading(text: string, level: number) {
    const escapedText = text.toLowerCase().replace(/[^\w]+/g, "-");

    return `
            <h${level}>
              <a name="${escapedText}" class="anchor" href="#${escapedText}">
                <span class="header-link">${text}</span>
              </a>
            </h${level}>`;
  },
  blockquote(quote: string) {
    return `<blockquote class="block-quote">
              <p>${quote}</p>
            </blockquote>`;
  },
  link(href: string, title: string | null | undefined, text: string | false) {
    return `<p><a href="${href}" title="${title}" class="a-link">${text}</a></p>`;
  },
};

export default renderer;
