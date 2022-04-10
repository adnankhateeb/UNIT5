import { useState } from "react";
import "./App.css";
import { Category } from "./components/Category.jsx";

function App() {
   let data = [
      {
         image: "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
         label: "Top Offers",
      },
      {
         image: "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
         label: "Grocery",
      },
      {
         image: "https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
         label: "Mobiles",
      },
   ];
   const [counter, setCounter] = useState(0);
   const handleChange = (value) => {
      setCounter(counter + value);
   };


   return (
      // navbar part
      <div>
         <div className="navbar">
            {data.map((e) => {
               return <Category image={e.image} label={e.label} />;
            })}
         </div>
         {/* counter part */}
         <div>
            <h3>Counter : {counter}</h3>
            <button
               onClick={() => {
                  handleChange(1);
               }}
            >
               Add 1
            </button>
            <button
               onClick={() => {
                  handleChange(-1);
               }}
            >
               Subtract 1
            </button>
         </div>
         <div>Number is {counter % 2 === 0 ? "even" : "odd"}</div>
      </div>
   );
}

export default App;
