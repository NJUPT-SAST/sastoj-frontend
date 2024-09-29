import Editor, { Monaco } from "@monaco-editor/react";
import { useRef } from "react";
import { editor } from "monaco-editor";
export const MonacoEditor = () => {
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);

  function handleEditorDidMount(
    editor: editor.IStandaloneCodeEditor,
    monaco: Monaco,
  ) {
    editorRef.current = editor;
  }

  function showValue() {
    alert(editorRef.current?.getValue());
  }

  return (
    <>
      <button onClick={showValue}>Show value</button>
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        onMount={handleEditorDidMount}
      />
    </>
  );
};
