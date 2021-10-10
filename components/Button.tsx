import React from "react";
import "./index.css";
import { Icon, IconsNames } from "./Icon";

type ButtonType = {
  color: "primary" | "error";
  size: "small" | "regular" | "large";
  format?: "default" | "outline";
  icon?: IconsNames;
};

export const Button: React.FC<ButtonType> = ({
                                               color,
                                               size,
                                               format = "default",
                                               icon,
                                             }) => {
  return (
    <div className="m-6">
      <button className={`btn ${icon && "icon"} ${color}-${format} ${size}`}>
        <div> {icon && <Icon nameOfIcon={icon} color={color} />} Click me</div>
      </button>
    </div>
  );
};
