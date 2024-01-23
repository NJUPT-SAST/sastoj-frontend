import { Checkbox, Dialog, Input, Radio, RadioGroup } from "@sast/oj-ui";

function App() {
  const test = (value: boolean) => {
    console.log(value);
  };
  return (
    <>
      {/* <Input placeholder="" onChange={test}></Input> */}
      <Checkbox onChecked={test}></Checkbox>
      {/* <RadioGroup direction="vertical" onChange={test} defaultValue="vuejs" /> */}
      {/* <Dialog></Dialog> */}
    </>
  );
}

export default App;
