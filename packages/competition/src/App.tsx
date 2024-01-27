import { Button } from "@sast/oj-ui";
import {
  Checkbox,
  Dialog,
  Input,
  Radio,
  RadioGroup,
  Sheet,
  SheetTrigger,
  SheetHeader,
  // SheetTrigger,
} from "@sast/oj-ui";
import { useState } from "react";

function App() {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <Sheet visible={visible} onCancel={() => setVisible(false)}>
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
        </>
        <SheetHeader>
          <span>hello</span>
        </SheetHeader>
      </Sheet>
      {/* <SheetTrigger></SheetTrigger> */}
    </>
  );
}

export default App;
