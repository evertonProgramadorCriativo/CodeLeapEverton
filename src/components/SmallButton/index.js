import React from "react";
import * as C from "./styles";

const SmallButton = ({ Text, onClick, Type = "button" }) => {
  return (
    <C.SmallButton type={Type} onClick={onClick}>
      {Text}
    </C.SmallButton>
  );
};

export default SmallButton;
