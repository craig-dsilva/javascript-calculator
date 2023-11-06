import React from "react";

interface ButtonInterface {
  id: string;
  val: string;
  handleButton: (val: string) => void;
}

const Button: React.FC<ButtonInterface> = ({ id, val, handleButton }) => {
  return (
    <div id={id} onClick={() => handleButton(val)}>
      {val}
    </div>
  );
};

export default Button;
