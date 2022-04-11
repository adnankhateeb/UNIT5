import { useState } from "react";
import './App.css'


function App() {
   const [data, setData] = useState({
      score: 76,
      wicket: 2,
      ball: 50,
      status: "",
   });
   //  let won = "";
   const handleChange = (section, value) => {
      if (data.score > 100){
         return;
      }
      if(data.wicket > 11){
        return;
      }
      console.log(data);
      data[`${section}`] += value;
      if(data.score > 100){
        data.status = 'India Won';
        setData({...data})
        return;
      }
      setData({ ...data });
   };

   return (
      <div className="App">
         <h3>India:</h3>
         <div className="banner">
            <div>
               Score:{" "}
               <h1 className="scoreCount">
                  {
                     // show "score" here
                     data.score
                  }
               </h1>
            </div>
            <div>
               Wicket:{" "}
               <h1 className="wicketCount">
                  {
                     // show wicket here
                     data.wicket
                  }
               </h1>
            </div>

            <div>
               Over:{" "}
               <h1 className="overCount">
                  {
                     // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
                     // if 1 more ball is thrown then over is now 5.0
                     // you have to write logic to form this string from current ball number.
                     Math.floor(data.ball / 6) + "." + (data.ball % 6)
                  }
               </h1>
            </div>
         </div>

         <div className="addScore">
            Add Score
            {/* these buttons should add the respective amount in the score */}
            <button
               className="addScore1"
               onClick={() => {
                  handleChange("score", 1);
               }}
            >
               Add 1
            </button>
            <button
               className="addScore4"
               onClick={() => {
                  handleChange("score", 4);
               }}
            >
               Add 4
            </button>
            <button
               className="addScore6"
               onClick={() => {
                  handleChange("score", 6);
               }}
            >
               Add 6
            </button>
         </div>

         <div className="addWicket">
            Add Wicket
            {/* Increase the count of wicket */}
            <button
               onClick={() => {
                  handleChange("wicket", 1);
               }}
            >
               Add 1 wicket
            </button>
         </div>

         <div className="addBall">
            Add ball
            {/* Increase the total number of balls thrown here. */}
            <button
               onClick={() => {
                  handleChange("ball", 1);
               }}
            >
               Add 1
            </button>
         </div>

         {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
         <h1 className="status">{data.status}</h1>
      </div>
   );
}

export default App;
