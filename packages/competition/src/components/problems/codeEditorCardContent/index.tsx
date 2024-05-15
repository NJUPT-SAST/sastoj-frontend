import React from "react";
import { Button, Select, type OptionProps } from "@ui-aurora/react";
import CodeEditor from "../../codeEditor";
import styles from "./index.module.scss";
import { Scan } from "lucide-react";
import { useCodeEditor } from "../../../hooks/useCodeEditor";
import { useLanguageStore } from "../../../stores/useLanguageStore";
import { LanguageType } from "../../../types/language";

interface CodeEditorCardContentProps {
  setIsFullScreen: () => void;
}

const optionsList: OptionProps[] = [
  {
    value: "java",
    label: "java",
    key: 3,
  },
  {
    value: "cpp",
    label: "cpp",
    key: 5,
  },
];
export const CodeEditorCardContent: React.FC<CodeEditorCardContentProps> = ({
  setIsFullScreen,
}) => {
  const { handleCodeEditor, defaultValue } = useCodeEditor();
  const setLanguage = useLanguageStore((state) => state.setLanguage);

  const handleChange = (value: OptionProps) => {
    setLanguage(value.value as LanguageType);
  };

  return (
    <div className={styles["code-editor-container"]}>
      <div className={styles["code-editor-header"]}>
        <Select
          optionsList={optionsList}
          size="small"
          title="语言"
          placeHolder="请选择你的语言"
          onchange={handleChange}
        />
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
