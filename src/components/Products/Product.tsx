import React, { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import { 
  ButtonStyled,
  CardStyled,
  CardStyledOne,
  LinkStyled,
  ListItemTextPrimary, 
  ListItemTextSecondary, 
  ProductContainer,
  StyledImage
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {  addToCart, fetchProductsRequest } from "../../redux/actions/actions";
import { Product } from "../../utils/interface";
import { LoadingOutlined } from "@ant-design/icons";

const ProductList: React.FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.products.isLoading);
  const productItems = useSelector((state: RootState) => state.products.productItems);

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product)); 
   };

  const itemsPerPage = 6; 
  const [currentPage, setCurrentPage] = useState<number>(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProducts = productItems.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };


  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, []);

  if (isLoading) {
    return <LoadingOutlined style={{width: "50px", height: "50px"}} />
  }

  return (
    <ProductContainer>
      <Typography  variant="h4" color={"white"}>
        Products
      </Typography>
        <CardStyledOne >
          {displayedProducts?.map((product) => (
            <div key={product?._id}>
              <LinkStyled href={`/products/${product?._id}`}>
                <Button >
                  <CardStyled variant="outlined">
                    <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                      <StyledImage src={product?.imageUrl}/>
                    </div>
                    <ListItemTextPrimary>{product?.title}</ListItemTextPrimary>
                    <ListItemTextSecondary secondary={`Цена: $${product?.price}`}/>
                  </CardStyled>
                </Button>
              </LinkStyled>
              <div>
                    <ButtonStyled
                      type="button"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </ButtonStyled>
                  </div>
            </div>
          ))}
        </CardStyledOne>
        <div style={{ width:"90%", display:"flex",justifyContent:"right", alignItems:"revert"}}>
          {productItems.length > itemsPerPage && (
            <div >
              {Array.from({ length: Math.ceil(productItems.length / itemsPerPage) }, (_, index) => (
                <button style={{cursor:"pointer", padding:5, margin: 5}} key={index} onClick={() => handlePageChange(index + 1)}>
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </div>
    </ProductContainer>
  );
};

export default ProductList;
