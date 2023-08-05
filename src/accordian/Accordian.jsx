import React from "react";
import AccordianItem from "./AccordianItem";
import "./accordian.css";

const Accordian = ({ data }) => {
  return (
    <div className="accordion">
      {data.map((faq, index) => (
        <AccordianItem
          title={faq.title}
          text={faq.text}
          num={index}
          key={faq.title}
        />
      ))}
    </div>
  );
};

export default Accordian;
