import CartCard from "../CartCard/CartCard";
import "./CartListCard.css";
import { MdPayment } from "react-icons/md";
import { useContext, useState} from "react";
import {Link} from 'react-router-dom'
import { Context } from "../../Context/Context";
const CartListCard = () => {
  const { AddedProducts } = useContext(Context);
  const sum = (items) =>{
    let result = 0;
      for(let i = 0 ; i < items.length; i++){
        result += items[i].count * items[i].price
      }
      return result;
  }
  return (
    <div className="list-card ">
      {AddedProducts.map(({ id, title, price, category, description, image  , count}) => {
        return (
          <CartCard
            key={id}
            id={id}
            title={title}
            price={price}
            category={category}
            description={description}
            image={image}
            Count={count}
           
  
          />
        );
      })}
      <div className="pay">
        {AddedProducts.length === 0 ? 
        <>
        <h4 className="empty">Your Cart Is Empty</h4> <br/>
        <Link to="/products"><button className="btn btn-warning">
        <spans>Back To Shopping</spans>
        </button></Link>
        </>
        : <button className="btn btn-success">
          <MdPayment /> <span className="p-3">Pay</span>
        </button>}
      </div>
     
     <p>total Price :  { sum(AddedProducts)}</p>
    </div>
  );
};
export default CartListCard;
