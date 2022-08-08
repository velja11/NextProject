import React from "react";

interface InputProps {
  plcHolder: string;
  classStyle: string;
  typeInp: string;
}

const InputRef: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { plcHolder, classStyle, typeInp },
  ref?
) => {
  return (
    <input
      ref={ref}
      className={classStyle}
      placeholder={plcHolder}
      type={typeInp}
    />
  );
};

export const Input = React.forwardRef(InputRef);
