import { Button, Input, showToast } from "../../ui/dist";
import "./App.css";

function App() {
  return (
    <>
      <Button onClick={() => showToast()}>showToast</Button>
      <Input></Input>
    </>
  );
}

export default App;
