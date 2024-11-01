import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./router";
import "./index.scss";

import { loadOml2d } from "oh-my-live2d";
const oml2d = loadOml2d({
  models: [
    {
      path: "https://model.oml2d.com/cat-black/model.json",
      scale: 0.15,
      position: [0, 20],
      stageStyle: {
        height: 350,
      },
    },
  ],
  sayHello: true,
  statusBar: {
    loadSuccessMessage: "欢迎来到 OJ-Sast！",
  },
});
oml2d.onStageSlideIn = () => {
  oml2d.tipsMessage("欢迎来到 OJ-Sast！", 3000, 10);
};
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
