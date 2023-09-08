import React, { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import { Product } from '../../utils/interface';
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsRequest, removeFromCart, updateCartFromLocalStorage } from "../../redux/actions/actions";
import {
  ButtonStyled,
  ListItemTextPrimary, 
  ListItemTextSecondary, 
  CartContainer,
  CardStyled,
  CardStyledOne,
  StyledImage,
  LinkStyled
} from "./styles";
import { RootState } from "../../redux/store";
import { LoadingOutlined } from "@ant-design/icons";

const Cart: React.FC = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector((state: RootState) => state.products.isLoading);
  const cartItems = useSelector((state: RootState) => state.cart.cartItems)
 
  const [removedProductId, setRemovedProductId] = useState<string>('');

  const handleRemoveFromCart = (_id: string) =>{
    setRemovedProductId(_id)
    dispatch(removeFromCart(_id))
  }

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    dispatch(updateCartFromLocalStorage(storedCartItems));
    dispatch(fetchProductsRequest());
  }, [removedProductId]);

  if (isLoading) {
    return <LoadingOutlined style={{width: "50px", height: "50px"}} />
  }

  return (
    <CartContainer>
      <div>
        <Typography variant="h4" color="white">
          Cart
        </Typography>
        {cartItems.length === 0 ? (
          <p>Cart is empty 😞</p>
        ) : (
          <CardStyledOne>
            {cartItems.map((product: Product) => (
              <div key={product?._id}>
                <LinkStyled href={`/products/${product?._id}`}>
                  <Button>
                    <CardStyled variant="outlined">
                      <div>
                        <StyledImage src={product?.imageUrl} />
                        <ListItemTextPrimary>{product?.title}</ListItemTextPrimary>
                        <ListItemTextSecondary secondary={`Price: ${product?.currency} ${product?.price}`} />
                      </div>
                    </CardStyled>
                  </Button>
                </LinkStyled>
                <div>
                  <ButtonStyled
                    type="button"
                    onClick={() => handleRemoveFromCart(product?._id)}
                    >
                    Remove from Cart
                  </ButtonStyled>
                </div>
              </div>
            ))}
          </CardStyledOne>
        )}
      </div>
    </CartContainer>
  );
}

export default Cart;