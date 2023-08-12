import React, { useState } from "react";
import FlashCard from "./flashcard/FlashCard";
import Accordian from "./accordian/Accordian";
import TipCalculator from "./tipCalculator/TipCalculator";
import EatNsplit from "./eat-n-split/EatNsplit";

// For Accordian
// const faqs = [
//   {
//     title: "Where are these chairs assembled?",
//     text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
//   },
//   {
//     title: "How long do I have to return my chair?",
//     text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
//   },
//   {
//     title: "Do you ship to countries outside the EU?",
//     text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
//   },
// ];
// For Accordian

// for eat-n-split
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

// for eat-n-split

const App = () => {
  return (
    <div>
      {/* <FlashCard /> */}
      {/* <Accordian data={faqs} /> */}
      {/* <TipCalculator /> */}
      <EatNsplit />
    </div>
  );
};

export default App;
