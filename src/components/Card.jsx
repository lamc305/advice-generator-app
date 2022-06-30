import React, { useState } from "react";
import axios from "axios";
import divider from "../images/pattern-divider-desktop.svg";
import dice from "../images/icon-dice.svg";
const Card = () => {
  const [text, setText] = useState({
    id: 177,
    advice:
      "It is easy to sit up an take notice, what's difficult is getting up and taking action.",
  });

  function obtainNewAdivice() {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        setText(response.data.slip);
      })
      .catch((error) => {
        console.log(`Something went wrong: ${error}`);
      })
      .finally(() => {
        console.log("Done");
      });
  }

  return (
    <div className="container">
      <p className="text-id">Advice #{text.id}</p>
      <p className="text-advice">"{text.advice}"</p>
      <img className="img divider" src={divider} alt="divisor" />
      <div className="container-img">
        <img className="img" onClick={obtainNewAdivice} src={dice} alt="dice" />
      </div>
    </div>
  );
};

export default Card;
