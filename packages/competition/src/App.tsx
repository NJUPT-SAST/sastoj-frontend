import { Button } from "@sast/oj-ui";
import {
  Checkbox,
  Dialog,
  Input,
  Radio,
  RadioGroup,
  Sheet,
  SheetTrigger,
  // SheetTrigger,
} from "@sast/oj-ui";
import { useState } from "react";

function App() {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
        <Button
          onClick={() => {
            setVisible(true);
          }}
        >
          show sheet
        </Button>
        <div style={{ height: "200vh" }}></div>
      </div>
      <Sheet visible={visible} onCancel={() => setVisible(false)}></Sheet>
      {/* <SheetTrigger></SheetTrigger> */}
    </>
  );
}

export default App;
