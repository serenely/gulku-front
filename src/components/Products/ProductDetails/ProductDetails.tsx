import React, { useEffect} from "react";
import { ProductDetailsContainer, CardStyled, StyledTypography } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../../redux/store";
import { addToCart, fetchProductsRequest } from "../../../redux/actions/actions";
import { Typography } from '@mui/material';
import {   ButtonStyled,
  ListItemTextPrimary, 
  ListItemTextSecondary, 
   } from "../styles";
import { Image } from "antd";
import { Product } from "../../../utils/interface";

const ProductDetails: React.FC = () => {
  const { productId } = useParams<{ productId?: string }>();
   const dispatch = useDispatch();
   const products = useSelector((state: RootState) => state.products.productItems);
   useEffect(() => {
     dispatch(fetchProductsRequest());
   }, []);

   const productOne = products.find((product: any) => product._id === productId )

   const handleAddToCart = (productOne: Product | undefined) => {
    if (productOne) {
      dispatch(addToCart(productOne)); 
    } else {
      console.error("Undefined value");
    } 
   };
   
  if (!products) {
    return <div>Товар не найден</div>;
  }

  return (
    <ProductDetailsContainer>
      <div>
        <Typography variant="h4" color={"white"}>
          Product
        </Typography>
        <div >
          <div>
            <CardStyled variant="outlined">
              <div>
                <Image src={productOne?.imageUrl} width={200} />
                <ListItemTextPrimary>{productOne?.title}</ListItemTextPrimary>
                <ListItemTextSecondary secondary={`Price: $${productOne?.price}`}/>  
              </div>
              <div className="description_div">
                <Typography>{productOne?.text}</Typography>
              </div>
            </CardStyled>
          </div>
          <div>
          <ButtonStyled
                      type="button"
                      onClick={() => handleAddToCart(productOne)}
                    >
                      Add to Cart
                    </ButtonStyled>
          </div>
        </div>
      </div>
    </ProductDetailsContainer>
  );
};

export default ProductDetails;
