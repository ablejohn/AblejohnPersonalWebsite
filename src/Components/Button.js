import React, { useEffect } from "react";
import code from "https://js.getcode.com/v1";
import "./Button.css";

const Button = () => {
  useEffect(() => {
    const { button } = code.elements.create("button", {
      currency: "usd",
      destination: "AWKF7MP8PYcUicTo1makUkpVrMjzL9BULqeRQHG9ni6X",
      amount: 0.95,
    });

    button.mount("#button-container");

    // Cleanup function to unmount the button when the component is unmounted
    return () => {
      button.unmount();
    };
  }, []);

  return <div id="button-container" className="button-container"></div>;
};

export default Button;
