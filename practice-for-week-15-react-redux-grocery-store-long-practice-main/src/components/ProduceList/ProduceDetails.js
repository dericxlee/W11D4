import { addItem } from "../../store/cart";
import { useDispatch } from "react-redux";

function ProduceDetails({ produce }) {
  const cartItem = {};

  const dispatch = useDispatch()

  const handleClick = e => {
    e.preventDefault();
    // cartItem = {
    //   ...cartItem,
    //   newKey: {}
    // } 
    dispatch(addItem(produce.id))
  }

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button 
          className={"like-button" + (produce.liked ? " selected" : "")}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button onClick={handleClick}
          className={"plus-button" + (cartItem ? " selected" : "")}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;