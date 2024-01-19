import { Input } from "@sast/oj-ui";

function App() {
  const test = (value, e) => {
    console.log(value);
  };
  return (
    <>
      <Input placeholder="" onChange={test}></Input>
    </>
  );
}

export default App;
