import React from "react";
import { ColorSystem } from "../utils/ColorSystem";

const ButtonContext = {
  MainButton: {
    border: "none",
    fontSize: "16px",
    padding: "10px 48px",
    borderRadius: "9999px",
    fontWeight: "500",
    color: "white",
    backgroundColor: ColorSystem.Maincolor.orange,
  },

  SubButton: {
    border: "none",
    fontSize: "16px",
    padding: "10px 48px",
    borderRadius: "9999px",
    fontWeight: "500",
    color: "white",
    backgroundColor: ColorSystem.Maincolor.green,
  },
};

export const ACButton = (props) => {
  return (
    <button style={ButtonContext[props.buttonContext]} className={props.class}>
      {props.buttonContents}
    </button>
  );
};
