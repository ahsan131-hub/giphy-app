import React from "react";
import { useState } from "react";
const Header = ({ onSub }) => {
  const [text, settext] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please fill the text");
      return;
    }
    onSub(text);
    settext("");
  };

  return (
    <div className="my-container">
      <h1>Giphy App </h1>
      <form className="form-group" onSubmit={onSubmit}>
        <div className="mb-3 m-4 ">
          <input
            type="text"
            className=" form-control "
            id="text"
            placeholder="Giphy Name"
            value={text}
            onChange={(e) => {
              settext(e.target.value);
            }}
          ></input>

          <button type="submit" className="btn btn-primary m-2">
            search
          </button>
        </div>
      </form>
      <button className="btn btn-danger m-2 ">Clear Giphs</button>
    </div>
  );
};

export default Header;
