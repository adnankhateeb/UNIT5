import "./styles/category.css";

function Category(props) {
   return (
      <div className="category">
         <img src={props.image} alt=""></img>
         <b>{props.label}</b>
      </div>
   );
}

export { Category };
