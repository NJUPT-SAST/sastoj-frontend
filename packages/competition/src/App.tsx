import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Accordion, Button, Input, Card, Radio, Dialog } from "@sast/oj-ui";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [visible, setVisble] = useState(false);

  useEffect(() => {
    console.log(visible);
  }, [visible]);

  const cancel = () => {
    setVisble(false);
  };

  const show = () => {
    setVisble(true);
  };

  return (
    <>
      <div>
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
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Radio></Radio>
      <Radio></Radio>
      <Radio></Radio>
      <Radio></Radio>
      <Dialog visible={visible} cancel={cancel}></Dialog>
    </>
  );
}

export default App;
