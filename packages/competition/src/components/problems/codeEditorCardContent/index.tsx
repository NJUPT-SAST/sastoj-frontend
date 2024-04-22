import { Button } from "@ui-aurora/react";
import CodeEditor from "../../codeEditor";
import styles from "./index.module.scss";
import { Scan } from "lucide-react";
import React from "react";

interface CodeEditorCardContentProps {
  setIsFullScreen: () => void;
}
export const CodeEditorCardContent: React.FC<CodeEditorCardContentProps> = ({
  setIsFullScreen,
}) => {
  return (
    <div className={styles["code-editor-container"]}>
      <div className={styles["code-editor-header"]}>
        <span>选择你的语言</span>
        <Button
          size="small"
          color="ghost"
          className={styles["full-screen"]}
          onClick={() => setIsFullScreen()}
        >
          <Scan size={16} />
        </Button>
      </div>
      <CodeEditor className={styles["code-editor"]}></CodeEditor>
    </div>
  );
};
