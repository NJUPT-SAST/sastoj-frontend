import { useState } from "react";
import { Button, Sheet, SheetWrapper } from "../../ui/dist";
import "./App.css";

function App() {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
      <SheetWrapper>
        <div style={{ width: "100vw", backgroundColor: "white" }}>
          {/* <div style={{ height: "19900px" }}></div> */}
          <Button onClick={() => setVisible(true)}>test</Button>
          <div style={{ height: "19900px" }}></div>
        </div>
      </SheetWrapper>
      <Sheet
        visible={visible}
        onCancel={() => setVisible(false)}
        width={500}
      ></Sheet>
    </>
  );
}

export default App;
