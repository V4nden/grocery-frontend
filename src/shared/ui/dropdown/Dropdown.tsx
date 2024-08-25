import React, { HTMLProps } from "react";
import "./dropdown.scss";
interface Props extends HTMLProps<HTMLSelectElement> {
  children: React.ReactNode;
}

const Dropdown = (props: Props) => {
  return (
    <select {...props} className={"dropdown " + props.className}>
      {props.children}
    </select>
  );
};

export default Dropdown;
