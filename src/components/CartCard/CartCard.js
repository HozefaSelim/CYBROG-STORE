import "./CartCard.css";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/Context";

const CartCard = ({
  id,
  title,
  price,
  category,
  description,
  image,
  Count,
}) => {
  const { DeleteFromCart, decreaseCart, increaseCart } = useContext(Context);

  return (
    <div className="cart-card">
      <ul>
        <li className="cart-item-image">
          <img src={image} alt={title} />
        </li>
        <li>
          <span>{category}</span>
        </li>
        <li>
          <button
            className=" BTN btn btn-warning"
            onClick={() => decreaseCart(id)}
            disabled={Count === 1}
          >
            -
          </button>
        </li>
        <li>
          <div className="qty"> {Count} </div>
        </li>

        <li>
          <button
            className=" BTN btn btn-warning"
            onClick={() => increaseCart(id)}
          >
            +
          </button>
        </li>
        <li>
          <div className="totalPrice">
            {" "}
            Price: $ {Number.parseFloat(price * Count).toFixed(2)}
          </div>
        </li>

        <li>
          <button
            onClick={() => DeleteFromCart(id)}
            className="btn btn-danger removeBtn"
          >
            <i className="fa fa-trash"></i> Delete
          </button>
        </li>
      </ul>
    </div>
  );
};

export default CartCard;
