import { useState } from "react";

const Component = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div>
        <h3>{question}</h3>
        <span onClick={() => setShow(!show)}>{show ? "-" : "+"}</span>
      </div>
      <p>{show && answer}</p>
    </>
  );
};

export default Component;
