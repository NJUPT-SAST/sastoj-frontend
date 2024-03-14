import { Outlet } from "react-router-dom";
import "@sast/oj-ui-universal";

const Home = () => {
  return (
    <>
      This is Home
      <Outlet></Outlet>
      <s-button onclick={() => console.log("hello")}>Click me</s-button>
    </>
  );
};

export default Home;
