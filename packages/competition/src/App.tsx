import { Button, showToast } from "../../ui/dist";
import "./App.css";

function App() {
  return (
    <>
      <Button onClick={() => showToast()}>showToast</Button>
    </>
  );
}

export default App;
