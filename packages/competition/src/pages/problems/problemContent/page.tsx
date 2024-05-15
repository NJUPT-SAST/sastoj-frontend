import { Card } from "@ui-aurora/react";
import styles from "./page.module.scss";
import useMarkdown from "../../../hooks/useMarkdown";
import { CodeEditorCardContent } from "../../../components/problems/codeEditorCardContent";
import { useState } from "react";
import { StatusCardContent } from "../../../components/problems/statusCardContent";
import { useSwrGetProblem } from "../../../swrHooks/problem";

// const markdown =
//   "# Markdown Sample\n" +
//   "This is a **Markdown** sample with various elements.\n" +
//   "\n" +
//   "## Lists\n" +
//   "- [x] Task 1\n" +
//   "- [ ] Task 2\n" +
//   "- Item 3\n" +
//   "1. First item\n" +
//   "2. Second item\n" +
//   "3. Third item like this source code\n" +
//   "\n" +
//   "## Code Block\n" +
//   "\n" +
//   "```javascript\n" +
//   "function greet(name) {\n" +
//   '  console.log("Hello, "!");\n' +
//   "}\n" +
//   "```\n" +
//   "\n" +
//   "## Links\n" +
//   "\n" +
//   "[OpenAI](https://openai.com)\n" +
//   "\n" +
//   "## Table\n" +
//   "\n" +
//   "| Name  | Age | Gender |\n" +
//   "|-------|-----|--------|\n" +
//   "| John  | 25  | Male   |\n" +
//   "| Emily | 30  | Female |\n" +
//   "| Mark  | 28  | Male   |\n" +
//   "\n" +
//   "## Blockquote\n" +
//   "\n" +
//   "> Markdown is a lightweight markup language used for formatting text. It is widely used for creating documentation, README files, and web content.\n" +
//   "\n" +
//   "That's it for the Markdown sample. Enjoy!# Markdown Sample\n" +
//   "\n" +
//   "This is a **Markdown** sample with various elements.\n" +
//   "\n" +
//   "## Lists\n" +
//   "- [x] Task 1\n" +
//   "- [ ] Task 2\n" +
//   "- Item 3\n" +
//   "1. First item\n" +
//   "2. Second item\n" +
//   "3. Third item like this source code\n" +
//   "\n" +
//   "## Code Block\n" +
//   "\n" +
//   "```javascript\n" +
//   "function greet(name) {\n" +
//   '  console.log("Hello, "!");\n' +
//   "}\n" +
//   "```\n" +
//   "\n" +
//   "## Links\n" +
//   "\n" +
//   "[OpenAI](https://openai.com)\n" +
//   "\n" +
//   "## Table\n" +
//   "\n" +
//   "| Name  | Age | Gender |\n" +
//   "|-------|-----|--------|\n" +
//   "| John  | 25  | Male   |\n" +
//   "| Emily | 30  | Female |\n" +
//   "| Mark  | 28  | Male   |\n" +
//   "\n" +
//   "## Blockquote\n" +
//   "\n" +
//   "> Markdown is a lightweight markup language used for formatting text. It is widely used for creating documentation, README files, and web content.\n" +
//   "\n" +
//   "That's it for the Markdown sample. Enjoy!\n" +
//   "```jsx\n" +
//   `const ProblemContent = () => {
//     const html = useMarkdown(markdown);

//     const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

//     const handleFullScreen = () => {
//       setIsFullScreen(!isFullScreen);
//     };

//     const { data, isLoading } = useSwrGetProblem(1, 2);

//     console.log(data, isLoading);

//     return (
//       <div className={styles["problem-content-container"]}>
//         <Card
//           className={` +
//   '`${styles["markdown-show-container"]} ${isFullScreen ? styles["full-screen"] : ""}`' +
//   `}
//           header={null}
//           mainContent={
//             <div
//               dangerouslySetInnerHTML={{ __html: html }}
//               className={styles["markdown-content"]}
//             />
//           }
//           footer={null}
//           padding={10}
//         ></Card>
//         <div className={styles["problem-show"]}>
//           <Card
//             className={styles.codeEditor}
//             header={null}
//             mainContent={
//               <CodeEditorCardContent setIsFullScreen={handleFullScreen} />
//             }
//             footer={null}
//             padding={0}
//           ></Card>

//           <Card
//             padding={0}
//             header={null}
//             footer={null}
//             mainContent={<StatusCardContent />}
//             className={` +
//   '`${styles["markdown-show-container"]} ${isFullScreen ? styles["full-screen"] : ""}`' +
//   `}
//           ></Card>
//         </div>
//       </div>
//     );
//   };` +
//   "\n```";

const ProblemContent = () => {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  const handleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const { data, isLoading } = useSwrGetProblem(1, 2);

  const html = useMarkdown(data?.content ?? "");

  console.log("content", data, isLoading);

  return (
    <div className={styles["problem-content-container"]}>
      <Card
        className={`${styles["markdown-show-container"]} ${isFullScreen ? styles["full-screen"] : ""}`}
        header={null}
        mainContent={
          <div
            dangerouslySetInnerHTML={{ __html: html }}
            className={styles["markdown-content"]}
          />
        }
        footer={null}
        padding={10}
      ></Card>
      <div className={styles["problem-show"]}>
        <Card
          className={styles.codeEditor}
          header={null}
          mainContent={
            <CodeEditorCardContent setIsFullScreen={handleFullScreen} />
          }
          footer={null}
          padding={0}
        ></Card>

        <Card
          padding={0}
          header={null}
          footer={null}
          mainContent={<StatusCardContent />}
          className={`${styles["code-status-information"]} ${isFullScreen ? styles["full-screen"] : ""}`}
        ></Card>
      </div>
    </div>
  );
};

export default ProblemContent;
