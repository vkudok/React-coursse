import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./components/Button/Button";
import "./index.css";

const SPAN_ID = "123";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Button onClick={() => console.log("click")}>Заказать</Button>
    <Button onClick={() => console.log("cancel")}>Отменить</Button>
    <span id={SPAN_ID}>Hello</span>
  </div>
);

// React.createElement("div", {
//   children: [
//     React.createElement(Button, {
//       children: "Заказать",
//       onClick: () => console.log("click"),
//     }),
//     React.createElement(Button, {
//       children: "Отменить",
//       onClick: () => console.log("cancel"),
//     }),
//     React.createElement("span", { children: "Hello", id: "123" }),
//   ],
// })

// class MyButton {
//   x;
//   y;
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//   click() {}
// }

// function MyButton(x, y) {
//   this.x = x;
//   this.y = y;
// }

// MyButton.prototype.click = function () {
//   console.log(this.x);
// };

// const button = new MyButton(1, 5);

// button.click();

// const clickWithContext = button.click.bind(button);

// clickWithContext();
