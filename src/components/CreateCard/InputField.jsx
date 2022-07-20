import React from "react";

// Representing Single input field
const InputField = ({ item }) => {
  return (
    <div className="inputItem">
      <label htmlFor={item}>{item}</label>
      <input type="text" id={item} />
    </div>
  );
};

export default InputField;
