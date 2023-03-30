import "./Cart.css";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/Context";
import { CartListCard  ,SectionHeader,SectionWrapper} from "../../components";
const Cart = () => {


  return (
      <SectionWrapper>
        <SectionHeader>Cart</SectionHeader>
          <CartListCard/>
      </SectionWrapper>




  )
};

export default Cart;
