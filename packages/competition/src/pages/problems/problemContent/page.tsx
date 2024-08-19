import { Card } from "@ui-aurora/react";
import styles from "./page.module.scss";
import useMarkdown from "../../../hooks/useMarkdown";
import { CodeEditorCardContent } from "../../../components/problems/codeEditorCardContent";
import { useState } from "react";
import { StatusCardContent } from "../../../components/problems/statusCardContent";
import { useSwrGetProblem } from "../../../swrHooks/problem";
import { useParams } from "react-router-dom";

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

// const markdown = "# A+B Problem\n\n## 题目描述\n\n输入两个整数 $\\lim_{x \\to \\infty} \\frac{1}{x} = 0$，输出它们的和（$|a|,|b| \\le {10}^9$）。\n\n注意\n\n1. Pascal 使用 `integer` 会爆掉哦！\n2. 有负数哦！\n3. C/C++ 的 main 函数必须是 `int` 类型，而且 C 最后要 `return 0`。这不仅对洛谷其他题目有效，而且也是 NOIP/CSP/NOI 比赛的要求！\n\n好吧，同志们，我们就从这一题开始，向着大牛的路进发。\n\n> 任何一个伟大的思想，都有一个微不足道的开始。\n\n## 输入格式\n\n两个以空格分开的整数。\n\n## 输出格式\n\n一个整数。\n\n## 样例 #1\n\n### 样例输入 #1\n\n```\n20 30\n```\n\n### 样例输出 #1\n\n```\n50\n```\n\n## 提示\n\n**本题各种语言的程序范例：**\n\nC\n```c\n#include <stdio.h>\n\nint main()\n{\n    int a,b;\n    scanf(\"%d%d\",&a,&b);\n    printf(\"%d\\n\", a+b);\n    return 0;\n}\n```\n----------------\n\nC++\n```cpp\n#include <iostream>\n#include <cstdio>\n\nusing namespace std;\n\nint main()\n{\n    int a,b;\n    cin >> a >> b;\n    cout << a+b << endl;\n    return 0;\n}\n```\n----------------\n\nPascal\n```cpp\nvar a, b: longint;\nbegin\n    readln(a,b);\n    writeln(a+b);\nend.\n```\n-----------------\n\nPython2\n\n```cpp\ns = raw_input().split()\nprint int(s[0]) + int(s[1])\n```\n-----------------\n\nPython3\n\n```cpp\ns = input().split()\nprint(int(s[0]) + int(s[1]))\n```\n-----------------\n\nJava\n```java\nimport java.io.*;\nimport java.util.*;\npublic class Main {\n    public static void main(String args[]) throws Exception {\n        Scanner cin=new Scanner(System.in);\n        int a = cin.nextInt(), b = cin.nextInt();\n        System.out.println(a+b);\n    }\n}\n```\n-----------------\n\nJavaScript （Node.js）\n\n```javascript\nconst fs = require('fs')\nconst data = fs.readFileSync('/dev/stdin')\nconst result = data.toString('ascii').trim().split(' ').map(x => parseInt(x)).reduce((a, b) => a + b, 0)\nconsole.log(result)\nprocess.exit() // 请注意必须在出口点处加入此行\n```\n\n-----------------\n\nRuby\n\n```ruby\na, b = gets.split.map(&:to_i)\nprint a+b\n```\n\n-----------------\n\nPHP\n\n```php\n<?php\n$input = trim(file_get_contents(\"php://stdin\"));\nlist($a, $b) = explode(' ', $input);\necho $a + $b;\n```\n\n-----------------\n\nRust\n\n```rust\nuse std::io;\n\nfn main(){\n    let mut input=String::new();\n    io::stdin().read_line(&mut input).unwrap();\n    let mut s=input.trim().split(' ');\n\n    let a:i32=s.next().unwrap()\n               .parse().unwrap();\n    let b:i32=s.next().unwrap()\n               .parse().unwrap();\n    println!(\"{}\",a+b);\n}\n```\n\n-----------------\n\nGo\n\n```go\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n    var a, b int\n    fmt.Scanf(\"%d%d\", &a, &b)\n    fmt.Println(a+b)\n}\n```\n\n-----------------\n\nC# Mono\n\n```cs\nusing System;\n\npublic class APlusB{\n    private static void Main(){\n        string[] input = Console.ReadLine().Split(' ');\n        Console.WriteLine(int.Parse(input[0]) + int.Parse(input[1]));\n    }\n}\n```\n\n------------------\n\nVisual Basic Mono\n\n```vb\nImports System\n\nModule APlusB\n    Sub Main()\n        Dim ins As String() = Console.ReadLine().Split(New Char(){\" \"c})\n        Console.WriteLine(Int(ins(0))+Int(ins(1)))\n    End Sub\nEnd Module\n```\n\n------------------\n\nKotlin\n\n```kotlin\nfun main(args: Array<String>) {\n    val (a, b) = readLine()!!.split(' ').map(String::toInt)\n    println(a + b)\n}\n```\n\n------------------\n\nHaskell\n\n```haskell\nmain = do\n    [a, b] <- (map read . words) `fmap` getLine\n    print (a+b)\n```\n\n------------------\n\nLua\n\n```lua\na = io.read('*n')\nb = io.read('*n')\nprint(a + b)\n```\n\n------------------\n\nOCaml\n\n```ocaml\nScanf.scanf \"%i %i\\n\" (fun a b -> print_int (a + b))\n```\n\n------------------\n\nJulia\n\n```julia\nnums = map(x -> parse(Int, x), split(readline(), \" \"))\nprintln(nums[1] + nums[2])\n```\n\n------------------\n\nScala\n\n```scala\nobject Main extends App {\n    println(scala.io.StdIn.readLine().split(\" \").map(_.toInt).sum)\n}\n```\n\n------------------\n\nPerl\n\n```perl\nmy $in = <STDIN>;\nchomp $in;\n$in = [split /[\\s,]+/, $in];\nmy $c = $in->[0] + $in->[1];\nprint \"$c\\n\";\n```"


const ProblemContent = () => {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const contestId = localStorage.getItem("contestId");
  const { problemId } = useParams();
  const handleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const { data } = useSwrGetProblem(
    Number(contestId) as unknown as number,
    problemId as unknown as number,
  );

  const html = useMarkdown(data?.content ?? "");
  // console.log("content", data);

  // console.log("content", data, isLoading);

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
