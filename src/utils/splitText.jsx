import React from "react";

const splitText = (text) => {
  return [...text].map((letter, index) => <span key={index}>{letter}</span>);
};

export default splitText;
