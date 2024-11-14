import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./index.scss";

import "katex/dist/katex.min.css"; // `rehype-katex` does not import the CSS for you

/**
 * 一个基于react-markdown二次封装的markdown渲染组件
 * @param text 需要使用markdown渲染的文字内容
 * @returns
 */

function MarkdownRender(props: { text: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkMath, remarkGfm]}
      rehypePlugins={[rehypeKatex, rehypeRaw]}
      skipHtml={false}
      className="markdown-body"
      components={{
        // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
        code({ node, inline, className, children, ...props }: any) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              style={oneDark as any}
              language={match[1]}
              PreTag="div"
              showLineNumbers={true}
              {...props}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {props.text}
    </ReactMarkdown>
  );
}

export default MarkdownRender;
