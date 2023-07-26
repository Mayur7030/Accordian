import { useState } from "react";
import questions from "./Api";
import Component from "./Myaccordian";
import './Accordian.css'

const Accordian = () => {
  const [data, setData] = useState(questions);
  return (
    <>
      <section></section>
      <h1>Mayur's questionary</h1>
      <br />
      {data.map((curr)=>{
        const {id} = curr;
        return <Component key={id} {...curr}/>
      })}
    </>
  );
};

export default Accordian;
