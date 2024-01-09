import React from "react";

const Text = ({ type, cls, children }) => {
  const Element = type || "p";
  return <Element className={cls}>{children}</Element>;
};

export default Text;
