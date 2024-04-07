import { RouterProvider } from "react-router-dom";
import "./App.scss";
import router from "./utils/router";
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
