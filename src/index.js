import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  React.createElement("div", {
    id: "theFirstElement",
    children: [
      React.createElement("div", { children: "Hello!" }),
      React.createElement("div", { children: "" }),
      React.createElement("div", { children: "Students!" }),
      React.createElement("button", {
        children: "ClickMe!",
        onClick: () => console.log("onClick"),
      }),
      React.createElement("img", { src: "", alt: "Hello Img" }),
    ],
  })
);
