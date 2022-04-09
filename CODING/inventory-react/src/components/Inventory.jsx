import { useEffect, useState } from "react";

export const Inventory = () => {
   const [inv, setInv] = useState({
      books: 10,
      notebooks: 13,
      pens: 40,
      inkpens : 0,
   });

   const [total, setTotal] = useState(inv.books + inv.notebooks + inv.pens);
   // Create add and remove functions here that changes the
   // state.
   const updateTotal = () => {
      setTotal(inv.books + inv.notebooks + inv.pens + inv.inkpens);
   };

   const handleChange = (section, value) => {
      // console.log(section);
      if ((inv[`${section}`] <= 0) && (value === -1)) {
         alert("😐 You can't go below zero! 😐");
         return;
      }
      inv[`${section}`] = inv[`${section}`] + value;
      // console.log(inv);
      setInv({ ...inv });
   };

   // const[total, setTotal] = useState()
   return (
      <div
         style={{
            border: "1px solid black",
            borderRadius: "3px",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            width: "400px",
         }}
      >
         <div className="items">
            <span>Books: </span>
            <button
               className="circlularButton"
               onClick={() => {
                  handleChange("books", 1);
                  updateTotal(1);
               }}
            >
               +
            </button>
            <button
               className="circlularButton"
               onClick={() => {
                  handleChange("books", -1);
                  updateTotal(-1);
               }}
            >
               -
            </button>
            <span>{inv.books}</span>
         </div>
         <div className="items">
            <span>Notebooks: </span>
            <button
               className="circlularButton"
               onClick={() => {
                  handleChange("notebooks", 1);
                  updateTotal(1);
               }}
            >
               +
            </button>
            <button
               className="circlularButton"
               onClick={() => {
                  handleChange("notebooks", -1);
                  updateTotal(-1);
               }}
            >
               -
            </button>
            <span>{inv.notebooks}</span>
         </div>
         <div className="items">
            <span>Pen: </span>
            <button
               className="circlularButton"
               onClick={() => {
                  handleChange("pens", 1);
                  updateTotal(1);
               }}
            >
               +
            </button>
            <button
               className="circlularButton"
               onClick={() => {
                  handleChange("pens", -1);
                  updateTotal(-1);
               }}
            >
               -
            </button>
            <span>{inv.pens}</span>
         </div>
         <div className="items">
            <span>Ink Pens: </span>
            <button className="circlularButton"
               onClick={() => {
                  handleChange("inkpens", 1);
                  updateTotal(1);
               }} >+</button>
            <button className="circlularButton"
               onClick={() => {
                  handleChange("inkpens", -1);
                  updateTotal(-1);
               }}>-</button>
            <span>{inv.inkpens}</span>
         </div>
         {/*calculate total and show it*/}
         total: {total}
      </div>
   );
};
