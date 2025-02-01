import { useState } from "react";

const faqData = [
  { question: "What is React?", answer: "React is a JavaScript library for building UI." },
  { question: "What is JSX?", answer: "JSX is a syntax extension for JavaScript." },
  { question: "What is React Router?", answer: "React Router helps with navigation in React apps." },
];

function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div>
      {faqData.map((item, index) => (
        <div key={index} className="border-b p-2">
          <button
            className="font-bold w-full text-left"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {item.question}
          </button>
          {openIndex === index && <p className="p-2">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
