import { Button } from "@ui-aurora/react";
import CodeEditor from "../../codeEditor";
import styles from "./index.module.scss";
import { Scan } from "lucide-react";
import React from "react";
import { useCodeEditor } from "../../../hooks/useCodeEditor";

interface CodeEditorCardContentProps {
  setIsFullScreen: () => void;
}
export const CodeEditorCardContent: React.FC<CodeEditorCardContentProps> = ({
  setIsFullScreen,
}) => {
  const { handleCodeEditor, defaultValue } = useCodeEditor();

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
      <CodeEditor
        className={styles["code-editor"]}
        defaultValue={defaultValue}
        onUpdate={handleCodeEditor}
      />
    </div>
  );
};
