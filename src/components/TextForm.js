import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState(""); // this value will be assigned to text state variable

  const handleOnChange = (event) => {
    console.log("onchange acitvated");
    setText(event.target.value);
  };

  const handleOnClick = () => {
    console.log("onClick avtivated");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlt("Converted to uppercase", "success");
  };

  const clear = () => {
    console.log("onClick avtivated");
    let newText = "";
    setText(newText);
    props.showAlt("Textbox cleared", "success");
  };

  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>;
  const copy = () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlt("Text copied to clipboard", "success");
  };



  return (
    <>
      <div className={`container`}>
        <h3 className={`text-${props.Mode === "dark" ? "light" : "dark"}`}>{props.heading}</h3>
        <div className="mb-3">
          <textarea className={`form-control text-${props.color}`} id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button type="button" className={`btn btn-sm btn-${props.Mode === "dark" ? "light" : "dark"}`} onClick={handleOnClick}>
          Convert to uppercase
        </button>
        <button type="button" className={`btn mx-4 btn-sm btn-${props.Mode === "dark" ? "light" : "dark"}`} onClick={clear}>
          Clear text
        </button>
        <button type="button" className={`btn btn-sm btn-${props.Mode === "dark" ? "light" : "dark"}`} onClick={copy}>
          Copy to Clipboard
        </button>
        {/*  */}

        

        {/*  */}
        <div className={`text-${props.Mode === "dark" ? "light" : "dark"}  container my-3`}>
          <h4>your text summary</h4>
          <p>
            words: {text.split(" ").length}, charachters: {text.length}
          </p>
          <p>Reading time: {0.008 * text.split(" ").length}</p>
        </div>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string,
};
