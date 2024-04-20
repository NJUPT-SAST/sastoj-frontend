import { Card, Select } from "@ui-aurora/react";
import styles from "./page.module.scss";
import useMarkdown from "../../../hooks/useMarkdown";

const markdown =
  '# Markdown Sample\nThis is a **Markdown** sample with various elements.\n\n## Lists\n- [x] Task 1\n- [ ] Task 2\n- Item 3\n1. First item\n2. Second item\n3. Third item like this source code\n\n## Code Block\n\n```javascript\nfunction greet(name) {\n  console.log("Hello, "!");\n}\n```\n\n## Links\n\n[OpenAI](https://openai.com)\n\n## Table\n\n| Name  | Age | Gender |\n|-------|-----|--------|\n| John  | 25  | Male   |\n| Emily | 30  | Female |\n| Mark  | 28  | Male   |\n\n## Blockquote\n\n> Markdown is a lightweight markup language used for formatting text. It is widely used for creating documentation, README files, and web content.\n\nThat\'s it for the Markdown sample. Enjoy!# Markdown Sample\n\nThis is a **Markdown** sample with various elements.\n\n## Lists\n- [x] Task 1\n- [ ] Task 2\n- Item 3\n1. First item\n2. Second item\n3. Third item like this source code\n\n## Code Block\n\n```javascript\nfunction greet(name) {\n  console.log("Hello, "!");\n}\n```\n\n## Links\n\n[OpenAI](https://openai.com)\n\n## Table\n\n| Name  | Age | Gender |\n|-------|-----|--------|\n| John  | 25  | Male   |\n| Emily | 30  | Female |\n| Mark  | 28  | Male   |\n\n## Blockquote\n\n> Markdown is a lightweight markup language used for formatting text. It is widely used for creating documentation, README files, and web content.\n\nThat\'s it for the Markdown sample. Enjoy!';

const ProblemContent = () => {
  const html = useMarkdown(markdown);

  return (
    <div className={styles["problem-content-container"]}>
      <Card
        className={styles["markdown-show-container"]}
        header={null}
        mainContent={
          <div
            dangerouslySetInnerHTML={{ __html: html }}
            className={styles["markdown-content"]}
          ></div>
        }
        footer={null}
      ></Card>
      <div className={styles["problem-show"]}>
        <Card className={styles.monaco} header={null} footer={null}></Card>

        {/* <div className={styles["monaco-header"]}>
          <span style={{ fontWeight: "bold" }}> 请选择你的语 言</span>
          <Select isBorder={false}></Select>
        </div> */}
        <Select
          defaultSelectKey={1}
          isBorder
          // onchange={function Ya() {}}
          // optionsList={[
          //   {
          //     key: 1,
          //     label: "Nextjs",
          //     value: "nextjs",
          //   },
          //   {
          //     key: 2,
          //     label: "Nuxtjs",
          //     value: "nuxtjs",
          //   },
          //   {
          //     key: 3,
          //     label: "Nodejs",
          //     value: "nodejs",
          //   },
          //   {
          //     key: 5,
          //     label: "Vuejs",
          //     value: "vuejs",
          //   },
          //   {
          //     key: 4,
          //     label: "React",
          //     value: "react",
          //   },
          // ]}
          placeHolder=""
        />
        <Card className={styles["code-status-information"]}></Card>
      </div>
    </div>
  );
};

export default ProblemContent;
