import Editor from "@monaco-editor/react";
import { FC, useMemo, useRef } from "react";
import { editor } from "monaco-editor";
import { useLanguageStore } from "../../stores/useLanguageStore";

interface MonacoEditorProps {
  className?: string;
  defaultValue?: string;
  onUpdate?: (value: string, language: string) => void;
}
export const MonacoEditor: FC<MonacoEditorProps> = ({
  className,
  defaultValue,
  onUpdate,
}) => {
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
  const language = useLanguageStore((state) => state.language);

  function handleEditorDidMount(
    editor: editor.IStandaloneCodeEditor,
    // monaco: Monaco,
  ) {
    editorRef.current = editor;
  }

  const editorLanguage = useMemo(() => {
    const languageMap: Record<string, string> = {
      "C++": "cpp",
      C: "cpp",
      NodeJS: "javascript",
      Python3: "python",
      Golang: "go",
      Bash: "bash",
      rust: "rust",
      Java: "java",
      csharp: "csharp",
      PHP: "php",
      Ruby: "ruby",
    };
    return languageMap[language] || "cpp";
  }, [language]);

  return (
    <>
      <Editor
        defaultLanguage={editorLanguage}
        defaultValue={defaultValue}
        onMount={handleEditorDidMount}
        className={className}
        language={editorLanguage}
        onChange={(value: string | undefined) =>
          onUpdate?.(value ?? "", language)
        }
      />
    </>
  );
};
