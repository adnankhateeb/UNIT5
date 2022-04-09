import React from "react";
import { useState } from "react";
import './CounterComponent.css'

export default function CounterComponent() {
   const [counter, setCounter] = useState(0);   

   const handleCounter = (value) => {
      return value === 2
         ? setCounter(counter * 2)
         : setCounter(counter + value);
   };
   return (
      <div>
         <h1 className={counter % 2 === 0 ? 'green' : 'red'}>{counter}</h1>
         <button
            onClick={() => {
               handleCounter(1);
            }}
         >
            Increment
         </button>
         <button
            onClick={() => {
               handleCounter(-1);
            }}
         >
            Decrement
         </button>
         <button
            onClick={() => {
               handleCounter(2);
            }}
         >
            Double
         </button>
      </div>
   );
}
