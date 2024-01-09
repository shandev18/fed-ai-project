import React from "react";
import { StyledTextArea, Inputdiv } from "./styled-input.tsx";
const InputForm = () => {
  return (
    <Inputdiv>
      <StyledTextArea
        rows={4}
        placeholder="Enter your text here..."
        // value={text}
        // onChange={(e) => setText(e.target.value)}
      />
    </Inputdiv>
  );
};

export default InputForm;
