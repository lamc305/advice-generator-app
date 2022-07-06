import React, { useState } from "react";
import divider from "../images/pattern-divider-desktop.svg";
import dice from "../images/icon-dice.svg";
import getAdvice from "../services/getAdvice";
import spinner from "../images/Spinner-1s-200px.svg";

const Card = () => {
  const [text, setText] = useState({
    id: 177,
    advice:
      "It is easy to sit up an take notice, what's difficult is getting up and taking action.",
  });
  const [loading, setLoading] = useState(false);

  function obtainNewAdivice() {
    setLoading(true);
    getAdvice().then((e) => {
      setText(e);
      setTimeout(() => setLoading(false), 1000)
    })
  }

  return (
    <div className="container">
      {loading ? (
        <img src={spinner} alt="spinner" />
      ) : (
        <div>
          <p className="text-id">Advice #{text.id}</p>
          <p className="text-advice">"{text.advice}"</p>
        </div>
      )}
      <img className="img divider" src={divider} alt="divisor" />
      <div className="container-img">
        <img className="img" onClick={obtainNewAdivice} src={dice} alt="dice" />
      </div>
    </div>
  );
};

export default Card;
