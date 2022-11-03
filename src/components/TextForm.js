import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState(""); // this value will be assigned to text state variable

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleOnClick = () => {
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
    navigator.clipboard.writeText(text);
    props.showAlt("Text copied to clipboard", "success");
  };

  const [txtclr, setTxtclr] = useState("dark");
  const color = (clr) => {
    if (clr === "red") {
      setTxtclr("danger");
    } else if (clr === "blue") {
      setTxtclr("primary");
    } else if (clr === "green") {
      setTxtclr("success");
    } else if (clr === "yellow") {
      setTxtclr("warning");
    } else {
      setTxtclr("dark");
    }
  };

  return (
    <>
      <div className={`container`}>
        <h3 className={`text-${props.Mode === "dark" ? "light" : "dark"}`}>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className={`form-control text-${txtclr}`}
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button type="button" className={`btn my-2 mx-2 btn-sm btn-${props.Mode === "dark" ? "light" : "dark"}`} onClick={handleOnClick}>
          Convert to uppercase
        </button>
        <button type="button" className={`btn mx-2 my-2 btn-sm btn-${props.Mode === "dark" ? "light" : "dark"}`} onClick={clear}>
          Clear text
        </button>
        <button type="button" className={`btn btn-sm mx-2 my-2 btn-${props.Mode === "dark" ? "light" : "dark"}`} onClick={copy}>
          Copy to Clipboard
        </button>
        {/* inserting new buttons to change the colors of fonts */}
        <div className="form-check form-check-inline">
          <label className="form-check-label" htmlFor="inlineRadio1">
            <strong> Font Color:- </strong>
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
            onClick={() => {
              color("red");
            }}
          />
          <label className="form-check-label text-danger" htmlFor="inlineRadio1">
            Red
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
            onClick={() => {
              color("blue");
            }}
          />
          <label className="form-check-label text-primary" htmlFor="inlineRadio1">
            Blue
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
            onClick={() => {
              color("green");
            }}
          />
          <label className="form-check-label text-success" htmlFor="inlineRadio1">
            Green
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
            onClick={() => {
              color("yellow");
            }}
          />
          <label className="form-check-label text-warning" htmlFor="inlineRadio1">
            Yellow
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
            defaultChecked
            onClick={() => {
              color("dark");
            }}
          />
          <label className="form-check-label text-dark" htmlFor="inlineRadio1">
            Black
          </label>
        </div>

        {/*  */}
        <div className={`text-${props.Mode === "dark" ? "light" : "dark"}  container my-3`}>
          <h4>your text summary</h4>
          <p>
            words:{" "}
            {
              text.split(/\n+/).filter((element) => {
                return element.length !== 0;
              }).length
            }
            , charachters: {text.length}
          </p>
          <p>
            Reading time:{" "}
            {0.008 *
              text.split(/\n+/).filter((element) => {
                return element.length !== 0;
              }).length}
          </p>
        </div>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string,
};
