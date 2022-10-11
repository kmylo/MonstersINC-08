import React, { forwardRef, useRef } from "react";

const Input = forwardRef((props, ref) => {
  const { onChange } = props;
  const inputRef = useRef();

  const passRef = (element) => {
    inputRef.current = element;
    if (typeof ref === "function") ref(element);
    else ref.current = element;
  };

  const handleClear = (event) => {
    inputRef.current.value = "";
    event.target = inputRef.current;
    onChange(event);
  };

  console.log({ input: inputRef.current });
  return (
    <div className="search-container">
      <input onChange={onChange} ref={passRef} {...props} />
      <button onClick={handleClear}>Clear</button>
    </div>
  );
});

export default Input;
