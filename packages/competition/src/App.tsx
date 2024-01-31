import { Button, CarouselItem, showToast } from "@sast/oj-ui";
import { Sheet, Carousel } from "@sast/oj-ui";
import { useState } from "react";

function App() {
  const [visible, setVisible] = useState<boolean>(false);

  const hello = () => {
    showToast({ content: <>hello</> });
  };
  return (
    <>
      <Button onClick={hello}>showToast</Button>
    </>
  );
}

export default App;
