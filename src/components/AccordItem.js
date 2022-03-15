import React, { useState } from "react";
import arrowDown from "../images/icon-arrow-down.svg";
import arrowUp from "../images/up-arrow.svg";
const AccordItem = ({ question, answer }) => {
  const [toggle, setToggle] = useState(false);

  const togler = () => setToggle((prev) => !prev);
  return (
    <>
      <button
        className={
          toggle ? "accordion-btn btn-true" : "accordion-btn btn-false"
        }
        onClick={togler}
      >
        {question} <img src={toggle ? arrowUp : arrowDown} />
      </button>
      <div className='panel' style={{ display: toggle ? "block" : "none" }}>
        <p>{answer}</p>
      </div>
    </>
  );
};

export default AccordItem;
