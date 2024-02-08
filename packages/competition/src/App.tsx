import { Button, DatePicker, Input, showToast } from "../../ui/dist";
import "./App.css";

function App() {
  return (
    <>
      <Button onClick={() => showToast()}>showToast</Button>
      <Input></Input>
      <DatePicker></DatePicker>
    </>
  );
}

export default App;
