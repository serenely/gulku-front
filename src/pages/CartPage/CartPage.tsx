import React from "react";
import { CartPageContainer } from "./styles";
import Cart from "../../components/Cart/Cart";

const CartPage: React.FC = ()=>{
  return(
    <CartPageContainer>
        <Cart/>            
    </CartPageContainer>
  )
}

export default CartPage;