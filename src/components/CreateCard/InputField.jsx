import React from "react";
const InputField = ({ item }) => {
  return (
    <div className="inputItem">
      <label htmlFor={item}>{item}</label>
      <input type="text" id={item} />
    </div>
  );
};

export default InputField;
