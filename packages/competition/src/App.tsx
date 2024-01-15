import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {
  Accordion,
  Button,
  Input,
  Card,
  Radio,
  Dialog,
  RadioGroup,
  Select,
} from "@sast/oj-ui";
import "./App.css";

interface Option {
  value: string;
  label: string;
  key: number;
}

function App() {
  const [count, setCount] = useState(0);
  const [visible, setVisble] = useState(false);
  const [select, setSelect] = useState("nodejs");
  const [newSelect, setNewSelect] = useState<Option>();

  const [value, setValue] = useState("hello");

  useEffect(() => {
    console.log(visible);
  }, [visible]);

  const cancel = () => {
    setVisble(false);
  };

  const show = () => {
    setVisble(true);
  };

  useEffect(() => {
    console.log(select);
  }, [select]);

  useEffect(() => {
    console.log(value);
  }, [value]);

  useEffect(() => {
    console.log(newSelect);
  }, [newSelect]);

  const example = [
    { label: "hello", value: "1", key: 1 },
    { label: "hi", value: "2", key: 3 },
  ];

  return (
    <>
      <div style={{}}>
        <Select onChange={setNewSelect} optionsList={example}></Select>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Button color="primary" onClick={show}>
          hello
        </Button>
        <Input></Input>
        <Accordion
          accordionTrigger={<span>hi</span>}
          accordionContent={<span>hello</span>}
        ></Accordion>
        <Card></Card>
        <Card></Card>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <div className="border">
          {/* <span className="span">hello</span> */}
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <RadioGroup value={select} onChange={setSelect} direction="horizontal">
        <Radio value="nodejs">nodejs</Radio>
        <Radio value="vuejs">vuejs</Radio>
        <Radio value="react">react</Radio>
      </RadioGroup>
      <Dialog visible={visible} cancel={cancel} cancelContent="取消"></Dialog>
    </>
  );
}

export default App;
