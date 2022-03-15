import React from "react";

import bgbox from "../images/illustration-box-desktop.svg";
import mobbg from "../images/illustration-woman-online-mobile.svg";
import AccordItem from "./AccordItem";
import { Q_and_A } from "../data/QnA";
const Card = () => {
  const product = Q_and_A;
  return (
    <div className='card-con'>
      <img src={bgbox} id='box' />
      <img src={mobbg} id='mobbox' />
      <div className='right-con'>
        <h1>FAQ</h1>
        <div className='accord-con'>
          {product.map((val, index) => {
            return (
              <AccordItem
                question={val.question}
                answer={val.answer}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
