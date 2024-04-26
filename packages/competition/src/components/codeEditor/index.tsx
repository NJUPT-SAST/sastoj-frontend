import React, { useEffect, useRef } from "react";
import { EditorView, basicSetup } from "codemirror";
import { EditorState } from "@codemirror/state";
import { keymap } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";

import { ayuLight } from "thememirror";

import { javascript } from "@codemirror/lang-javascript";
import { cpp } from "@codemirror/lang-cpp";
import { python } from "@codemirror/lang-python";
import { go } from "@codemirror/lang-go";
import { rust } from "@codemirror/lang-rust";
import { java } from "@codemirror/lang-java";
import { csharp } from "@replit/codemirror-lang-csharp";

import { useLanguageStore } from "../../stores/useLanguageStore";

interface CodeEditorProps {
  className?: string;
  defaultValue?: string;
  onUpdate?: (value: string) => void;
}

//TODO: ban search panel
const CodeEditor: React.FC<CodeEditorProps> = ({
  className,
  defaultValue,
  onUpdate,
}) => {
  const editorRef = useRef(null);
  const language = useLanguageStore((state) => state.language);

  const myTheme = EditorView.theme({
    ".cm-content": {
      fontFamily: "Consolas",
    },
    ".cm-panels-bottom": {
      display: "none",
    },
  });

  useEffect(() => {
    let languageExtension;
    switch (language) {
      case "cpp":
      case "c":
        languageExtension = cpp();
        break;
      case "javascript":
        languageExtension = javascript();
        break;
      case "python3":
        languageExtension = python();
        break;
      case "go":
        languageExtension = go();
        break;
      case "rust":
        languageExtension = rust();
        break;
      case "java":
        languageExtension = java();
        break;
      case "csharp":
        languageExtension = csharp();
        break;
      default:
        languageExtension = javascript();
        break;
    }
    const state = EditorState.create({
      doc: defaultValue,
      extensions: [
        keymap.of(defaultKeymap),
        basicSetup,
        languageExtension,
        ayuLight,
        myTheme,
        EditorView.updateListener.of((v) => {
          onUpdate && onUpdate(v.state.doc.toString());
        }),
      ],
    });

    const view = new EditorView({
      state: state,
      parent: editorRef.current!,
      extensions: [],
    });

    return () => {
      view.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return <div ref={editorRef} className={className} />;
};

export default CodeEditor;
