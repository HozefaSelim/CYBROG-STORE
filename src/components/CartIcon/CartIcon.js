
import "./CartIcon.css";
import { useContext, useEffect, useState } from "react";
import {Context} from '../../Context/Context'
function CartIcon() {
  const {count } = useContext(Context);
  return (
    <div className="cart-icon">
      <i className="fa fa-shopping-cart position-relative">
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {count}
        </span>
      </i>
    </div>
  );
}
export default CartIcon;
