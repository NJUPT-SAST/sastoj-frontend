import { useState } from "react";
import { Button, DatePicker, Dialog, Input, showToast } from "../../ui/dist";
import "./App.css";

function App() {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
      <div style={{ height: "100vh", width: "100vw" }}>
        <Button onClick={() => setVisible(true)}>test</Button>
        <Dialog visible={visible} onCancel={() => setVisible(false)}></Dialog>
      </div>
      <div></div>
    </>
  );
}

export default App;
