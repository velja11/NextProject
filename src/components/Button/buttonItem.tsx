import { type } from "os";
import React, { ReactNode } from "react";

type buttonType = "button" | "submit" | "reset" | undefined;

const Button: React.FC<{
  buttonClass: string;
  buttonType: buttonType;
  children: ReactNode;
  doSomething?: () => void;
}> = ({ buttonClass, children, doSomething, buttonType }) => {
  return (
    <button className={buttonClass} type={buttonType} onClick={doSomething}>
      {children}
    </button>
  );
};

export default Button;
