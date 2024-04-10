import { Outlet } from "react-router-dom";

import useMarkdown from "../../hooks/useMarkdown";
import HomeLayout from "./layout";

const markdown =
  '# Markdown Sample\n\nThis is a **Markdown** sample with various elements.\n\n## Lists\n- [x] Task 1\n- [ ] Task 2\n- Item 3\n1. First item\n2. Second item\n3. Third item like this source code\n\n## Code Block\n\n```javascript\nfunction greet(name) {\n  console.log("Hello, "!");\n}\n```\n\n## Links\n\n[OpenAI](https://openai.com)\n\n## Table\n\n| Name  | Age | Gender |\n|-------|-----|--------|\n| John  | 25  | Male   |\n| Emily | 30  | Female |\n| Mark  | 28  | Male   |\n\n## Blockquote\n\n> Markdown is a lightweight markup language used for formatting text. It is widely used for creating documentation, README files, and web content.\n\nThat\'s it for the Markdown sample. Enjoy!';

const Home = () => {
  const html = useMarkdown(markdown);

  return (
    <HomeLayout>
      <div>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
          style={{ width: "50%", margin: "10px" }}
        />
        dhsjakhdjkdasdasdsa djskad dsajkdhas dhjksahdkja
        <Outlet />
      </div>
    </HomeLayout>
  );
};

export default Home;
