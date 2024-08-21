import { useEffect, useState } from "react";
import { convertMarkdownToHtml } from "../utils/markdown";

const useMarkdown = (markdown: string): string => {
  const [html, setHtml] = useState<string>("");
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const htmlPromise: Promise<string> = convertMarkdownToHtml(markdown);

    htmlPromise
      .then((htmlValue: string) => {
        setHtml(htmlValue);
      })
      .catch((error: Error) => {
        setError(error);
      });
  }, [markdown,convertMarkdownToHtml]);

  if (error) {
    throw error;
  }

  return html;
};

export default useMarkdown;
